# myapp/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('data/', views.data_handler, name='data_handler'),
    # Define other URL patterns if needed
]
