from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import RegisterSerializer

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer


class LoginView(TokenObtainPairView):
    pass