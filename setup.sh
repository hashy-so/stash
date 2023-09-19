#!/bin/bash

# Function to create SQLite file for macOS/Linux
create_sqlite_unix() {
    if [ ! -f ./mqtt_data.sqlite ]; then
        touch ./mqtt_data.sqlite
        echo "mqtt_data.sqlite file created."
    else
        echo "mqtt_data.sqlite file already exists."
    fi
}

# Function to create SQLite file for Windows
create_sqlite_windows() {
    if not exist mqtt_data.sqlite (
        echo Creating mqtt_data.sqlite file...
        type nul > mqtt_data.sqlite
    ) else (
        echo mqtt_data.sqlite file already exists.
    )
}

# Detect OS and execute the corresponding function
if [[ "$OSTYPE" == "linux-gnu"* || "$OSTYPE" == "darwin"* ]]; then
    # Linux or macOS
    create_sqlite_unix
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    # Windows
    create_sqlite_windows
else
    # Unknown OS
    echo "Unknown OS detected. Please create mqtt_data.sqlite manually."
    exit 1
fi

docker-compose up --build
