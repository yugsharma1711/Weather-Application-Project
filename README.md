# Weather-Application-Project
This is a weather application that provides accurate weather data and description using the OpenWeather API. The application was built using React on the frontend and Django on the backend. The application is containerized using Docker for easy setup and deployment.

## Getting Started
To get started with the weather application, you will need to have Docker and Docker Compose installed on your system. Once you have Docker and Docker Compose installed, follow these steps:

Clone the repository:
```
https://github.com/yugsharma1711/Weather-Application-Project.git
```
Change into the project directory:
```
cd Weather-Application-Project
```
Build the docker containers in frontend and backend by navigating to them and running
```
docker-compose build
```
Start the docker containers
```
docker-compose up
```
The frontend should be accessible at localhost:3000 and backend att 0.0.0.1:8000

## Built With
- React - A JavaScript library for building user interfaces.
- Django - A high-level Python web framework.
- Docker - A platform for building, shipping, and running applications in containers.
- OpenWeather API - A reliable and up-to-date weather API.

## Acknowledgments
- OpenWeather API for providing reliable and up-to-date weather information.
- The creators of React, Django, and Docker for creating such amazing tools.
