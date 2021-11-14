from rest_framework import serializers
from .models import User, Idea

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model=User
        fields='__all__'

class IdeaSerializer(serializers.ModelSerializer):
    username=serializers.CharField(source="user.name")
    class Meta:
        model=Idea
        fields='__all__'