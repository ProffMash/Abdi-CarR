from django.db import models

# Contacts Model
class Contact(models.Model):
    contact_id = models.AutoField(primary_key=True)
    full_name=models.CharField(max_length=30)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.name

# Booking Model
class Booking(models.Model):
    CAR_TYPE_CHOICES = (
        ('Economy', 'Economy'),
        ('Compact', 'Compact'),
        ('Midsize', 'Midsize'),
        ('SUV', 'SUV'),
        ('Luxury', 'Luxury'),
        ('Convertible', 'Convertible'),
    )
    pickup_location=models.CharField(max_length=255)
    dropoff_location=models.CharField(max_length=255)
    pickup_date=models.DateField()
    pickup_time=models.TimeField()
    return_date=models.DateField()
    return_time=models.TimeField()
    car_type=models.CharField(max_length=50, choices=CAR_TYPE_CHOICES)

    def __str__(self):
        return f"Booking for {self.car_type} on {self.pickup_date}"