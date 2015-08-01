var socketPath = 'bitcoin.sock';
var _debug = 1;

// var server = new BitcoinServer(socketPath);
var fs = require('fs');
// var stream = fs.createWriteStream('./coinsetter.txt'); 
// var coinsetter = new Coinsetter(function(data){
	// server.sendAnswer('coinsetter',data);
	// stream.write(JSON.stringify(data)+"\n");
// });

// var hitbtc = new HitBTC(function(data){});
var btcchina = new BTCChina();

function Coinsetter(cb){	
	var io  = require('./node_modules/socket.io-client/0.9.16');
	var url = 'https://plug.coinsetter.com:3000';
	
	var socket = connect();

	function connect(){
		var io_socket = io.connect(url,{
			reconnection: true,
			'sync disconnect on unload': true,
			forceNew: true,
			reconnectionDelay: 200,
			reconnectionDelayMax: 1500
		});
		return io_socket;
	}

	socket.on('connect',function(){

		debug("Connected to Coinsetter");
		socket.emit('ticker room', '');
		
		socket.on('ticker', function (data){
			debug("Data received from Coinsetter");
			result = {
				timestamp: data.bid.timeStamp,
				ask: {price:data.ask.price,size:data.ask.size},
				bid: {price:data.bid.price,size:data.bid.size},
				trade: {price:data.last.price,size:data.last.size,timestamp:data.last.timeStamp},
			}

			if(typeof(cb)==='function'){
				// cb(result);
				cb(data);
			}
		});
	});

	function debug(msg){
		if(_debug){
			console.log(msg);
		}
	}
}


function HitBTC(){

	var WebSocket = require('ws');
	var ws = new WebSocket('ws://api.hitbtc.com:80');
	
	ws.on('message', function(message) {
		var data = JSON.parse(message);
		if(typeof(data.MarketDataIncrementalRefresh)==='object'){
			debug(data);
		}
	});

	function debug(msg){
		if(_debug){
			console.log(msg);
		}
	}
}

function BTCChina(){
	var io  = require('socket.io-client');
	var url = 'https://websocket.btcchina.com/';
	
	var socket = connect();

	function connect(){
		var io_socket = io.connect(url,{
			reconnection: true,
			'sync disconnect on unload': true,
			forceNew: true,
			reconnectionDelay: 200,
			reconnectionDelayMax: 1500
		});
		return io_socket;
	}

	socket.on('connect',function(){

		debug("Connected to BTCChina");
		socket.emit('subscribe', 'marketdata_cnybtc');
		
		socket.on('ticker', function (data){
			debug("Data received from BTCChina");
			if(typeof(cb)==='function'){
				cb(data);
			}
		});
	});

	function debug(msg){
		if(_debug){
			console.log(msg);
		}
	}
}


function BitcoinServer(path){
	var s = this;
	var clients = {};
	var types = {};
	
	if(!path){
		return false;
	}

	init();

	s.sendAnswer = function (type, answer){
		var clients = getClients(type);
		clients.forEach(function(client){
			client.write(JSON.stringify(answer));
		});
	}

	function init(){
		deleteOldSocket();

		var net = require('net');
		var server = net.createServer(function (socket) {
			var id = socket._handle.fd;
			console.log("Client connected");
			addClient(id,socket);

			socket.on('data',function(data){
				changeType(id,data);
			});

		    socket.on('end',function(){
		    	debug('Client disconnected');
		    	deleteClient(id);
			});
		})
		.listen(path);
	}

	function deleteClient(id){
		var clientType = clients[id].messageType;
		if(typeof(clientType)!=='undefined' && typeof(types[clientType])!=='undefined'){
			delete types[clientType][id];
		}
		delete clients[id];
		debug('Client with id "'+id+'" deleted from the served list');
		debug(types);
	}

	function addClient(id,socket){
		clients[id]=socket;
		debug('Client with id "'+id+'" added to the served list');
	}

	function changeType(id,type){
		clients[id].messageType = type;
		if(typeof(types[type])==='undefined'){
			types[type]={};
		}
		types[type][id]=true;
		debug('Client ['+id+'] type changed to '+type);
		debug(types);
	}

	function deleteOldSocket(){
		var fs = require('fs');
		if(fs.existsSync(path)){
			fs.unlinkSync(path);
			debug('Existing socket file deleted');
		}
	}

	function getClients(type){
		var r_clients = [];
		if(typeof(types[type])==='object'){
			Object.keys(types[type]).forEach(function(id){
				if(typeof(clients[id])==='object')
				r_clients.push(clients[id]);
			})
		}
		return r_clients;
	}

	function debug(msg){
		if(_debug){
			console.log(msg);
		}
	}
}