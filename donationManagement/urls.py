from django.urls import path
from donationManagement import views

urlpatterns = [
    path("", views.addDonation)
]