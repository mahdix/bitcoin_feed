'use strict';
// npm install -g wscat
module.exports = itBit;


function itBit(){
    var s = this;
    var https = require('https');

    var options = {
        hostname: 'api.itbit.com',
        path: '/v1/markets/XBTUSD/ticker',
        port: 443,
        method: 'GET'
    };

    s.connect = function(){
        console.log("Connected to itBit");

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
