from django.urls import path
from userManagement import views

urlpatterns = [
    path("signUp/", views.signUp, name = "sign up"),
    path("login/", views.login, name = "login"),
    path("<str:walletAddress>/", views.user),
    path("", views.getUsers, name = "get users")
    
]