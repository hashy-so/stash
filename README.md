# Stash (by hashy)
Stash is a local IoT logging solution for the cannabis community. Utilizes Docker containers to deploy an MQTT broker, Go server for storing MQTT messages in an SQLite database, and Grafana for intuitive data visualization.

## **Setup Guide**

### **Prerequisites:**
- [Docker](https://www.docker.com/) installed on your machine.
- [Git](https://git-scm.com/) installed on your machine.

### **Steps:**

1. **Clone the Repository**:  
   Open a terminal or command prompt and run:  
```
git clone https://github.com/hashy-so/stash.git hashy-stash
cd hashy-stash
```

2. **Start the Services**:

   - **For Windows**:  
     Run the provided setup script to ensure the database file exists and then start the services:  
     ```
     setup.bat
     ```

   - **For macOS/Linux**:  
     First, make sure the setup script is executable:  
     ```
     chmod +x setup.sh
     ```
     Then run the script:
     ```
     ./setup.sh
     ```

If you ran either of these setup scripts, you are good, and your local logging server should be running. But if you don't wish to use the setup scripts, you can create the sqlite file where your data will be stored manually 
(if it is your first time). Make a file called `mqtt_data.sqlite` in the base project directory.

 Now, you can run the following command to build and start the services:  

```
docker-compose up --build
```

3. **Access the Services**:
- **EMQX Dashboard**: Open a browser and navigate to `http://localhost:18083`. The default username and password are both `admin` unless otherwise specified in the repo.
- **Go Server**: Can be accessed at `http://localhost:8080`.
- **Grafana**: Open a browser and navigate to `http://localhost:3000`. The default login is `admin` for both username and password.

4. **Stopping the Services**:  
Press `CTRL+C` in the terminal where the services are running. To completely remove the containers, run:  

```
docker-compose down
```

---

## **Logging data from other devices on the Same WiFi**

1. **Find Your Machine's Local IP Address**:  
- **Windows**: Open Command Prompt and run `ipconfig`. Look for the "IPv4 Address" under your active network connection.
- **macOS/Linux**: Open Terminal and run `ifconfig` (or `ip a` on certain Linux distributions). Look for "inet" under your active network connection.

2. **Use the IP Address to Connect to the EMQX Broker**:  
On the other device, configure your MQTT client to connect to the IP address from step 1, using port `1883` for plain MQTT or `8883` for MQTT over SSL/TLS. For WebSocket connections, use ports `8083` and `8084`.

For example:  
`mqtt://192.168.1.100:1883`

You can now query this data in grafana.
