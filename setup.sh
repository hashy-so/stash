#!/bin/bash

# Check for the existence of mqtt_data.sqlite
if [ ! -f ./mqtt_data.sqlite ]; then
    touch ./mqtt_data.sqlite
    echo "mqtt_data.sqlite file created."
else
    echo "mqtt_data.sqlite file already exists."
fi

# Run docker-compose
docker-compose up --build
