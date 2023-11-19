from rest_framework.decorators import api_view
from django.http import JsonResponse
from django.views import View
from .controllers import UserController
from helpers import RequestHelper

# Create your views here.

@api_view(["GET" ,"PATCH"])
def user(request, walletAddress: str):
    if request.method == "GET":
        return JsonResponse(UserController.getUser(walletAddress))
    else:
        return JsonResponse(UserController.updateUser(walletAddress, RequestHelper.getRequestBody(request)))
    

@api_view(["GET"])
def getUsers(request):
    return JsonResponse(UserController.getUsers(), safe=False)

@api_view(["POST"])
def signUp(request):
    return JsonResponse(UserController.createUser(RequestHelper.getRequestBody(request)))
    
@api_view(["POST"])
def login(request):
    return JsonResponse({"Message": "Logged in"})



