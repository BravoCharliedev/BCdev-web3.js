#!/usr/bin/env node

var Web3 = require('../index.js');
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:11998'));

var coinbase = web3.eth.coinbase;
console.log("Conin Base : " , coinbase);

var balance = web3.eth.getBalance(coinbase);
console.log("Balance    : " , balance.toString(10));
