from django.contrib.auth import authenticate
from rest_framework.decorators import api_view 
from rest_framework.response import Response
from rest_framework import status


from .serializers import ContactSerializers

# Create your views here.


@api_view(['POST'])

def create_contact(request):

    serializer=ContactSerializers(data=request.data)

    if serializer.is_valid():
        serializer.save()

        return Response(
            {
                "message":"Message Submitted Successfully!",
                "data":serializer.data
            },
            status=status.HTTP_201_CREATED
        )
    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )



@api_view(['POST'])
def admin_login(request):

    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)

    if user is not None and user.is_superuser:
        return Response({
            "message": "Login Successful",
            "username": user.username
        }, status=status.HTTP_200_OK)

    return Response({
        "message": "Invalid Username or Password"
    }, status=status.HTTP_401_UNAUTHORIZED)