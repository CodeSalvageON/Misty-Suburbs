const express = require('express');
let fileSys = require('fs');

let app = require('express')();
let http = require('http').Server(app);
let bodyParser = require('body-parser');

let port = process.env.PORT || 3000;
let io = require('socket.io')(http);
let sanitizer = require('sanitizer');

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
  let user = req.body.user;
  let pack = req.body.pack;

  if (user === "" || pack === "") {
    res.send("empty");
    return false;
  }

  let clean_user = sanitizer.escape(user);
  let clean_pack = sanitizer.escape(pack);

  dicit.push("<strong>" + clean_user + "<strong>: " + clean_pack);
  res.send("success");
});

app.get('/getarr', function (req, res) {
  fileSys.readFile("values.txt", "utf8", function (data) {
    res.send(data);
  });
});

app.post('/getarr', function (req, res) {
  
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});