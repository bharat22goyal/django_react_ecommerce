from django.shortcuts import render
from .models import Item, Order, OrderItem
from django.views.generic import ListView, DetailView


# def products(request):
#     context = {
#         "items": Item.objects.all()
#     }

#     return render(request, "home.html", context)


def checkout(request):

    return render(request, "checkout.html")


# def home(request):
#     context = {
#         "items": Item.objects.all()
#     }
#     return render(request, "home.html", context)


class HomeView(ListView):
    model = Item
    template_name = 'home.html'


class ItemDetailView(DetailView):
    model = Item
    template = 'product.html'
