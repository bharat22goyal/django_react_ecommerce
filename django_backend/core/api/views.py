from rest_framework.generics import ListAPIView
from ..models import Item
from .serializers import ItemSerializer
from rest_framework.permissions import AllowAny

class ItemListView(ListAPIView):
    permission_classes=(AllowAny,)
    serializer_class=ItemSerializer
    queryset=Item.objects.all()