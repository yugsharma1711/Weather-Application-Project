FROM python:3.9-alpine3.13
LABEL maintainer="yugsharma@protonmail.com"

ENV PYTHONUNBUFFERED 1

#Copy requirements file to docker directory
COPY ./requirements.txt /tmp/requirements.txt   
COPY ./app /app
COPY ./app/manage.py /app
#Set Working directory
WORKDIR /app
#Expose the container to specified port
EXPOSE 8000

# Third Command: Install the requirements file in docker image.
# Fourth Command: Remove the tmp directory , keeping docker image as light as possible.
# Fifth Command: Adds a new user in docker image (Not using the root user having full access). 
RUN pip install --upgrade pip && \
    pip install -r /tmp/requirements.txt && \
    rm -rf /tmp