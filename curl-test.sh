#!/bin/bash
curl -X POST -H "Authorization: key=AAAAQyZ8BGU:APA91bHgnkthJDnyABdAtxtQlW-ytx_GNkKmxILC8_y9Ud0U_S_65jvzfcbAtp6dVg8xbFBHTjKRAGt3ox-tvBM4cRniVloytZzZtJAmBo0G1jGL1EUGg6k7uWjyFu21m95fpv4WbHJY" -H "Content-Type: application/json" \
   -d '{
    "notification": {
        "title": "FCM Message",
        "body": "This is an FCM Message",
        "icon": "/itwonders-web-logo.png"
	},
	 "data" : {
		 "body" : "Body of Your Notification in Data",
		 "title": "Title of Your Notification in Title",
		 "key_1" : "Value for key_1",
		 "key_2" : "Value for key_2"
	 }
,
  "to": "fRulxdncA0YvPqIiQm7JUb:APA91bF8EWVTQpC6OUfj_5mgaT6X1mXMYDSnOG-c4o8nyGu393da5sBDsRa1N4CRfcNb_wleXh6MlPs0y2UHPVF7Bpm5xzblygKKQzPyoMTDMSFNUJvW0WMkKEYgXDsJ2xrD1teHE_Xf"
}' https://fcm.googleapis.com/fcm/send
