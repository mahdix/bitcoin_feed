'use strict';
// npm install -g wscat
module.exports = BitFinex;


function BitFinex(){
    var s = this;
    var https = require('https');

    var options = {
        hostname: 'api.bitfinex.com',
        path: '/v1/pubticker/btcusd',
        port: 443,
        method: 'GET'
    };

    s.connect = function(){
        console.log("Connected to BitFinex");

        setInterval(function() {
            var req = https.request(options, function(res) {
                var str = '';

                //another chunk of data has been recieved, so append it to `str`
                res.on('data', function (chunk) {
                    str += chunk;
                });

                res.on('end', function() {
                    s.ondata(str);
                });
            });

            req.end();
        }, 3000);
    }

}
