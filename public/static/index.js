let mistySave = localStorage.getItem("mistySub-save");
let indianHead = document.getElementById("indian");
let staticHead = document.getElementById("static");
let cmd = document.getElementById("cmd");
const blink = document.getElementById("blink");
let cmdForm = document.getElementById("cmd-form");
const cmdReq = document.getElementById("cmd-req");

function loadScreen () {
  if (mistySave === null || mistySave === undefined || mistySave === "") {
    let indianWait = 50;

    let indianInt = setInterval(function () {
      indianHead.style.display = "none";
      indianWait -= 5;
      setTimeout(function () {
        indianHead.style.display = "block";
      }, indianWait);
    }, 100);

    setTimeout(function () {
      clearInterval(indianInt);
      indianHead.style.display = "none";
      staticHead.style.display = "none";
      cmd.style.display = "block";
    }, 3000);
  }

  else {
    
  }
}

setInterval(function () {
  blink.style.visibility = "hidden";

  setTimeout(function () {
    blink.style.visibility = "visible";
  }, 200);
}, 400);

let lines = document.getElementById("lines");

function addLine (line) {
  lines.innerHTML += "<p class='line'>" + line + "</p>";
}

function cleanText (text) {
  let lineLen1 = document.getElementsByClassName("line");
  let lineLen2 = lineLen1[lineLen1.length - 1];

  lineLen2.innerText = text;
}

function makeRand (length) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  
  for (i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
  }
   
  return result;
}

addLine("Type LOAD to load a previous state.");
addLine("Type NEW to create a new state.");
let calcMode = 0;

const vhs = document.getElementById("vhs");

cmdForm.onsubmit = function () {
  event.preventDefault();
  let manhatten = cmdReq.value.toLowerCase();

  if (calcMode === 0) {
    if (manhatten === "new") {
      setTimeout(function () {
        addLine("Creating...");

        try {
          let matrixStyle = setInterval(function () {
            addLine(makeRand(50));
            cmd.scrollTo(0, cmd.scrollHeight);
          }, 10);

          calcMode = "pulp fiction";
          vhs.play();

          setTimeout(function () {
            clearInterval(matrixStyle);
          }, 2000);
        }

        catch (error) {
          addLine(error);
        }
      }, 100);
    }

    else if (manhatten === "load") {
      setTimeout(function () {
        addLine("Enter state data below.");
        calcMode = 1;
      }, 100);
    }
  }

  try {
    addLine("");
    cleanText(cmdReq.value);
  }

  catch (error) {
    addLine(error);  
  }
  
  cmdReq.value = "";
  cmd.scrollTo(0, cmd.scrollHeight);
}

setTimeout(function () {
  loadScreen();
}, 1000);