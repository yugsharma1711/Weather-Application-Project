from django.urls import path
from . import views

app_name = 'core'

urlpatterns = [
    path('fetchWeather/<str:location>/', views.get_weather.as_view(), name = 'get_weather')
]