# Stash (by hashy)

Stash is a local IoT logging solution for the cannabis community.

It uses docker to deploy:

- an MQTT broker for handling device readouts,
- Go server for storing MQTT messages in an SQLite database,
- Grafana for intuitive data visualization.

## **Quick Start**

1. Ensure you have [Docker](https://www.docker.com/) and [Git](https://git-scm.com/) installed
2. Clone and start services:

```
git clone https://github.com/hashy-so/stash.git hashy-stash
cd hashy-stash
./start.sh
```

3. Access the [http://localhost:3000/?orgId=1](Grafana) in your browser to see your live data. Default credentials are `admin / admin`

---

## **Logging data from other devices on the Same WiFi**

1. **Find Your Machine's Local IP Address**: Use tools like `ipconfig` (Windows) or `ifconfig`/`ip a` (macOS/Linux)
2. Configure the MQTT client on any iot devices you have to connect using your IP, e.g., `mqtt://192.168.1.100:1883`
