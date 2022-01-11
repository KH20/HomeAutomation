# User Manual

## MQTT
The MQTT Server must be running on the Raspberry Pi. Check that the server is active by the following command on the Pi:
``` 
systemctl status mosquitto
```
This should be "Running".

The app.js file should be updated to have the same IP as the Raspberry Pi. The protocol and port must remain the same.
```
const client = mqtt.connect("ws://192.168.0.29:9001", options);
```

The message topic should be structured as follows:
```
home/living_room/temperature
```

A publish command can be sent via a connected MQTT Client with:

```
mosquitto_pub -h 192.168.0.29 -p 1883 -t home/living_room/temperature -m 40
```


