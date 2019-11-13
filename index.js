const PORTNO = '2000';

var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
});
app.use(express.static(__dirname + '/client'));

serv.listen(PORTNO);

console.log(`Server Started on ${PORTNO}`);


var io = require('socket.io')(serv,{});
io.sockets.on('connection', function(socket) {
    console.log('socket connection');
});


// --------------------------------------------------------------

var database = require('./server/js/database');
var Player = require('./server/js/models/player');