const viewingStation = document.getElementById("viewport");

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