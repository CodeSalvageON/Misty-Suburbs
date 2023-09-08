const body = document.body;
const viewBg = document.getElementById("view-bg");

function loadBack (backSrc) {
  let newImg = new Image();

  newImg.onload = function () {
    viewBg.style.backgroundImage = "url('" + newImg.src + "')";
  }
  newImg.src = backSrc;
}

loadBack("/static/img/sky.jpg");

function findWeather () {
  fetch ("/weather_data")
  .then(response => response.text())
  .then(data => {
    let splitData = data.split(";");
    let currentSeason = splitData[0];
    let currentWeather = splitData[1];
    let currentNightDay = splitData[2];
    
    switch (currentNightDay) {
      case 0:
        loadBack("/static/img/sky.jpg");
        break;
      case 1:
        switch (currentSeason) {
          case 0:
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