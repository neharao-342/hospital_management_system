from rest_framework.decorators import api_view
from rest_framework.response import Response

from doctors.models import Doctor
from departments.models import Department
from patients.models import Patient
from appointments.models import Appointment


@api_view(["GET"])
def dashboard_stats(request):
    return Response({
        "doctors": Doctor.objects.count(),
        "departments": Department.objects.count(),
        "patients": Patient.objects.count(),
        "appointments": Appointment.objects.count(),
    })