'use strict';
// npm install -g wscat
module.exports = Coinbase;

function Coinbase(){
	var s = this;

	s.connect = function(){
		var CoinbaseExchange = require('coinbase-exchange');
		var publicClient = new CoinbaseExchange.PublicClient();

        var websocket = new CoinbaseExchange.WebsocketClient();
        websocket.on('message', function(data) { 
            if ( data.type == 'match' ) {
                s.ondata(data);
            }
        });

	}
	
}
