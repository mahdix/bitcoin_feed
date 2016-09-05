'use strict';

module.exports = OKCoin;
function OKCoin(){
	var s = this;

	s.connect = function(){
        var WebSocket = require('websocket').client;
        var client = new WebSocket();

        client.on('connectFailed', function(error) {
            console.log('Connect Error: ' + error.toString());
        });

        client.on('connect', function(connection) {
            console.log('WebSocket Client Connected');
            var err = connection.sendUTF("{'event':'addChannel','channel':'ok_btcusd_ticker'}");

            connection.on('error', function(error) {
                console.log("Connection Error: " + error.toString());
            });

            connection.on('message', function(message) {
                s.ondata(message.utf8Data);
            });
        });  

        client.connect('wss://real.okcoin.com:10440/websocket/okcoinapi');
	}
}
