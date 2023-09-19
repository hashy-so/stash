#!/bin/sh

# Change owner to grafana
chown 472:472 /data/mqtt_data.sqlite

# Change permissions for the SQLite database
chmod 664 /data/mqtt_data.sqlite

# Execute the original command
exec "$@"
