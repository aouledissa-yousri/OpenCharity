from rest_framework.decorators import api_view
from django.http import JsonResponse
from .controllers import DonationCampaignController
from helpers import RequestHelper

# Create your views here.

@api_view(["POST"])
def createDonationCampaign(request, walletAddress):
    return JsonResponse(DonationCampaignController.createDonationCampaign(RequestHelper.getRequestBody(request)))

@api_view(["GET"])
def getAllDonationCampaigns(request):
    return JsonResponse(DonationCampaignController.getDonationCampaigns(), safe=False)


@api_view(["GET", "PATCH", "DELETE"])
def handleDonationCampaignRequest(request, walletAddress, id):
    if request.method == "GET":
        return JsonResponse(DonationCampaignController.getDonationCampaign(id))
    elif request.method == "PATCH":
        return JsonResponse(DonationCampaignController.updateDonationCampaign(RequestHelper.getRequestBody(request), id))
    elif request.method == "DELETE":
        print("hello world")
        return JsonResponse(DonationCampaignController.deleteDonationCampaign(id), safe=False)
