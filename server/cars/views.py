from django.shortcuts import render
from rest_framework import viewsets
from .models import Contact, Booking
from .serializers import ContactSerializer, BookinSerializer

# Contact ViewSet
class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    
# Booking ViewSet
class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookinSerializer