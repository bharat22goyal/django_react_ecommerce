from django.urls import path
from .views import HomeView, ItemDetailView, checkout

app_name = 'core'

urlpatterns = [
    path('home/', HomeView.as_view(), name='home'),
    path('product/<slug>', ItemDetailView.as_view(), name='product'),
    path('checkout/', checkout, name='checkout')
]
