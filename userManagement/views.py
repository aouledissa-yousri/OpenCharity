from rest_framework.decorators import api_view
from django.http import JsonResponse
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
    result = UserController.login(RequestHelper.getRequestBody(request))
    return JsonResponse(result, status=result["code"])

@api_view(["DELETE"])
def logout(request):
    return JsonResponse(UserController.logout(RequestHelper.getRequestBody(request)))

