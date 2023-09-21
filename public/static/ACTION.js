const viewingStation = document.getElementById("viewport");

const actionMenuIcon = document.getElementById("start-icon");
const actionMenu = document.getElementById("action-menu");
const actionMenuClose = document.getElementById("action-menu-close");

let hasOpenedMenu = 0;

$(function () {
  $(".draggable").draggable();
});

function convertPercentPixel () {
  let pixelHeight = actionMenu.scrollHeight; 
  let screenHeightInit = window.screen.height;
  let percentageInit = (screenHeightInit - pixelHeight) / screenHeightInit;
  
  let screenHeight = actionMenu.scrollHeight;
  let pixel = Math.round((50 / 100) * screenHeight);

  currentBiome.style.height = pixel + "px";
}

function getScreenView (mood) {
  switch (mood) {
    case "high":
      viewingStation.style.backgroundColor = "green";
      break;
    case "harsh":
      viewingStation.style.backgroundColor = "black";
      break;
    case "cloudy":
      viewingStation.style.backgroundColor = "grey";
      switch (parseInt(currentNightDay)) {
        case 0:
        case 1:
          loadBack("/static/img/clouds.jpg");
          break;
      }
      break;
    case "foggy":
      viewingStation.style.backgroundColor = "grey";
      break;
    case "terminator":
      viewingStation.style.backgroundColor = "red";
      break;
  }
}

actionMenuIcon.onclick = function () {
  switch (hasOpenedMenu) {
    case 0:
      
      hasOpenedMenu = 1;
      break;
  }
  
  actionMenu.style.display = "block";
}

actionMenuClose.onclick = function () {
  actionMenu.style.display = "none";
}

// setTimeout(function () {
//   for (i = 0; i < 2; i++) {
//     convertPercentPixel();
//   }
// }, 500);
loadBiome("/static/img/rainy.jpg");