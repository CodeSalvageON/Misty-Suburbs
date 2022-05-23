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
let isNew = true;
let frequency = 0;
frequency = Math.floor(Math.random() * 1000);
let encounterType = 0;
let isEnt = false;
let buildNum = 0;
let set_user = "";

function takeDamage () {
  cmd.style.backgroundColor = "red";
  wp -= 1;

  setTimeout(function () {
    cmd.style.backgroundColor = "black";
  }, 20);
}

function randomEncounter () {
  let getEnt = Math.floor(Math.random() * 5);
  let randEnt = Math.floor(Math.random() * 12);
  
  if (getEnt === 0 || getEnt === 1) {
    // Do nothing
  }

  else {
    if (randEnt === 0) {
      addLine("You come across a large office building complex.");
      addLine("Type INTR to enter this place...");

      isEnt = true;
      encounterType = 1;
    }

    else if (randEnt === 1) {
      addLine("You come across a seemingly endless row of houses.");
      addLine("Type INTR to enter one of these houses...");

      isEnt = true;
      encounterType = 2;
    }

    else if (randEnt === 2) {
      addLine("You find an Imperial Patrol.");
      addLine("Type INTR to talk with this patrol.");

      isEnt = true;
      encounterType = 3;
    }

    else if (randEnt === 3) {
      addLine("You find a group of Arenamen.");
      addLine("Type INTR to talk with this group.");

      isEnt = true;
      encounterType = 4;
    }

    else if (randEnt === 4) {
      addLine("You come across an Academy.");
      addLine("Type INTR to enter the Academy.");

      isEnt = true;
      encounterType = 5;
    }

    else if (randEnt === 5) {
      addLine("You come across a large cluster of well-kept condo and apartment buildings.");
      addLine("Type INTR to enter the condos.");

      isEnt = true;
      encounterType = 6;
    }

    else if (randEnt === 6) {
      addLine("You come across a small house in the empty field.");
      addLine("Type INTR to enter the house.");

      isEnt = true;
      encounterType = 7;
    }

    else if (randEnt === 7) {
      addLine("You come across a large and empty mall. It looks decrepit.");
      addLine("Type INTR to enter the mall.");

      isEnt = true;
      encounterType = 8;
    } 

    else if (randEnt === 8) {
      addLine("You come across an Arena.");
      addLine("Type INTR to enter the Arena.");

      isEnt = true;
      encounterType = 9;
    }

    else if (randEnt === 9) {
      addLine("You come across a City.");
      addLine("Type INTR to enter the City.");

      isEnt = true;
      encounterType = 10;
    }

    else if (randEnt === 10) {
      addLine("You come across an Imperial Settlement.");
      addLine("Type INTR to enter the Settlement.");

      isEnt = true;
      encounterType = 11;
    }

    else if (randEnt === 11) {
      addLine("You come across a retail warehouse of sorts.");
      addLine("Type INTR to enter the warehouse.");

      isEnt = true;
      encounterType = 12;
    }
  }
}

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
        addLine("save - Save your state");
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
        isEnt = false;
        randomEncounter();
      }, 10);
    }

    else if (manhatten === "strvl") {
      frequency -= 1;

      setTimeout(function () {
        addLine("Traveling South...");
        addLine("Your new frequency is " + frequency);
        isEnt = false;
        randomEncounter();
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
      isEnt = false;

      if (parseInt(setfreq_stuff[1]) - parseInt(setfreq_stuff[1]) === 0) {
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
          let needed_wp_for_set = Math.abs(parseInt(setfreq_stuff[1]) - frequency);

          if (needed_wp_for_set > wp) {
            setTimeout(function () {
              addLine("Not enough willpower.");
            }, 10);
          }

          else {
            setTimeout(function () {
              addLine("Traveling...");
              frequency = parseInt(setfreq_stuff[1]);
              wp -= needed_wp_for_set;
              addLine("New frequency: " + frequency);
            }, 10);
          }
        }

        else {
          setTimeout(function () {
            addLine("Setfreq must be a number.");
          }, 10);
        }
      }
    }

    else if (manhatten.replace(manhatten.substring(5), "") === "dicit") {
      if (set_user === "" || set_user === null || set_user === undefined) {
        setTimeout(function () {
          addLine("You have not set a local user yet. Type one in below.");
          calcMode = 7;
        }, 10);
      }

      else {
        fetch ("/dicit", {
          method : "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            user : set_user,
            pack : manhatten.substring(5)
          })
        })
        .then(response => response.text())
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          setTimeout(function () {
            addLine(err);
          }, 10);
        });
      }
    }

    else if (manhatten === "intr") {
      if (isEnt === true) {
        let buildingNum = Math.floor(Math.random() * 21);
        buildNum = buildingNum;

        if (buildingNum === 0) {
          buildingNum = 1;
        }
        
        setTimeout(function () {
          if (encounterType === 1) {
            addLine("There are " + buildingNum + " buildings within this complex.");
            addLine("Below, type the building number you wish to enter.");
            calcMode = 4;
          }

          else if (encounterType === 2) {
            addLine("There are " + buildingNum + " houses in this area.");
            addLine("Below, type the house address you wish to enter.");
            calcMode = 4;
          }

          else if (encounterType === 3) {
            addLine("There are " + buildingNum + " soldiers within this patrol.");
            addLine("Options: COMBAT, TALK, PASS");
            calcMode = 5;
          }

          else if (encounterType === 4) {
            addLine("There are " + buildingNum + " Arenamen within this group.");
            addLine("Options: COMBAT, TALK, PASS");
            calcMode = 5;
          }

          else if (encounterType === 5) {
            addLine("The Academy is dark around some areas, light in others. There are " + buildingNum + " rooms.");
            addLine("Below, type the room number you would like to enter.");
            calcMode = 4;
          }

          else if (encounterType === 6) {
            addLine("There are " + buildingNum + " apartment and condo buildings within this complex.");
            addLine("Below, type the building number you would like to enter.");
            calcMode = 4;
          }

          else if (encounterType === 7) {
            addLine("The empty house is larger on the inside than it is on the outside. There are " + buildingNum + " rooms.");
            addLine("Below, type the room number you would like to enter.");
            calcMode = 4;
          }

          else if (encounterType === 8) {
            addLine("There are " + buildingNum + " empty stores within the mall.");
            addLine("Below, type the store number you would like to enter.");
            calcMode = 4;
          }

          else if (encounterType === 9) {
            addLine("You have entered the Arena.");
            addLine("Type HELP for a list of commands in the Arena.");
            calcMode = 6;
          }

          else if (encounterType === 10) {
            addLine("You have entered the city.");
            addLine("Type HELP for a list of commands in the City.");
            calcMode = 8;
          }

          else if (encounterType === 11) {
            addLine("You have entered the Imperial Settlement.");
            addLine("Type HELP for a list of commands in the Settlement.");
            calcMode = 9;
          }

          else if (encounterType === 12) {
            addLine("You have entered the warehouse.");
            addLine("Type HELP for a list of commands in the warehouse.");
            calcMode = 10;
          }
        }, 10);
      }

      else {
        setTimeout(function () {
          addLine("There's nothing for you to enter or interact with here.");
        }, 10);
      }
    } 

    else if (manhatten === "build") {
      
    }

    else {
      setTimeout(function () {
        addLine("Unknown command.");
      }, 10);
    }

    addLine("");
    cleanText(cmdReq.value);
    
    setTimeout(function () {
      cmdReq.value = "";
      cmd.scrollTo(0, cmd.scrollHeight);
    }, 10);
  }

  else if (calcMode === 4) {
    switch (encounterType) {
      case 1:
        if (Math.abs(parseInt(manhatten)) > buildNum) {
          setTimeout(function () {
            addLine("There is no such building in this complex.");
          }, 10);
        }
          
        else {
          let officeScenarioRand = Math.floor(Math.random() * 4);
          let officeScenarioRand2 = Math.floor(Math.random() * 8);
          
          setTimeout(function () {
            switch (officeScenarioRand) {
              case 0:
                addLine("The building is dark. There is nothing but the blue glow of dusty computer monitors.");
                break;
              case 1:
                addLine("This building seems to be used as a laboratory. The flickering lights reflect off several ice picks.");
                break;
              case 2:
                addLine("What a boring place. There are bookshelves everywhere, but no books to be seen.");
                break;
              case 3:
                addLine("Wires dangle like cobwebs in the ever dark abyss of the lonely office.");
                break;
            }
            addLine("Type SCAV to scavenge the area, or type LEAVE to leave the area.")
            calcMode = 11;
          }, 10);
        }
        break;
    }
    
    addLine("");
    cleanText(cmdReq.value);
  }

  else if (calcMode === 5) {
    addLine("");
    cleanText(cmdReq.value);
  }

  else if (calcMode === 6) {
    addLine("");
    cleanText(cmdReq.value);
  }

  else if (calcMode === 7) {
    set_user = manhatten;
    setTimeout(function () {
      addLine("User set.");
    }, 10);
    calcMode = 3;
    
    addLine("");
    cleanText(cmdReq.value);
  }

  else if (calcMode === 8) {
    addLine("");
    cleanText(cmdReq.value);
  }

  else if (calcMode === 9) {
    addLine("");
    cleanText(cmdReq.value);
  }

  else if (calcMode === 10) {
    addLine("");
    cleanText(cmdReq.value);
  }

  else if (calcMode === 11) {
    if (manhatten === "scav") {
      let randScav = Math.floor(Math.random() * 5);
      let scavRand = Math.floor(Math.random() * 20);

      switch (randScav) {
        case 0: 
          console.log("You found...something...");
          switch (scavRand) {
            case 0:
              stor.push("knife");
              setTimeout(function () {
                addLine("You found a knife.");
              }, 10);
              break;
            case 1:
              stor.push("metal");
              setTimeout(function () {
                addLine("You found some scrap metal.");
              }, 10);
              break;
            case 2:
              stor.push("powder");
              setTimeout(function () {
                addLine("A small amount of white powder was found.");
              }, 10);
              break;
            case 3: 
              stor.push("solar");
              setTimeout(function () {
                addLine("You found a small sized solar panel.");
              }, 10);
              break;
            case 4:
              stor.push("string");
              setTimeout(function () {
                addLine("You found a bit of string.");
              }, 10);
              break;
            case 5:
              stor.push("cloth");
              setTimeout(function () {
                addLine("Some cloth was found.");
              }, 10);
              break;
            case 6:
              stor.push("beans");
              setTimeout(function () {
                addLine("You found a can of beans.");
              }, 10);
            case 7:
              stor.push("lighter");
              setTimeout(function () {
                addLine("You found a working lighter.");
              }, 10);
              break;
            case 8:
              stor.push("firewood");
              setTimeout(function () {
                addLine("You found some firewood.");
              }, 10);
              break;
            case 9:
              stor.push("icepick");
              setTimeout(function () {
                addLine("You found an icepick.");
              }, 10);
              break;
            case 10:
            case 11: 
            case 12: 
            case 13: 
            case 14: 
            case 15:
            case 16: 
            case 17: 
            case 18: 
            case 19: 
              setTimeout(function () {
                addLine("You couldn't find anything.");
              }, 10);
              break;
          }
          break;
        case 1:
          // Do nothing
          break;
        case 2:
          // Do nothing
          break;
        case 3:
          // Do nothing
          break;
        case 4:
          // Do nothing
          break;
      }
    }

    else if (manhatten === "leave") {
      setTimeout(function () {
        addLine("You leave the area.");
      }, 10);

      calcMode = 3;
    }

    else {
      setTimeout(function () {
        addLine("That's not a command you can use here.");
      }, 10);
    }
  
    addLine("");
    cleanText(cmdReq.value);
  }
  
  setTimeout(function () {
    cmdReq.value = "";
    cmd.scrollTo(0, cmd.scrollHeight);
  }, 15);
}

let savedData = "[]";
let savedLen = 0;

setInterval(function () {
  fetch ("/dicit")
  .then(response => response.text())
  .then(data => {
    let dataArr = JSON.parse(data);
    let dataArrMax = dataArr.length;

    if (dataArrMax > savedLen) {
      addLine(dataArr[dataArrMax - 1]);
      savedLen = dataArrMax;
    }

    else {
      // Do nothing
    }
  })
  .catch(error => {
    addLine(error);
  })
}, 500);

setTimeout(function () {
  loadScreen();
}, 1000);