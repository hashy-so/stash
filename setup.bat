@echo off

IF NOT EXIST mqtt_data.sqlite (
    echo Creating mqtt_data.sqlite file...
    type nul > mqtt_data.sqlite
) ELSE (
    echo mqtt_data.sqlite file already exists.
)

docker-compose up --build
