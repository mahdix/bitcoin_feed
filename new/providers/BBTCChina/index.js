'use strict';

module.exports = BBTCChina;
function BBTCChina(){
	var s = this;
	var socket;

	s.connect = function(){
		socket = require('socket.io-client').connect('https://websocket.btcchina.com/',{
			reconnection: true,
			'sync disconnect on unload': true,
			forceNew: true,
			reconnectionDelay: 200,
			reconnectionDelayMax: 1500
		});
		socket.on('connect',function(){
			console.log("Connected to BTCChina");
			socket.emit('subscribe', 'marketdata_cnybtc');
			socket.on('ticker', function (data){
				if(typeof(s.ondata)==='function'){
					s.ondata(data);
				}
			});
		});
	}
}
