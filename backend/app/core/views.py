import requests
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response
class get_weather(APIView):
 def get(self, request, location):
        print(location)
        url = f'https://api.openweathermap.org/data/2.5/weather?q={location}&units=imperial&appid=e24140ce16353431563ed70907d29f4a'
        response = requests.get(url)
        data = response.json()
        return Response(data)