# Generated by Django 5.1.6 on 2025-03-02 06:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Booking",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("pickup_location", models.CharField(max_length=255)),
                ("dropoff_location", models.CharField(max_length=255)),
                ("pickup_date", models.DateField()),
                ("pickup_time", models.TimeField()),
                ("return_date", models.DateField()),
                ("return_time", models.TimeField()),
                (
                    "car_type",
                    models.CharField(
                        choices=[
                            ("Economy", "Economy"),
                            ("Compact", "Compact"),
                            ("Midsize", "Midsize"),
                            ("SUV", "SUV"),
                            ("Luxury", "Luxury"),
                            ("Convertible", "Convertible"),
                        ],
                        max_length=50,
                    ),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Contact",
            fields=[
                ("contact_id", models.AutoField(primary_key=True, serialize=False)),
                ("full_name", models.CharField(max_length=30)),
                ("email", models.EmailField(max_length=254)),
                ("message", models.TextField()),
            ],
        ),
    ]
