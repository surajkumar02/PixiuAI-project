from django.shortcuts import render
from .models import User,Idea
from .serializers import UserSerializer,IdeaSerializer
from rest_framework import generics
from rest_framework.views import APIView,Response,status
from rest_framework_simplejwt.tokens import RefreshToken

# Create your views here.
class Login(APIView):
    def post(self,request):
        if request.data:
            try:
                username=request.data['email']
                password=request.data['password']
                useravail=User.objects.get(username=username)
                if useravail.password==password:   
                    token=RefreshToken.for_user(useravail)
                    return Response(data={"username":useravail.name,
                    "email":useravail.email,
                    "token":{"refresh":str(token),
                    "access":str(token.access_token)}
                    })
                return Response("Incorrect Password",status=status.HTTP_422_UNPROCESSABLE_ENTITY)    
            except:
                return Response("Incompleted format",status=status.HTTP_422_UNPROCESSABLE_ENTITY)
        
        return Response("Enter Valid Credentials",status=status.HTTP_404_NOT_FOUND)

class Signup(APIView):
    def post(self,request):
        username=request.data["username"]
        password=request.data['password']
        name=request.data['name']

        useravail=UserSerializer(data=request.data)
        if useravail.is_valid():
            user=User.objects.create(username=username,email=username,name=name)
            user.password=password
            user.save()

            token=RefreshToken.for_user(user)
            return Response(data={"username":user.name,
            "email":user.username,
            "token":{"refresh":str(token),
            "access":str(token.access_token)}})

        content="user already Exists"
        return Response(content,status=status.HTTP_406_NOT_ACCEPTABLE)

class Home(generics.ListAPIView):
    queryset=Idea.objects.all()
    serializer_class=IdeaSerializer
    def get(self,request,*args,**kwargs):
        return self.list(request,*args,**kwargs)


class Idea(APIView):
    def get(self,request):
        return Response("data get Idea")

    def post(self,request):
        return Response("data Post Idea")
    
    def delete(self,request):
        return Response("data Delete Idea")