from django.db import models
from departments.models import Department

class Doctor(models.Model):
    name = models.CharField(max_length=100)
    specialization = models.CharField(max_length=100)
    qualification = models.CharField(max_length=100)
    experience = models.IntegerField()
    phone = models.CharField(max_length=15)
    email = models.EmailField()

    department = models.ForeignKey(
        Department,
        on_delete=models.CASCADE,
        related_name="doctors"
    )

    def __str__(self):
        return self.name