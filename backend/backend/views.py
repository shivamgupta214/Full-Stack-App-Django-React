from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from PyPDF2 import PdfReader
from docx import Document
import google.generativeai as genai
import os
from dotenv import load_dotenv
load_dotenv()
from django.contrib.auth import authenticate, login, logout


api_key = "Your API KEY"
genai.configure(api_key = api_key)
model = genai.GenerativeModel("gemini-1.5-flash")

PROJECTS = [
    {
        "name": "Logistic Hub MERN",
        "githubLink": "https://github.com/shivamgupta214/Logistic-Hub-FULL-STACK",
        "image" : "https://miro.medium.com/v2/resize:fit:678/0*kxPYwfJmkXZ3iCWy.png"
    },
    {
        "name": "Sudoko Solver",
        "githubLink": "https://github.com/shivamgupta214/Sudoko_Solver",
        "image" : "https://www.python.org/static/community_logos/python-logo-master-v3-TM-flattened.png"
    },
    {
        "name": "Todo Web App - Frontend",
        "githubLink": "https://github.com/shivamgupta214/Todo-Web-App_FrontEnd",
        "image" : "https://media2.dev.to/dynamic/image/width=1600,height=900,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Feibm96k9y07irdwu0wlj.png"
    },
    {
        "name": "Todo Web App - Backend",
        "githubLink": "https://github.com/shivamgupta214/Todo-Web-App_BackEnd",
        "image" : "https://miro.medium.com/v2/resize:fit:1400/1*XP-mZOrIqX7OsFInN2ngRQ.png"
    },
    {
        "name": "Stack OVerflow Data Crawling with Data Visualisation",
        "githubLink": "https://github.com/shivamgupta214/StackOverflow_DataCarwling",
        "image" : "https://www.python.org/static/community_logos/python-logo-master-v3-TM-flattened.png"
    },
    # Add more projects as needed
]

@api_view(['POST'])
def register_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    email = request.data.get('email')

    if not username or not password:
        return Response({'error': 'Username and password are required'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.create_user(username=username, password=password, email=email)
        user.save()
        return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def login_user(request):
    username = request.data.get('username')
    password = request.data.get('password')
    print(request.data)
    if not username or not password:
        return Response({'error': 'Username and password are required'}, status=status.HTTP_400_BAD_REQUEST)

    # Authenticate the user
    user = authenticate(username=username, password=password)
    if user is not None:
        # Log the user in
        login(request, user)  # This creates a session for the user
        return Response({'message': 'User logged in successfully'}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)
    

@api_view(['POST'])
def logout_user(request):
    # Log out the user
    logout(request)
    return Response({'message': 'User logged out successfully'}, status=status.HTTP_200_OK)



    
@api_view(['GET'])
def get_projects(request):
    print("line 48",request)
    return Response(PROJECTS, status=status.HTTP_200_OK)

@api_view(['POST'])
def genAIcall(request):
    message = request.data.get('requestR')
    file = request.FILES.get('file')
    print("line 55", request.data)
    if not file:
        return Response({"error": "No file uploaded"}, status=status.HTTP_400_BAD_REQUEST)

    file_extension = file.name.split('.')[-1].lower()
    extracted_text = ""

    try:
        if file_extension == "pdf":
            extracted_text = extract_text_from_pdf(file)
        elif file_extension in ["doc", "docx"]:
            extracted_text = extract_text_from_doc(file)

        prompt = (
        f"Evaluate the following resume text against the given job description and "
        f"give a compatibility score out of 10.\n\n"
        f"--- Job Description ---\n{message}\n\n"
        f"--- Resume ---\n{extracted_text}\n\n"
        f"Score (0-10) and Reasoning:"
        )
        model = genai.GenerativeModel("gemini-1.5-flash")
        response = model.generate_content(prompt)
        return Response({"response": response.text})
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


def extract_text_from_pdf(pdf_file):
    """Extract text from a PDF file using PyMuPDF."""
    text = ""
    pdf_document = PdfReader(pdf_file)
    number_of_pages = len(pdf_document.pages)
    page = pdf_document.pages[0]
    text = page.extract_text()
    print("line 81", number_of_pages)
    # for page_num in range(pdf_document.page_count):
    #     page = pdf_document[page_num]
    #     text += page.get_text("text")
    
    # pdf_document.close()
    return text

def extract_text_from_doc(doc_file):
    """Extract text from a DOCX file using python-docx."""
    text = ""
    document = Document(doc_file)
    
    for paragraph in document.paragraphs:
        text += paragraph.text + "\n"
    
    return text

    
