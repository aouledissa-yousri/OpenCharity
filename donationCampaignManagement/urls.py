from django.urls import path, include
from donationCampaignManagement import views


urlpatterns = [
    path("<str:id>/donations/", include("donationManagement.urls")),
    path("<str:id>/", views.handleDonationCampaignRequest),
    path("", views.createDonationCampaign)
]