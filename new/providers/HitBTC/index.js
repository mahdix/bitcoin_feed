'use strict';

module.exports = HitBTC;

function HitBTC(){

	var s = this;

	s.connect = function(){
		var WebSocket = require('ws');
		var ws = new WebSocket('ws://api.hitbtc.com:80');
		
		ws.on('open', function() {
			console.log("Connected to HitBTC");
		});

		ws.on('error',function(data){
			console.log(data);
		})

		ws.on('message', function(message) {
			var data = JSON.parse(message);
			if(typeof(s.ondata)==='function' && typeof data.MarketDataIncrementalRefresh !== 'undefined' && data.MarketDataIncrementalRefresh.symbol==='BTCUSD'){
				s.ondata(data);
			}
		});
	}
	
}