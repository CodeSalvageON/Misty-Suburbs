if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
  document.getElementById("viewport").style.fontSize = "5.5vw";
  document.getElementById("action-menu").style.fontSize = "3.25vw";
  document.getElementById("action-menu").style.width = "45%";
  document.getElementById("start-icon").style.width = "20%";
  
  citmdReq.style.fontSize = "5.5vw";
  cmdReq.style.fontSize = "5.5vw";

  cmd.style.width = "90%";
  citmd.style.width = "90%";
  
  cmdReq.style.width = "85%";
  citmdReq.style.width = "85%";

  document.getElementsByClassName("line").style.width = "90%";
} 