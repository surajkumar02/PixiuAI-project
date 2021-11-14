from django.urls import path
from .views import Home,Idea,Login,Signup

urlpatterns = [
    path('home/',Home.as_view()),
    path('idea/',Idea.as_view()),
    path('login/',Login.as_view()),
    path('signup/',Signup.as_view()),
]