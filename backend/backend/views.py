from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


import google.generativeai as genai
import os
from dotenv import load_dotenv
load_dotenv()
genai.configure(api_key=os.environ["API_KEY"])



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
    print(message)
    print("line2", type(message))
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(message)
    print(response.text)
    return Response({"response": response.text})

    
