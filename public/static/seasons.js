const body = document.body;
const viewBg = document.getElementById("view-bg");
const currentBiome = document.getElementById("current-biome");

function loadBack (backSrc) {
  let newImg = new Image();

  newImg.onload = function () {
    viewBg.style.backgroundImage = "url('" + newImg.src + "')";
  }
  newImg.src = backSrc;
}

function loadBiome (backSrc) {
  let newImg = new Image();

  newImg.onload = function () {
    currentBiome.style.backgroundImage = "url('" + newImg.src + "')";
  }
  newImg.src = backSrc;
}

loadBack("/static/img/sky.jpg");

let currentSeason = 0;
let currentWeather = 0;
let currentNightDay = 0;

function findWeather () {
  fetch ("/weather_data")
  .then(response => response.text())
  .then(data => {
    let splitData = data.split(";");
    currentSeason = splitData[0];
    currentWeather = splitData[1];
    currentNightDay = splitData[2];

    // console.log(splitData);
    // console.log(currentNightDay);
    
    switch (parseInt(currentNightDay)) {
      case 0:
        // console.log("problem is here");
        loadBack("/static/img/sky.jpg");
        break;
      case 1:
        // console.log(currentSeason);
        switch (parseInt(currentSeason)) {
          case 0:
            loadBack("/static/img/fall.jpg");
            loadBack("/static/img/fall.jpg");
            break;
          case 1:
            loadBack("/static/img/pink.jpg");
            break;
          case 2:
            loadBack("/static/img/sky.jpg");
            break;
          case 3:
            loadBack("/static/img/sky.jpg");
            break;
        }
        break;
      case 2:
        loadBack("/static/img/night.jpg");
        break;
    }
  })
  .catch(err => {
    throw err;
  });
}

findWeather();
setInterval(function () {
  findWeather();
}, 60000);