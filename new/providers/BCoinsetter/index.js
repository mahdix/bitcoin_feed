'use strict';

module.exports = BCoinsetter;
function BCoinsetter(){
	var s = this;
	var socket;

	s.connect = function(){
		socket = require('socket.io-client').connect('https://plug.coinsetter.com:3000',{
			reconnection: true,
			'sync disconnect on unload': true,
			forceNew: true,
			reconnectionDelay: 200,
			reconnectionDelayMax: 1500
		});
		socket.on('connect',function(){
			console.log("Connected to Coinsetter");
			socket.emit('ticker room', '');	
			socket.on('ticker', function (data){
				if(typeof(s.ondata)==='function'){
					s.ondata(data);
				}
			});
		});
		return s;
	}
}
