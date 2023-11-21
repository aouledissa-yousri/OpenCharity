from django.urls import path
from donationCampaignManagement import views


urlpatterns = [
    path("<str:id>/", views.handleDonationCampaignRequest),
    path("", views.handleDonationCampaignsRequest)
]