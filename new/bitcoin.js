var fs = require('fs');

if (!fs.existsSync('/tmp/bitcoin')){
    fs.mkdirSync('/tmp/bitcoin');
}

if(process.argv[2]==='coinsetter'){
	var BCoinsetter = require('./providers/BCoinsetter');
	var coinsetter = new BCoinsetter;
	console.log("Connecting to Coinsetter....");
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
if(process.argv[2]==='btcchina'){
	var BCoinsetter = require('./providers/BBTCChina');
	var coinsetter = new BCoinsetter;
	console.log("Connecting to BTCChina....");
	var prev_file_name;
	coinsetter.ondata = function(data){
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
	coinsetter.connect();
}
else {
	console.log("No params passed. Valid params: coinsetter, btcchina");
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