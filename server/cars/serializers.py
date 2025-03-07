from rest_framework import serializers
from .models import Contact, Booking

# Booking Serializer
class BookinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'
        
# Contact Serializer
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'