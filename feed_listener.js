var net = require('net');
var sockPath = "bitcoin_feed.socket";
var fs = require('fs');
if(fs.existsSync(sockPath)){
	fs.unlinkSync(sockPath);
}