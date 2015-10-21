'use strict';
// npm install -g wscat
module.exports = Kraken;


function Kraken(){
    var s = this;
    var https = require('https');

    var options = {
        hostname: 'api.kraken.com',
        ath: '/0/public/Ticker?pair=XBTUSD',
        port: 443,
        method: 'GET'
    };

    s.connect = function(){
        console.log("Connected to Kraken");

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
        }, 6000);
    }

}
