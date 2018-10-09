var express = require('express');
var webserver = express();
var config = require('./etc/config.json');
var path = require('path');
var port = config.WEBPORT;
var sessions = require('express-session');
var Web3 = require('web3');
var bodyParser = require('body-parser'); // Get Post data
var CookieParser = require('cookie-parser');
var web3 = new Web3("http://" + config.RPCSVR + ":" + config.RPCPORT);

webserver.use(express.static(path.join(__dirname, '/pubhtml')));
webserver.use(bodyParser.json());
webserver.use(CookieParser());
webserver.use(bodyParser.urlencoded({ extended: true }));
webserver.use(sessions({
	    secret: "#$#92965%0-wed54%@@#&*",
	    resave: false,
	    saveUninitialized: true
}));
web3.eth.getAccounts(function(err, res) {
	    console.log("===Test Node Connection by read node coinbase===")
	    console.log(err, res)
})


webserver.get('/', (req, res, next) => {
  console.log(" come to Atherized  : " + req.session.id + "   " + req.session.authenticated);
  res.sendFile(__dirname + '/privatehtml/welcome.html');
   })


var ser_var = webserver.listen(port);
console.log("open web  http://" + ser_var.address().address + ":" + port);
console.log("CTRL+C to Exit")
