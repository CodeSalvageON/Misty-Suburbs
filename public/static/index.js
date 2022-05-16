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
let stor = []; 
let wp = 24;
let frequency = 0;
frequency = Math.floor(Math.random() * 1000);

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
            lines.innerHTML = "";
            addLine("Choose an interface.");
            addLine("1. Command Line Priority");
            addLine("2. Auto-map Priority");
            addLine("3. Stored-image Priority");
            addLine("Please enter a number below.");

            calcMode = 2;
          }, 6000);
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

    else {
      setTimeout(function () {
        addLine("Unknown command.");
      }, 10);
    }
  }

  else if (calcMode === 1) {
    
  }

  else if (calcMode === 2) {
    if (manhatten === "1") {
      setTimeout(function () {
        addLine("As you wish...");
        addLine("Type HELP for a list of commands.");
      }, 10);
      calcMode = 3;
    }

    else if (manhatten === "2") {
      
    }

    else if (manhatten === "3") {
      
    }

    else {
      setTimeout(function () {
        addLine("Could not register unknown characters.");
      }, 10);
    }
  }

  else if (calcMode === 3) {
    if (manhatten === "help") {
      setTimeout(function () {
        addLine("map - Switch to Auto-map interface");
        addLine("visl - Switch to Stored-image interface");
        addLine("cmd - Switch to Command Line interface");
        addLine("quit - Close this program");
        addLine("stor - Get a list of items you have locally");
        addLine("wp - Get the current value of your willpower");
        addLine("ntrvl - Travel North (increases frequency)");
        addLine("strvl - Travel South (decreases frequency)");
        addLine("freq - Get your current frequency");
        addLine("setfreq - Set your frequency (needs willpower)");
        addLine("dicit - See if anyone can hear you");
        addLine("build - Build a structure (requires willpower)");
        addLine("settle - Set a residence in an already-existing structure");
      }, 10);
    }

    else if (manhatten === "map") {
      
    }

    else if (manhatten === "visl") {
      
    }

    else if (manhatten === "cmd") {
      
    }

    else if (manhatten === "quit") {
      location.href = "";
    }

    else if (manhatten === "stor") {
      if (stor.length === 0) {
        setTimeout(function () {
          addLine("No items in storage (locally).");
        }, 10);
      }

      else {
        for (i = 0; i < stor.length; i++) {
          setTimeout(function () {
            addLine(stor[i]);
          }, 10);
        }
      }
    }

    else if (manhatten === "wp") {
      setTimeout(function () {
        addLine("Willpower: " + String(wp));
      }, 10);
    }

    else if (manhatten === "ntrvl") {
      frequency += 1;
      
      setTimeout(function () {
        addLine("Traveling NORTH...");
        addLine("Your new frequency is " + frequency);
      }, 10);
    }

    else if (manhatten === "strvl") {
      frequency -= 1;

      setTimeout(function () {
        addLine("Traveling South...");
        addLine("Your new frequency is " + frequency);
      }, 10);
    }

    else if (manhatten === "freq") {
      setTimeout(function () {
        addLine("Current frequency: " + frequency);
      }, 10);
    }

    else if (manhatten.includes("setfreq")) {
      let setfreq_stuff = manhatten.split("setfreq");
      let setfreq_check = true;

      if (parseInt(setfreq_stuff[1]) - parseInt(setfreq_stuff[1])) {
        setfreq_check = true;
      }

      else {
        setfreq_check = false;
      }

      if (setfreq_stuff.length > 2) {
        setTimeout(function () {
          addLine("Unknown command.");
          addLine("Params: setfreq [example number]");
        }, 10);
      }

      else {
        if (setfreq_check === true) {
          let needed_wp_for_set = Math.abs(frequency - parseInt(setfreq_stuff[1]));

          if (needed_wp_for_set > wp - 1) {
            addLine("Not enough willpower.");
          }

          else {
            addLine("Traveling...");
            frequency = parseInt(setfreq_stuff[1]);
          }
        }

        else {
          setTimeout(function () {
            addLine("Setfreq must be a number.");
          }, 10);
        }
      }
    }

    else {
      setTimeout(function () {
        addLine("Unknown command.");
      }, 10);
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