from rest_framework import serializers
from ..models import Item

class ItemSerializer(serializers.ModelSerializer):
    category=serializers.SerializerMethodField()
    class Meta:
        model=Item
        fields=('title','price','category','label','description','discount_price','id')

    def get_category(self,obj):
        return obj.get_category_display()