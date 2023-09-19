package main

import (
	"database/sql"
	"fmt"
	"log"
	"net"
	"net/http"
	"time"

	mqtt "github.com/eclipse/paho.mqtt.golang"
	_ "github.com/mattn/go-sqlite3"
)

var db *sql.DB

func initDB(filepath string) *sql.DB {
	db, err := sql.Open("sqlite3", filepath)
	if err != nil {
		log.Fatal(err)
	}

	// Create table if it doesn't exist
	statement, _ := db.Prepare(`CREATE TABLE IF NOT EXISTS mqtt_data (
		id INTEGER PRIMARY KEY,
		topic TEXT,
		payload TEXT,
		timestamp TEXT DEFAULT (datetime('now'))
 )`)
	statement.Exec()

	return db
}

func insertMessage(topic, payload string) {
	currentTime := time.Now().Format(time.RFC3339)
	statement, _ := db.Prepare("INSERT INTO mqtt_data (topic, payload, timestamp) VALUES (?, ?, ?)")
	statement.Exec(topic, payload, currentTime)
}

var lastReceivedMessage string

var messagePubHandler mqtt.MessageHandler = func(client mqtt.Client, msg mqtt.Message) {
	fmt.Printf("Received message: %s from topic: %s\n", msg.Payload(), msg.Topic())
	lastReceivedMessage = string(msg.Payload()) // Store the received message
	insertMessage(msg.Topic(), string(msg.Payload()))
}

var connectHandler mqtt.OnConnectHandler = func(client mqtt.Client) {
	fmt.Println("Connected")
}

var connectLostHandler mqtt.ConnectionLostHandler = func(client mqtt.Client, err error) {
	fmt.Printf("Connect lost: %v", err)
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Last received message: %s", lastReceivedMessage)
}

func waitForBroker(broker string, port int, retries int) bool {
	for i := 0; i < retries; i++ {
		conn, err := net.DialTimeout("tcp", fmt.Sprintf("%s:%d", broker, port), time.Second*2)
		if err == nil {
			conn.Close()
			return true
		}
		time.Sleep(time.Second * 2)
	}
	return false
}

func main() {
	db = initDB("/data/mqtt_data.sqlite")
	defer db.Close()

	var broker = "emqx"
    var port = 1883

		if !waitForBroker(broker, port, 5) {
			fmt.Println("Failed to connect to the broker after multiple retries.")
			return
		}
		
    opts := mqtt.NewClientOptions()
    opts.AddBroker(fmt.Sprintf("tcp://%s:%d", broker, port))
    opts.SetClientID("go_mqtt_client")
    opts.SetUsername("emqx")
    opts.SetPassword("public")
    opts.SetDefaultPublishHandler(messagePubHandler)
    opts.OnConnect = connectHandler
    opts.OnConnectionLost = connectLostHandler
    client := mqtt.NewClient(opts)
    if token := client.Connect(); token.Wait() && token.Error() != nil {
        panic(token.Error())
  }

	sub(client)
	publish(client)

	http.HandleFunc("/", handler)
	http.ListenAndServe(":8080", nil)

	client.Disconnect(250)
}

func sub(client mqtt.Client) {
	topic := "topic/test"
	token := client.Subscribe(topic, 1, nil)
	token.Wait()
	fmt.Printf("Subscribed to topic %s", topic)
}

func publish(client mqtt.Client) {
	num := 10
	for i := 0; i < num; i++ {
			text := fmt.Sprintf("Message %d", i)
			token := client.Publish("topic/test", 0, false, text)
			token.Wait()
			time.Sleep(time.Second)
	}
}
