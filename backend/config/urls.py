from django.contrib import admin
from django.urls import path, include
from .views import dashboard_stats

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/dashboard/", dashboard_stats),
    path('api/auth/', include('authentication.urls')),
    path('api/doctors/', include('doctors.urls')),
    path('api/departments/', include('departments.urls')),
    path('api/patients/', include('patients.urls')),
    path('api/appointments/', include('appointments.urls')),
]