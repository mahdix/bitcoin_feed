var fs = require('fs');

if (!fs.existsSync('/tmp/bitcoin')){
    fs.mkdirSync('/tmp/bitcoin');
}

if(process.argv[2]==='coinsetter'){
	var BCoinsetter = require('./providers/BCoinsetter');
	var coinsetter = new BCoinsetter;
	console.log("Connecting to Coinsetter...");
	var prev_file_name;
	coinsetter.ondata = function(data){
		var file_name = getFileName('coinsetter');
		if(file_name !== prev_file_name || typeof stream === 'undefined'){
			console.log("Writing feed to "+'/tmp/bitcoin/'+file_name)
			if( typeof stream !== 'undefined' ){
				stream.end();
			}
			stream = fs.createWriteStream('/tmp/bitcoin/'+file_name); 
			prev_file_name = file_name;
		}
		stream.write(JSON.stringify(data)+"\n");
	}
	coinsetter.connect();
}
else if(process.argv[2]==='btcchina'){
	var BBTCChina = require('./providers/BBTCChina');
	var btcchina = new BBTCChina;
	console.log("Connecting to BTCChina...");
	var prev_file_name;
	btcchina.ondata = function(data){
		var file_name = getFileName('btcchina');
		if(file_name !== prev_file_name || typeof stream === 'undefined'){
			console.log("Writing feed to "+'/tmp/bitcoin/'+file_name)
			if( typeof stream !== 'undefined' ){
				stream.end();
			}
			stream = fs.createWriteStream('/tmp/bitcoin/'+file_name); 
			prev_file_name = file_name;
		}
		stream.write(JSON.stringify(data)+"\n");
	}
	btcchina.connect();
}
else if(process.argv[2]==='hitbtc'){
	var HitBTC = require('./providers/HitBTC');
	var hitbtc = new HitBTC;
	console.log("Connecting to HitBTC...");
	var prev_file_name;
	hitbtc.ondata = function(data){
		var file_name = getFileName('hitbtc');
		if(file_name !== prev_file_name || typeof stream === 'undefined'){
			console.log("Writing feed to "+'/tmp/bitcoin/'+file_name)
			if( typeof stream !== 'undefined' ){
				stream.end();
			}
			stream = fs.createWriteStream('/tmp/bitcoin/'+file_name); 
			prev_file_name = file_name;
		}
		stream.write(JSON.stringify(data)+"\n");
	}
	hitbtc.connect();
}
else if(process.argv[2]==='bitstamp'){
	var BitStamp = require('./providers/BitStamp');
	var bitstamp = new BitStamp;
	console.log("Connecting to BitStamp...");
	var prev_file_name;
	bitstamp.ondata = function(data){
		var file_name = getFileName('bitstamp');
		if(file_name !== prev_file_name || typeof stream === 'undefined'){
			console.log("Writing feed to "+'/tmp/bitcoin/'+file_name)
			if( typeof stream !== 'undefined' ){
				stream.end();
			}
			stream = fs.createWriteStream('/tmp/bitcoin/'+file_name); 
			prev_file_name = file_name;
		}
		stream.write(JSON.stringify(data)+"\n");
	}
	bitstamp.connect();
}
else if(process.argv[2]==='bitfinex'){
	var BitFinex = require('./providers/BitFinex');
	var bitfinex = new BitFinex;
	console.log("Connecting to BitFinex...");
	var prev_file_name;
	bitfinex.ondata = function(data){
		var file_name = getFileName('bitfinex');
		if(file_name !== prev_file_name || typeof stream === 'undefined'){
			console.log("Writing feed to "+'/tmp/bitcoin/'+file_name)
			if( typeof stream !== 'undefined' ){
				stream.end();
			}
			stream = fs.createWriteStream('/tmp/bitcoin/'+file_name); 
			prev_file_name = file_name;
		}
		stream.write(JSON.stringify(data)+"\n");
	}
	bitfinex.connect();
}
else if(process.argv[2]==='itbit'){
	var itBit = require('./providers/itBit');
	var itbit = new itBit;
	console.log("Connecting to itBit...");
	var prev_file_name;
	itbit.ondata = function(data){
		var file_name = getFileName('itbit');
		if(file_name !== prev_file_name || typeof stream === 'undefined'){
			console.log("Writing feed to "+'/tmp/bitcoin/'+file_name)
			if( typeof stream !== 'undefined' ){
				stream.end();
			}
			stream = fs.createWriteStream('/tmp/bitcoin/'+file_name); 
			prev_file_name = file_name;
		}
		stream.write(JSON.stringify(data)+"\n");
	}
	itbit.connect();
}
else if(process.argv[2]==='kraken'){
	var Kraken = require('./providers/Kraken');
	var kraken = new Kraken;
	console.log("Connecting to Kraken...");
	var prev_file_name;
	kraken.ondata = function(data){
		var file_name = getFileName('kraken');
		if(file_name !== prev_file_name || typeof stream === 'undefined'){
			console.log("Writing feed to "+'/tmp/bitcoin/'+file_name)
			if( typeof stream !== 'undefined' ){
				stream.end();
			}
			stream = fs.createWriteStream('/tmp/bitcoin/'+file_name); 
			prev_file_name = file_name;
		}
		stream.write(JSON.stringify(data)+"\n");
	}
	kraken.connect();
}
else if(process.argv[2]==='btce'){
	var BTCe = require('./providers/BTCe');
	var btce = new BTCe;
	console.log("Connecting to BTCe...");
	var prev_file_name;
	btce.ondata = function(data){
		var file_name = getFileName('btce');
		if(file_name !== prev_file_name || typeof stream === 'undefined'){
			console.log("Writing feed to "+'/tmp/bitcoin/'+file_name)
			if( typeof stream !== 'undefined' ){
				stream.end();
			}
			stream = fs.createWriteStream('/tmp/bitcoin/'+file_name); 
			prev_file_name = file_name;
		}
		stream.write(JSON.stringify(data)+"\n");
	}
	btce.connect();
}
else if(process.argv[2]==='coinbase'){
	var Coinbase = require('./providers/Coinbase');
	var coinbase = new Coinbase;
	console.log("Connecting to Coinbase...");
	var prev_file_name;
	coinbase.ondata = function(data){
		var file_name = getFileName('coinbase');
		if(file_name !== prev_file_name || typeof stream === 'undefined'){
			console.log("Writing feed to "+'/tmp/bitcoin/'+file_name)
			if( typeof stream !== 'undefined' ){
				stream.end();
			}
			stream = fs.createWriteStream('/tmp/bitcoin/'+file_name); 
			prev_file_name = file_name;
		}
		stream.write(JSON.stringify(data)+"\n");
	}
	coinbase.connect();
}
else if(process.argv[2]==='okcoin'){
	var OKCoin = require('./providers/OKCoin');
	var okcoin = new OKCoin;
	console.log("Connecting to OKCoin...");
	var prev_file_name;
	okcoin.ondata = function(data){
		var file_name = getFileName('okcoin');
		if(file_name !== prev_file_name || typeof stream === 'undefined'){
			console.log("Writing feed to "+'/tmp/bitcoin/'+file_name)
			if( typeof stream !== 'undefined' ){
				stream.end();
			}
			stream = fs.createWriteStream('/tmp/bitcoin/'+file_name); 
			prev_file_name = file_name;
		}
		stream.write(JSON.stringify(data)+"\n");
	}
	okcoin.connect();
}
else if(process.argv[2]==='okcoin_cny'){
	var OKCoin_CNY = require('./providers/OKCoin_CNY');
	var okcoin_cny = new OKCoin_CNY;
	console.log("Connecting to OKCoin_CNY...");
	var prev_file_name;
	okcoin_cny.ondata = function(data){
		var file_name = getFileName('okcoin_cny');
		if(file_name !== prev_file_name || typeof stream === 'undefined'){
			console.log("Writing feed to "+'/tmp/bitcoin/'+file_name)
			if( typeof stream !== 'undefined' ){
				stream.end();
			}
			stream = fs.createWriteStream('/tmp/bitcoin/'+file_name); 
			prev_file_name = file_name;
		}
		stream.write(JSON.stringify(data)+"\n");
	}
	okcoin_cny.connect();
}
else {
	console.log("No params passed. Valid params: coinsetter, btcchina, hitbtc, bitstamp, bitfinex, itbit, kraken, btce, coinbase, okcoin, okcoin_cny");
	process.exit();
}




function getFileName(type){
	var datetime = new Date();
	day = datetime.getDate();
	month = datetime.getMonth()+1;
	year = datetime.getFullYear();
	name = type+"-"+day+'-'+month+'-'+year+'.txt';
	return name;
}
