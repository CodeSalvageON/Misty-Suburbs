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
let inquit = [];
let val1 = "";
let val2 = "";

let seasonCycle = 0;
let weatherCycle = 0;
let nightDay = 0;

setInterval(function () {
  if (seasonCycle === 3) {
    seasonCycle = 0;
  }

  else {
    seasonCycle += 1;
  }
}, 7200000);

setInterval(function () {
  if (weatherCycle === 2 || weatherCycle === 3) {
    if (seasonCycle == 1) {
      weatherCycle = 3;
    }

    else {
      weatherCycle = 0;
    }
  }

  else {
    weatherCycle += 1;
  }
}, 1800000);

setInterval(function () {
  if (nightDay === 2) {
    nightDay = 0;
  }

  else {
    nightDay += 1;
  }
}, 1500000);

app.get('', function (req, res) {
  const index = __dirname + '/public/static/index.html';

  res.sendFile(index);
});

app.get('/weather_data', function (req, res) {
  res.send(seasonCycle + ";" + weatherCycle + ";" + nightDay);
});

app.get('/dicit', function (req, res) {
  res.send(JSON.stringify(dicit));
});

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

app.get('/inquit', function (req, res) {
  res.send(JSON.stringify(inquit));
});

app.post('/inquit', function (req, res) {
  let user = req.body.user;
  let pack = req.body.pack;

  if (user === "" || pack === "") {
    res.send("empty");
    return false;
  }

  let clean_user = sanitizer.escape(user);
  let clean_pack = sanitizer.escape(pack);

  inquit.push("<strong>" + clean_user + "<strong>: " + clean_pack);
  res.send("success");
});

app.get('/getarr', function (req, res) {
  fileSys.readFile(__dirname + "/values.txt", "utf8", function (err, data) {
    res.send(data);
    console.log(data);
  });
});

app.post('/getarr', function (req, res) {
  let ax = JSON.stringify(req.body.ax);
  let ay = JSON.stringify(req.body.ay);

  if (Array.isArray(JSON.parse(ax)) === true) {
    if (Array.isArray(JSON.parse(ay)) === true) {
      fileSys.writeFile(__dirname + "/values.txt", ax + "-;" + ay, (err) => {
        if (err) {
          console.log(err);
        }

        else {
          console.log("updated valyes");
        }
      });
    }

    else {
      res.send("failure");
    }
  }

  else {
    res.send("corrupted");
  }
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});