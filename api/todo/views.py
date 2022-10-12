from django.contrib.auth import authenticate
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import Todo
from .serializers import TodoSerializer

# Create your views here.

@csrf_exempt
@api_view(['POST'])
@permission_classes((AllowAny,))
def login(request):
    username = request.data['username']
    password = request.data['password']
    user = authenticate(username=username, password=password)
    if not user:
        return Response({'error': 'invalid credentials'}, status=status.HTTP_404_NOT_FOUND)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key}, status=status.HTTP_200_OK)

@csrf_exempt
@api_view(['POST'])
@permission_classes((AllowAny,))
def register(request):
    try:
        user = User(username=request.data['username'])
        user.set_password(request.data['password'])
        user.save()
        return Response({'status': 'done'}, status=status.HTTP_200_OK)
    except Exception as err:
        print(err)
        return Response({'error', 'internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@csrf_exempt
@api_view(['GET', 'POST'])
def list_create(request):
    try:
        user = request.user
        if request.method == 'GET':
            todos = user.todos.all()
            serializer = TodoSerializer(todos, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        elif request.method == 'POST':
            todo = Todo(title=request.data['title'], user=user)
            todo.save()
            serializer = TodoSerializer(todo)
            return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as err:
        print(err)
        return Response({'error', 'internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@csrf_exempt
@api_view(['GET',])
def change_status(request, id):
    try:
        user = request.user
        todo = user.todos.get(id=id)
        todo.is_done = not todo.is_done
        todo.save()
        serializer = TodoSerializer(todo)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as err:
        print(err)
        return Response({'error', 'internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@csrf_exempt
@api_view(['GET','PUT', 'DELETE',])
def edit_delete(request, id):
    try:
        user = request.user
        todo = user.todos.get(id=id)
        if request.method == 'PUT':
            todo.title = request.data['title']
            todo.save()
        if request.method == 'DELETE':
            todo.delete()
        serializer = TodoSerializer(todo)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as err:
        print(err)
        return Response({'error', 'internal server error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
