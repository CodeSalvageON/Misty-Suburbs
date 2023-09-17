const viewingStation = document.getElementById("viewport");

const actionMenuIcon = document.getElementById("start-icon");
const actionMenu = document.getElementById("action-menu");
const actionMenuClose = document.getElementById("action-menu-close");

$(function () {
  $(".draggable").draggable();
});

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
  actionMenu.style.display = "block";
}

actionMenuClose.onclick = function () {
  actionMenu.style.display = "none";
}