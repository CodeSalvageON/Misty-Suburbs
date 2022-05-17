const express = require('express');
let fileSys = require('fs');

let app = require('express')();
let http = require('http').Server(app);
let bodyParser = require('body-parser');

let port = process.env.PORT || 3000;
let io = require('socket.io')(http);

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

let dicit = [];

app.get('', function (req, res) {
  const index = __dirname + '/public/static/index.html';

  res.sendFile(index);
});

app.get('/dicit', function (req, res) {
  res.send(JSON.stringify(dicit));
})

app.post('/dicit', function (req, res) {
  
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});