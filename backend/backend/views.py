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
genai.configure(api_key=os.environ["API_KEY"])

# api_key = "AIzaSyCnJLpZHuCB_PWd5HFKCrcm5FEuhLrXrwA"


PROJECTS = [
    {
        "name": "Logistic Hub MERN",
        "description": "This is a description of Project One.",
        "githubLink": "https://github.com/shivamgupta214/Logistic-Hub-FULL-STACK"
    },
    {
        "name": "Project Two",
        "description": "This is a description of Project Two.",
        "githubLink": "https://github.com/shivamgupta214/Sudoko_Solver"
    },
    # Add more projects as needed
]

@api_view(['POST'])
def register_user(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response({'error': 'Username and password are required'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.create_user(username=username, password=password)
        user.save()
        return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_projects(request):
    print("line 48",request)
    return Response(PROJECTS, status=status.HTTP_200_OK)

@api_view(['POST'])
def genAIcall(request):
    message = request.data.get('requestR')
    file = request.FILES.get('file')
    print("line 55", request)
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
        f"give a compatibility score out of 10 along with reasoning.\n\n"
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

    