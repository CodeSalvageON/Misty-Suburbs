let mistySave = localStorage.getItem("mistySub-save");
let indianHead = document.getElementById("indian");
let staticHead = document.getElementById("static");
let cmd = document.getElementById("cmd");
const blink = document.getElementById("blink");
let cmdForm = document.getElementById("cmd-form");
const cmdReq = document.getElementById("cmd-req");

function loadScreen () {
  /*
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
      indianHead.style.display = "none";
    }, 3000);
  }

  else {
    
  }*/

  indianHead.style.display = "none";
  staticHead.style.display = "none";
  cmd.style.display = "block";
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

addLine("Type 1 to go Online.");
addLine("Type 2 to remain alone.");
let calcMode = -1;
let stor = []; 
let wp = 24;
let isNew = true;
let frequency = 0;
frequency = Math.floor(Math.random() * 1000);
let encounterType = 0;
let isEnt = false;
let buildNum = 0;
let set_user = "";
let isTherePeople = false;
let imperialRep = 100;
let arenaRep = 100;
let acadRep = 100;
let allyRep = 100;
let specialEncounter = false;
let currentEnemy = "";
let enemyWillpower = 0;
let currentWeapon = "none";
let enemyAtk = 0;
let isInCombat = false;
let slaves = 0;
let isAlreadyLooted = false;
let hasEaten = false;
let isOnline = false;
let savedLocations = [];
let locationTypes = [];
let itemSaved = [];
let slaveGuardLoc = [];

function takeDamage () {
  cmd.style.backgroundColor = "red"

  setTimeout(function () {
    cmd.style.backgroundColor = "black";
  }, 20);
}

function initAttackEncounter () {
  isAlreadyLooted = false;
  hasEaten = false;
  calcMode = 16;
  
  if (currentEnemy === "patrol" || currentEnemy === "khan" || currentEnemy === "city" || currentEnemy === "arena" || currentEnemy === "ware" || currentEnemy === "set") {
    let randWeap = Math.floor(Math.random() * 3);

    switch (randWeap) {
      case 0:
        enemyAtk = 2;
        break;
      case 1: 
        enemyAtk = 5;
        break;
      case 2:
        enemyAtk = 11;
        break;
    }

    if (currentEnemy === "patrol") {
      enemyWillpower = buildNum * 28;
    }

    else if (currentEnemy === "khan") {
      enemyWillpower = 100;
    }

    else if (currentEnemy === "city") {
      enemyWillpower = 80;
    }

    else if (currentEnemy === "arena") {
      enemyWillpower = 75;
    }

    else if (currentEnemy === "ware") {
      enemyWillpower = 64;
    }

    else if (currentEnemy === "set") {
      enemyWillpower = 95;
    }
  }

  else if (currentEnemy === "arenamen") {
    let randWeap = Math.floor(Math.random() * 2);

    switch (randWeap) {
      case 0:
        enemyAtk = 2;
        break;
      case 1:
        enemyAtk = 5;
        break;
    }

    enemyWillpower = buildNum * 24;
  }

  else {
    let randWeap = Math.floor(Math.random() * 2);

    switch (randWeap) {
      case 0: 
        enemyAtk = 1;
        break; 
      case 1: 
        enemyAtk = 2;
        break;
    }

    if (currentEnemy === "robot") {
      enemyWillpower = 60;
    }

    else if (currentEnemy === "strag") {
      enemyWillpower = 15;
    }

    else if (currentEnemy === "eyes") {
      enemyWillpower = 30;
    }

    else if (currentEnemy === "kids") {
      enemyWillpower = 65;
    }

    else if (currentEnemy === "bur") {
      enemyWillpower = 10;
    }
  }
}

function enemyRecoil () {
  if (currentEnemy === "patrol" || currentEnemy === "khan" || currentEnemy === "city" || currentEnemy === "arena" || currentEnemy === "ware" || currentEnemy === "set") {
    let randWeap = Math.floor(Math.random() * 3);
    switch (randWeap) {
      case 0:
        enemyAtk = 2;
        break;
      case 1: 
        enemyAtk = 5;
        break;
      case 2:
        enemyAtk = 11;
        break;
    }
  }

  else if (currentEnemy === "arenamen") {
    let randWeap = Math.floor(Math.random() * 2);

    switch (randWeap) {
      case 0:
        enemyAtk = 2;
        break;
      case 1:
        enemyAtk = 5;
        break;
    }
  }

  else {
    let randWeap = Math.floor(Math.random() * 2);

    switch (randWeap) {
      case 0: 
        enemyAtk = 1;
        break; 
      case 1: 
        enemyAtk = 2;
        break;
    }
  }
}

function attackEncounter () {
  if (isInCombat === true) {
    let enemyHitChance = Math.floor(Math.random () * 6);

    switch (enemyHitChance) {
      case 0: 
      case 1: 
      case 2: 
      case 3: 
      case 4: 
        setTimeout(function () {
          if (enemyAtk < 1) {
            enemyAtk = 0;
          }

          else {
            takeDamage();
          }
           
          addLine("Enemy attacked; you lost " + enemyAtk + " Willpower.");
          wp -= enemyAtk;
          if (wp < 1) {
            isInCombat = false;
            calcMode = "dead";
            wp = 24;
            stor = [];
            setTimeout(function () {
              addLine("You die in the never-ending expanse of the Traum, alone.");
              addLine("Rematerializing...");

              setTimeout(function () {
                frequency = Math.floor(Math.random() * 1000);
                addLine("You wake up, dazed, in an unfamiliar field.");
                calcMode = 3;
              }, 2500);
            }, 10);
          }
          cmd.scrollTo(0, cmd.scrollHeight);

          if (enemyAtk === 0) {
            enemyRecoil();
          }
        }, 10);
        break; 
      case 5: 
        setTimeout(function () {
          addLine("Enemy missed.");
        }, 10);
        break;
    }
  }

  else {
    // Do nothing
  }
}

setInterval(attackEncounter, 2000);

function randomEncounter () {
  let getEnt = Math.floor(Math.random() * 5);
  let randEnt = Math.floor(Math.random() * 15);
  
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

    else if (randEnt === 12) {
      addLine("A Creature begins to attack you.");
      currentEnemy = "bur";
      initAttackEncounter();
      isInCombat = true;
    }

    else if (randEnt === 13) {
      addLine("A Creature begins to attack you.");
      currentEnemy = "bur";
      initAttackEncounter();
      isInCombat = true;
    }

    else if (randEnt === 14) {
      addLine("A Creature begins to attack you.");
      currentEnemy = "bur";
      initAttackEncounter();
      isInCombat = true;
    }
  }
}

function combatEnemy (willpow, enemy) {
  if (enemy === "patrol") {
    enemyWillpower = buildNum * 28;
  }

  else if (enemy === "khan") {
    enemyWillpower = 100;
  }

  else if (enemy === "") {}
}

const vhs = document.getElementById("vhs");

cmdForm.onsubmit = function () {
  event.preventDefault();
  indianHead.style.display = "none";
  let manhatten = cmdReq.value.toLowerCase();
  let chicago = cmdReq.value;

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

  else if (calcMode === -1) {
    if (manhatten === "1") {
      setTimeout(function () {
        addLine("Going online.");

        if (navigator.onLine === false) {
          setTimeout(function () {
            addLine("Cannot connect to the World Wide Web.");
          }, 10);
        }

        else {
          isOnline = true;
          setTimeout(function () {
            addLine("Create a NEW state or LOAD a previous one.");
            addLine("(Options: NEW, LOAD)");
            calcMode = 0;
          }, 10);
        }
      }, 10);
    }

    else if (manhatten === "2") {
      setTimeout(function () {
        addLine("You head into the abyss, alone.");
        setTimeout(function () {
          addLine("Create a NEW state or LOAD a previous one.");
          addLine("(Options: NEW, LOAD)");
          calcMode = 0;
          isOnline = false;
        }, 10);
      }, 10);
    }

    else {
      setTimeout(function () {
        addLine("Unknown number.");
      }, 10);
    }
  }

  else if (calcMode === 1) {
    let modeSplit = atob(chicago.replace(" ", "")).split(";-");
    console.log(modeSplit);
    console.log(modeSplit.length);

    if (modeSplit.length === 11) {
      stor = JSON.parse(modeSplit[0]);
      wp = parseInt(modeSplit[1]);
      savedLocations = JSON.parse(modeSplit[2]);
      locationTypes = JSON.parse(modeSplit[3]);
      frequency = parseInt(modeSplit[4]);
      imperialRep = parseInt(modeSplit[5]);
      acadRep = parseInt(modeSplit[6]);
      arenaRep = parseInt(modeSplit[7]);
      slaveGuardLoc = JSON.parse(modeSplit[8]);
      set_user = modeSplit[9];

      if (modeSplit[10] === "true") {
        isOnline = true;
      }

      else {
        isOnline = false; 
      }

      lines.innerHTML = "";
      addLine("Choose an interface.");
      addLine("1. Command Line Priority");
      addLine("Please enter a number below.");

      calcMode = 2;
    }

    else {
      setTimeout(function () {
        addLine("Not a valid save code.");
        calcMode = 0;
      }, 10);
    }
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
        addLine("use - Use an item you have in storage");
        addLine("craft - Craft an item or vehicle using items in storage (When at a place you own)");
        addLine("destroy - Destroy a settlement");
        addLine("guard - Set slaves to guard a settlement, ownership of the slaves will transfer to the Settlement itself");
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
        setTimeout(function () {
          addLine(String(stor));
        }, 10);
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
        isTherePeople = false;
        specialEncounter = false;

        if (String(savedLocations).includes("," + String(frequency) + ",") || savedLocations[savedLocations.length - 1] === frequency) {
          let locationNum = 0;

          for (i = 0; i < savedLocations.length; i++) {
            if (savedLocations[i] === frequency) {
              locationNum = i;
            }
          }

          if (locationTypes[locationNum] === "tent") {
            addLine("You are at a tent. You can now CRAFT or DESTROY.");
          }

          else if (locationTypes[locationNum] === "hut") {
            addLine("You are at a hut. You can now CRAFT or DESTROY.");
          }

          else if (locationTypes[locationNum] === "stronghold") {
            addLine("You are at a stronghold. You can now CRAFT or DESTROY.");
          }

          else if (locationTypes[locationNum] === "town") {
            addLine("You are at a town. You can now CRAFT or DESTROY, or FACTION.");
          }

          else if (locationTypes[locationNum] === "office") {
            addLine("You are at an office building. You can now CRAFT or DESTROY, or FACTION.");
          }

          else if (locationTypes[locationNum] === "condo") {
            addLine("You are at a condo building. You can now CRAFT or DESTROY, or FACTION.");
          }

          else if (locationTypes[locationNum] === "city") {
            addLine("You are at a City. You can now CRAFT or DESTROY, or FACTION.");
          }

          else if (locationTypes[locationNum] === "arena") {
            addLine("You are at an Arena. You can now CRAFT or DESTROY, or FACTION.");
          }

          else if (locationTypes[locationNum] === "set") {
            addLine("You are at a Settlement. You can now CRAFT or DESTROY, or FACTION.");
          }

          else if (locationTypes[locationNum] === "ware") {
            addLine("You are at a Warehouse. You can now CRAFT or DESTROY, or FACTION.");
          }
        }

        else {
          randomEncounter();
        }
      }, 10);
    }

    else if (manhatten === "strvl") {
      frequency -= 1;

      setTimeout(function () {
        addLine("Traveling South...");
        addLine("Your new frequency is " + frequency);
        isEnt = false;
        isTherePeople = false;
        specialEncounter = false;

        if (String(savedLocations).includes("," + String(frequency) + ",") || savedLocations[savedLocations.length - 1] === frequency) {
          let locationNum = 0;

          for (i = 0; i < savedLocations.length; i++) {
            if (savedLocations[i] === frequency) {
              locationNum = i;
            }
          }

          if (locationTypes[locationNum] === "tent") {
            addLine("You are at a tent. You can now CRAFT or DESTROY.");
          }

          else if (locationTypes[locationNum] === "hut") {
            addLine("You are at a hut. You can now CRAFT or DESTROY.");
          }

          else if (locationTypes[locationNum] === "stronghold") {
            addLine("You are at a stronghold. You can now CRAFT or DESTROY.");
          }

          else if (locationTypes[locationNum] === "town") {
            addLine("You are at a town. You can now CRAFT or DESTROY, or FACTION.");
          }

          else if (locationTypes[locationNum] === "office") {
            addLine("You are at an office building. You can now CRAFT or DESTROY, or FACTION.");
          }

          else if (locationTypes[locationNum] === "condo") {
            addLine("You are at a condo building. You can now CRAFT or DESTROY, or FACTION.");
          }

          else if (locationTypes[locationNum] === "city") {
            addLine("You are at a City. You can now CRAFT or DESTROY, or FACTION.");
          }

          else if (locationTypes[locationNum] === "arena") {
            addLine("You are at an Arena. You can now CRAFT or DESTROY, or FACTION.");
          }

          else if (locationTypes[locationNum] === "set") {
            addLine("You are at a Settlement. You can now CRAFT or DESTROY, or FACTION.");
          }

          else if (locationTypes[locationNum] === "ware") {
            addLine("You are at a Warehouse. You can now CRAFT or DESTROY, or FACTION.");
          }
        }

        else {
          randomEncounter();
        }
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
      isTherePeople = false;
      specialEncounter = false;

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

        if (buildingNum === 0 || buildingNum === 1) {
          buildingNum = 2;
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
            addLine("Options: COMBAT, TALK, PASS, GIVE");
            isTherePeople = true;
            calcMode = 5;
          }

          else if (encounterType === 4) {
            addLine("There are " + buildingNum + " Arenamen within this group.");
            addLine("Options: COMBAT, TALK, PASS, GIVE");
            isTherePeople = true;
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

    else if (manhatten.substring(0, 5) === "build") {
      let isSomethingHere = false;
      
      for (i = 0; i < savedLocations.length; i++) {
        if (savedLocations[i] === frequency) {
          isSomethingHere = true;
        }
      }
      
      if (isSomethingHere === true) {
        setTimeout(function () {
          addLine("Something is already here.");
          return false;
        }, 10);
      }
      
      if (wp < 10) {
        setTimeout(function () {
          addLine("You don't have enough Willpower to build anything.");
        }, 10);
      }

      else {
        if (manhatten.substring(6) === "tent") {
          wp -= 10;

          setTimeout(function () {
            addLine("Built a tent at frequency " + frequency + ".");

            if (isOnline === true) {
              fetch ("/getarr")
              .then(response => response.text())
              .then(data => {
                let datSplit = data.split("-;");
                let arr1 = JSON.parse(datSplit[0]);
                let arr2 = JSON.parse(datSplit[1]);

                arr1.push(frequency);
                arr2.push("tent");

                fetch ("/getarr", {
                  method : "POST",
                  headers : {
                    "Content-Type" : "application/json"
                  }, 
                  body : JSON.stringify({
                    ax : arr1, 
                    ay : arr2
                  })
                })
                .then(response => response.text())
                .then(data => {
                  console.log(data);
                })
                .catch(error => {
                  console.log(error);
                });
              })
              .catch(error => {
                console.log(error);
              });
            }

            else {
              savedLocations.push(frequency);
              locationTypes.push("tent");
            }
            
            itemSaved.push("");
            addLine("You can now CRAFT.");
          }, 10);
        }

        else if (manhatten.substring(6) === "hut") {
          if (wp < 15) {
            setTimeout(function () {
              addLine("You don't have enough Willpower to build the hut.");
            }, 10);
          }

          else {
            wp -= 15;

            setTimeout(function () {
              addLine("Built a hut at frequency " + frequency + ".");
              
              if (isOnline === true) {
              fetch ("/getarr")
              .then(response => response.text())
              .then(data => {
                let datSplit = data.split("-;");
                let arr1 = JSON.parse(datSplit[0]);
                let arr2 = JSON.parse(datSplit[1]);

                arr1.push(frequency);
                arr2.push("hut");

                fetch ("/getarr", {
                  method : "POST",
                  headers : {
                    "Content-Type" : "application/json"
                  }, 
                  body : JSON.stringify({
                    ax : arr1, 
                    ay : arr2
                  })
                })
                .then(response => response.text())
                .then(data => {
                  console.log(data);
                })
                .catch(error => {
                  console.log(error);
                });
              })
              .catch(error => {
                console.log(error);
              });
            }

            else {
              savedLocations.push(frequency);
              locationTypes.push("tent");
            }
              itemSaved.push("");
              addLine("You can now CRAFT.");
            }, 10);
          }
        }

        else if (manhatten.substring(6) === "stronghold") {
          if (wp < 20) {
            setTimeout(function () {
              addLine("You don't have enough Willpower to build the stronghold.");
            }, 10);
          }

          else {
            wp -= 20;

            setTimeout(function () {
              addLine("Built a stronghold at frequency " + frequency + ".");
              if (isOnline === true) {
              fetch ("/getarr")
              .then(response => response.text())
              .then(data => {
                let datSplit = data.split("-;");
                let arr1 = JSON.parse(datSplit[0]);
                let arr2 = JSON.parse(datSplit[1]);

                arr1.push(frequency);
                arr2.push("stronghold");

                fetch ("/getarr", {
                  method : "POST",
                  headers : {
                    "Content-Type" : "application/json"
                  }, 
                  body : JSON.stringify({
                    ax : arr1, 
                    ay : arr2
                  })
                })
                .then(response => response.text())
                .then(data => {
                  console.log(data);
                })
                .catch(error => {
                  console.log(error);
                });
              })
              .catch(error => {
                console.log(error);
              });
            }

            else {
              savedLocations.push(frequency);
              locationTypes.push("stronghold");
            }
              itemSaved.push("");
              addLine("You can now CRAFT.");
            }, 10);
          }
        }
      }
    }

    else if (manhatten.substring(0, 3) === "use") {
      function removeItemOnce (arr, value) {
        let index = arr.indexOf(value);
        if (index > -1) {
          arr.splice(index, 1);
        }
        return arr;
      }
      
      if (manhatten.substring(4) === "beans") {
        if (String(stor).includes("beans")) {
          removeItemOnce(stor, manhatten.substring(4));
          wp += 2;
          setTimeout(function () {
            addLine("You eat the beans, and you feel stronger."); 
          }, 10);
        }

        else {
          setTimeout(function () {
            addLine("You don't have any beans.");
          }, 10);
        }
      }

      else if (manhatten.substring(4) === "powder") {
        if (String(stor).includes("powder")) {
          wp += 11;
          setTimeout(function () {
            addLine("You feel good...You feel BERZERK!");
            removeItemOnce(stor, manhatten.substring(4));
            takeDamage();
          }, 10);
        }

        else {
          setTimeout(function () {
            addLine("You don't have any powder.");
          }, 10);
        }
      }

      else {
        setTimeout(function () {
          addLine("You can't use that item here.");
        }, 10);
      }
    }

    else if (manhatten.substring(0, 5) === "craft") {
      function removeItemOnce (arr, value) {
        let index = arr.indexOf(value);
        if (index > -1) {
          arr.splice(index, 1);
        }
        return arr;
      }
      
      let isInHouse = 0;
      for (i = 0; i < savedLocations.length; i++) {
        if (savedLocations[i] === frequency) {
          isInHouse = 1;
        }

        else {
          // Do nothing;
        }
      }

      switch (isInHouse) {
        case 0: 
          setTimeout(function () {
            addLine("You need to be in a settlement you own to craft.");
          }, 10);
          cmdReq.value = "";
          cmd.scrollTo(0, cmd.scrollHeight);
          return false;
          break;
      }
      
      if (manhatten.substring(6) === "icepick") {
        if (String(stor).includes("metal")) {
          let metalAmount = 0;

          for (i = 0; i < stor.length; i++) {
            if (String(stor[i]) === "metal") {
              metalAmount += 1;
            }
          }

          if (metalAmount < 2) {
            setTimeout(function () {
              addLine("You need at least " + String(2 - metalAmount) + " pieces of scrap metal to construct an icepick.");
            }, 10);
          }

          else {
            for (i = 0; i < 2; i++) {
              removeItemOnce("metal");
            }
            stor.push("icepick");
            setTimeout(function () {
              addLine("Constructed an icepick.");
            }, 10);
          }
        }

        else {
          setTimeout(function () {
            addLine("You don't have any scrap metal.");
          }, 10);
        }
      }

      else if (manhatten.substring(6) === "rifle") {
        if (String(stor).includes("metal") && String(stor).includes("firewood") && String(stor).includes("icepick") && String(stor).includes("lighter")) {
          let metalAmount = 0;
          let firewoodAmount = 0;
          let icepickAmount = 0;
          let lighterAmount = 0;

          for (i = 0; i < stor.length; i++) {
            if (stor[i] === "metal") {
              metalAmount += 1;
            }

            else if (stor[i] === "firewood") {
              firewoodAmount += 1;
            }

            else if (stor[i] === "icepick") {
              icepickAmount += 1;
            }

            else if (stor[i] === "lighter") {
              lighterAmount += 1;
            }
          }

          if (metalAmount > 2 && firewoodAmount > 2 && icepickAmount > 0 && lighterAmount > 1) {
            setTimeout(function () {
              addLine("Built a rifle.");
            }, 10);
            stor.push("rifle");

            for (i = 0; i < 3; i++) {
              removeItemOnce("metal");
            }

            for (i = 0; i < 3; i++) {
              removeItemOnce("firewood");
            }

            for (i = 0; i < 1; i++) {
              removeItemOnce("icepick");
            } 

            for (i = 0; i < 2; i++) {
              removeItemOnce("lighter");
            } 
          }

          else {
            setTimeout(function () {
              addLine("You are missing some required materials:");
              addLine("Metals: " + metalAmount + "/3");
              addLine("Firewood: " + firewoodAmount + "/3");
              addLine("Icepicks: " + icepickAmount + "/1");
              addLine("Lighters: " + lighterAmount + "/2");
            }, 10);
          }
        }

        else {
          setTimeout(function () {
            addLine("You do not have one or more of the following items...");
            addLine("metal");
            addLine("firewood");
            addLine("icepick");
            addLine("lighter");
            addLine("Your items: " + String(stor));
          }, 10);
        }
      }
    }

    else if (manhatten === "destroy") {
      let isHereInBuild = false;
      let iNum = 0;
      let defaultSlaveNum = false;
      let slaveGuard = 0;
      let soGladAlmostDone = 0;

      for (i = 0; i < savedLocations.length; i++) {
        if (savedLocations[i] === frequency) {
          isHereInBuild = true;  
          iNum = i;
        }
      }

      for (i = 0; i < slaveGuardLoc.length; i++) {
        let slaveArray = slavedGuardLoc[i].split("-");
        let slaveFrequency = slaveArray[0];
        let slaveFinalNum = slaveArray[1];

        if (slaveFrequency === String(frequency)) {
          defaultSlaveNum = true;
          slaveGuard = parseInt(slaveFinalNum);
        }

        else {
          // Do nothing?
        }
      }

      function defactoNewOrder () {
        let slaveGuardMult = slaveGuard * 5;
        if (defaultSlaveNum === true) {
          soGladAlmostDone = soGladAlmostDone + slaveGuardMult;
        }

        else {
          // Do nothing lol
        }
      }

      function onlineDestroy (destroyNum) {
        fetch ("/getarr")
        .then(response => response.text())
        .then(data => {
          let datSplit = data.split("-;");
          let arr1 = JSON.parse(datSplit[0]);
          let arr2 = JSON.parse(datSplit[1]);

          arr2[destroyNum] = "ruins";

          fetch ("/getarr", {
            method : "POST",
            headers : {
              "Content-Type" : "application/json"
            }, 
            body : JSON.stringify({
              ax : arr1, 
              ay : arr2
            })
          })
          .then(response => response.text())
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.log(error);
          });
        })
        .catch(error => {
          throw error;
        });
      }

      if (isHereInBuild === true) {
        console.log("DESTROY COMMAND ALLOWED HERE");
        console.log(locationTypes[iNum]);
        
        if (locationTypes[iNum] === "tent") {
          soGladAlmostDone = 5;
          defactoNewOrder();
          
          if (wp < soGladAlmostDone) {
            setTimeout(function () {
              addLine("You don't have enough Willpower to destroy the tent.");
              addLine("Willpower: " + wp + "/" + String(soGladAlmostDone));
            }, 10);
          }

          else {
            wp -= soGladAlmostDone;

            if (isOnline === true) {
              onlineDestroy(iNum);
            }

            else {
              locationTypes[iNum] = "ruins";
            }
            
            setTimeout(function () {
              addLine("You destroy the tent.");
            }, 10);
          }
        }

        else if (locationTypes[iNum] === "hut") {
          soGladAlmostDone = 7;
          defactoNewOrder();
          
          if (wp < soGladAlmostDone) {
            setTimeout(function () {
              addLine("You don't have enough Willpower to destroy the hut.");
              addLine("Willpower: " + wp + "/" + String(soGladAlmostDone));
            }, 10);
          }

          else {
            wp -= soGladAlmostDone;
            
            if (isOnline === true) {
              onlineDestroy(iNum);
            }

            else {
              locationTypes[iNum] = "ruins";
            }
            
            setTimeout(function () {
              addLine("You destroy the hut.");
            }, 10);
          }
        }

        else if (locationTypes[iNum] === "stronghold") {
          soGladAlmostDone = 10;
          defactoNewOrder();
          
          if (wp < soGladAlmostDone) {
            setTimeout(function () {
              addLine("You don't have enough Willpower to destroy the stronghold.");
              addLine("Willpower: " + wp + "/" + String(soGladAlmostDone));
            }, 10);
          }

          else {
            wp -= soGladAlmostDone;

            if (isOnline === true) {
              onlineDestroy(iNum);
            }

            else {
              locationTypes[iNum] = "ruins";
            }
            
            setTimeout(function () {
              addLine("You destroy the stronghold.");
            }, 10);
          }
        }

        else if (locationTypes[iNum] === "ware") {
          soGladAlmostDone = 15;
          defactoNewOrder();
          
          if (wp < soGladAlmostDone) {
            setTimeout(function () {
              addLine("You don't have enough Willpower to destroy the Warehouse.");
              addLine("Willpower: " + wp + "/" + String(soGladAlmostDone));
            }, 10);
          }

          else {
            wp -= soGladAlmostDone;

            if (isOnline === true) {
              onlineDestroy(iNum);
            }

            else {
              locationTypes[iNum] = "ruins";
            }
            
            setTimeout(function () {
              addLine("You destroy the Warehouse.");
            }, 10);
          }
        }

        else if (locationTypes[iNum] === "city") {
          soGladAlmostDone = 10;
          defactoNewOrder();
          
          if (wp < soGladAlmostDone) {
            setTimeout(function () {
              addLine("You don't have enough Willpower to destroy the City.");
              addLine("Willpower: " + wp + "/" + String(soGladAlmostDone));
            }, 10);
          }

          else {
            wp -= soGladAlmostDone;

            if (isOnline === true) {
              onlineDestroy(iNum);
            }

            else {
              locationTypes[iNum] = "ruins";
            }
            
            setTimeout(function () {
              addLine("You destroy the City.");
            }, 10);
          }
        }

        else if (locationTypes[iNum] === "set") {
          soGladAlmostDone = 20;
          defactoNewOrder();
          
          if (wp < soGladAlmostDone) {
            setTimeout(function () {
              addLine("You don't have enough Willpower to destroy the Settlement.");
              addLine("Willpower: " + wp + "/" + String(soGladAlmostDone));
            }, 10);
          }

          else {
            wp -= soGladAlmostDone;

            if (isOnline === true) {
              onlineDestroy(iNum);
            }

            else {
              locationTypes[iNum] = "ruins";
            }
            
            setTimeout(function () {
              addLine("You destroy the Settlement.");
            }, 10);
          }
        }

        else if (locationTypes[iNum] === "arena") {
          soGladAlmostDone = 10;
          defactoNewOrder();
          
          if (wp < soGladAlmostDone) {
            setTimeout(function () {
              addLine("You don't have enough Willpower to destroy the Arena.");
              addLine("Willpower: " + wp + "/" + String(soGladAlmostDone));
            }, 10);
          }

          else {
            wp -= soGladAlmostDone;

            if (isOnline === true) {
              onlineDestroy(iNum);
            }

            else {
              locationTypes[iNum] = "ruins";
            }
            
            setTimeout(function () {
              addLine("You destroy the Arena.");
            }, 10);
          }
        }
      }
        
      else {
        setTimeout(function () {
          addLine("There's nothing here to destroy.");
        }, 10);
      }
    }

    else if (manhatten.substring(0, 5) === "guard") {
      let parseSlave = parseInt(manhatten.substring(6));

      if (parseSlave - parseSlave === 0) {
        if (slaves < parseSlave) {
          setTimeout(function () {
            addLine("You don't have enough slaves.");
          }, 10);
        }

        else {
          let falloutNewVegasRocks = false;
          let doomFuckingRocks = 0;
          
          for (i = 0; i < savedLocations.length; i++) {
            if (savedLocations[i] === frequency) {
              falloutNewVegasRocks = true;
              doomFuckingRocks += 1;
            }
          }

          if (falloutNewVegasRocks === true) {
            if (locationTypes[doomFuckingRocks] === "ruins") {
              setTimeout(function () {
                addLine("You can't assign slave guards to ruins.");
              }, 10);
            }

            else {
              slaveGuardLoc.push(String(frequency) + "-" + String(parseSlave));
              slaves -= parseSlave;
            }
          }

          else {
            setTimeout(function () {
              addLine("There's nothing here to assign slave guards to.");
            }, 10);
          }
        }
      }

      else {
        setTimeout(function () {
          addLine("Hey man, when in Rome.");
        }, 10);
      }
    }

    else if (manhatten === "save") {
      let encryptedSave = JSON.stringify(stor) + ";-" + wp + ";-" + JSON.stringify(savedLocations) + ";-" + JSON.stringify(locationTypes) + ";-" + frequency + ";-" + imperialRep + ";-" + acadRep + ";-" + arenaRep + ";-" + JSON.stringify(slaveGuardLoc) + ";-" + set_user + ";-" + isOnline;
      let endSave = btoa(encryptedSave);

      setTimeout(function () {
        addLine("Your save code is below. Keep it safe.");
        addLine(endSave);
        prompt("Save code: ", endSave);
      }, 10);
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
      case 2:
        if (Math.abs(parseInt(manhatten)) > buildNum) {
          setTimeout(function () {
            addLine("That house does not exist.");
          }, 10);
        }

        else {
          let houseScenarioRand = Math.floor(Math.random() * 4);

          setTimeout(function () {
            switch (houseScenarioRand) {
              case 0: 
                addLine("The house is extremely bland. There is only a blank TV, an ugly couch, and a green carpet.");
                addLine("Type SCAV to scavenge the area, or type LEAVE to leave the area.");
                break;
              case 1:
                addLine("A cold hardwood floor fills the majority of the view. The rest of the house is completely empty.");
                addLine("Type SCAV to scavenge the area, or type LEAVE to leave the area.");
                break;
              case 2:
                addLine("Inside, is a massive field with several exotic flowers and insturments seemingly playing by themselves.");
                addLine("Type SCAV to scavenge the area, or type LEAVE to leave the area.");
                break;
              case 3:
                addLine("It's just a regular house, surprisingly.");
                addLine("Type SCAV to scavenge the area, or type LEAVE to leave the area.");
                break;
            }
            calcMode = 11;
          }, 10);
        }
        break;
      case 5:
        if (Math.abs(parseInt(manhatten)) > buildNum) {
          setTimeout(function () {
            addLine("That room does not exist.");
          }, 10);
        }

        else {
          let roomScenarioRand = Math.floor(Math.random() * 4);

          setTimeout(function () {
            switch (roomScenarioRand) {
              case 0:
                addLine("Inside the room there is a man tinkering with several machines.");
                addLine("Options: COMBAT, TALK, PASS, GIVE");
                calcMode = 5;
                specialEncounter = true;
                break;
              case 1:
                addLine("The room is a large cafeteria with many windows and many lights.");
                let peopleScenario = Math.floor(Math.random() * 2);
                switch (peopleScenario) {
                  case 0:
                    addLine("There are many, many, students all looking at you.");
                    addLine("Options: COMBAT, TALK, PASS, GIVE");
                    calcMode = 5;
                    isTherePeople = true;
                    break;
                  case 1:
                    addLine("Type SCAV to scavenge the area, or type LEAVE to leave the area.");
                    calcMode = 11;
                    break;
                }
                break;
              case 2: 
                addLine("It's a library with rows of books, mostly ones about gardening and a Garden.");
                addLine("Type SCAV to scavenge the area, or type LEAVE to leave the area.");
                calcMode = 11;
                break;
              case 3:
                addLine("There's nothing to see here except a somewhat plain classroom.");
                addLine("Type SCAV to scavenge the area, or type LEAVE to leave the area.");
                calcMode = 11;
                break;
            }
          }, 10);
        }
        break;
      case 6:
        if (Math.abs(parseInt(manhatten)) > buildNum) {
          setTimeout(function () {
            addLine("That apartment building does not exist.");
          }, 10);
        }

        else {
          let condoScenarioRand = Math.floor(Math.random() * 4);

          setTimeout(function () {
            switch (condoScenarioRand) {
              case 0:
                addLine("The interior design is very gray and white oriented. The carpet looks comfy, but rough at the same time.");
                addLine("Type SCAV to scavenge the area, or type LEAVE to leave the area.");
                calcMode = 11;
                break;
              case 1: 
                addLine("Surprisingly, it's not the insides of an apartment, but a roller skating rink. Disco lights and all.");
                addLine("Type SCAV to scavenge the area, or type LEAVE to leave the area.");
                calcMode = 11;
                break;
              case 2:
                addLine("You find a group of stragglers living in the condo building.");
                addLine("Options: COMBAT, TALK, PASS, GIVE");
                calcMode = 5;
                break;
              case 3:
                addLine("It's nothing but an empty building. No stairs, just a hollow shell.");
                addLine("Type LEAVE to leave the building.");
                calcMode = 11;
                break;
            }
          }, 10);
        }
        break;
      case 7:
        if (Math.abs(parseInt(manhatten)) > buildNum) {
          setTimeout(function () {
            addLine("That room does not exist.");
          }, 10);
        }

        else {
          let nowhereScenarioRand = Math.floor(Math.random() * 4);

          setTimeout(function () {
            switch (nowhereScenarioRand) {
              case 0:
                addLine("All you see is a boring and generic bedroom. Quite cozy, however.");
                addLine("Type SCAV to scavenge the area, or type LEAVE to leave the area.");
                calcMode = 11;
                break;
              case 1:
                addLine("There's a small kitchen with a dimmed light.");
                addLine("Type SCAV to scavenge the area, or type LEAVE to leave the area.");
                calcMode = 11;
                break;
              case 2:
                addLine("There is a large cluster of eyes staring at you.");
                addLine("Options: COMBAT, TALK, PASS, GIVE");
                calcMode = 5;
                break;
              case 3:
                addLine("There is a small room with a window.");
                addLine("Type SCAV to scavenge the area, or type LEAVE to leave the area.");
                calcMode = 11;
                break;
            }
          }, 10);
        }
        break;
      case 8:
        if (Math.abs(parseInt(manhatten)) > buildNum) {
          setTimeout(function () {
            addLine("That store does not exist.");
          }, 10);
        }
          
        else {
          let mallRandScenario = Math.floor(Math.random() * 4);

          setTimeout(function () {
            switch (mallRandScenario) {
              case 0: 
                addLine("It's a surprisngly brightly lit store selling various merchandise from a long forgotten time.");
                addLine("Type SCAV to scavenge the area, or type LEAVE to leave the area.");
                calcMode = 11;
                break;
              case 1:
                addLine("There is a lonely pumpkin farm inside the room, which is bigger than it looks to be from the outside.");
                addLine("Type SCAV to scavenge the area, or type LEAVE to leave the area.");
                calcMode = 11;
                break;
              case 2:
                addLine("In the middle of the empty store is an interactive screen with robotic arms and a face.");
                addLine("Options: COMBAT, TALK, PASS, GIVE");
                calcMode = 5;
                break;
              case 3: 
                addLine("It's just another dark and empty store.");
                addLine("Type SCAV to scavenge the area, or type LEAVE to leave the area.");
                calcMode = 11;
                break;
            }
          }, 10);
        }
        break;
    }
    
    addLine("");
    cleanText(cmdReq.value);
  }

  else if (calcMode === 5) {
    if (manhatten === "combat") {
      setTimeout(function () {
        addLine("Options: ATTACK, BLOCK, ITEM");
        switch (encounterType) {
          case 3:
            addLine("The Imperial Patrol forms a squad-like formation and prepares to defend itself.");
            currentEnemy = "patrol";
            initAttackEncounter();
            isInCombat = true;
            break;
          case 4:
            addLine("The group of Arenamen begin to charge at you.");
            currentEnemy = "arenamen";
            initAttackEncounter();
            isInCombat = true;
            break;
          case 5:
            if (specialEncounter === true) {
              addLine("The man shakes his head and dissolves into a flurry of angry nano-bots.");
              currentEnemy = "khan";
              initAttackEncounter();
              isInCombat = true;
            }

            else {
              addLine("The students go their seperate paths. Some panic, whilst others prepare to defend their Academy.");
              currentEnemy = "kids";
              initAttackEncounter();
              isInCombat = true;
            }
            break;
          case 6:
            addLine("The stragglers, clearly unprepared for a fight, grab whatever they can.");
            currentEnemy = "strag";
            initAttackEncounter();
            isInCombat = true;
            break;
          case 7:
            addLine("The eyes surround you and begin to whirl.");
            currentEnemy = "eyes";
            initAttackEncounter();
            isInCombat = true;
            break;
          case 8:
            addLine("The arms impossibly grow longer and begin to strike at you.");
            currentEnemy = "robot";
            initAttackEncounter();
            isInCombat = true;
            break;
        }
      }, 10);
      calcMode = 12;
    }

    else if (manhatten === "talk") {
      setTimeout(function () {
        switch (encounterType) {
          case 3:
            addLine("Imperial Commander: Move along.");

            if (imperialRep < 50) {
              addLine("Imperial Commander: Hey...wait a minute...Get back here you monster!");
              currentEnemy = "patrol";
              initAttackEncounter();
              isInCombat = true;
            }
            break;
          case 4:
            addLine("Arenaboss: Check out an arena! If you're lucky, you won't be forced to fight in one!");

            if (arenaRep < 50) {
              addLine("Arenaboss: Huh, could use some sport, actually...");
              currentEnemy = "arenamen";
              initAttackEncounter();
              isInCombat = true;
            }
            break;
          case 5:
            function khanSpeak () {
              addLine("(1). What's the deal with the creepy Academy?");
              addLine("(2). Any threats I should know about?");
              addLine("(3). What's the deal with the tiny robots?");
              addLine("(4). Nevermind, I'll be leaving now.");
              addLine("Type the dialogue option number below.");
              calcMode = 13;
            }
            
            if (specialEncounter === true) {
              if (acadRep < 20) {
                addLine("You should leave.");
              }

              else if (acadRep < 50 && acadRep > 20) {
                addLine("Have you come to apologize?");
                khanSpeak();
              }

              else if (acadRep < 100 && acadRep > 50) {
                addLine("Please try to be more polite to the students and staff here.");
                khanSpeak();
              }

              else if (acadRep < 150 && acadRep > 100) {
                addLine("You're a model student. I thought you should know that."); 
                khanSpeak();
              }

              else {
                addLine("We would rename this entire Academy for you...if we had the budget.");
                khanSpeak();
              }
            }

            else {
              addLine("There are no real words, just garbled speech.");
            }
            break;
          case 6:
            addLine("Please...any Willpower to spare and give would be most helpful...");
            break;
          case 7:
            addLine("WEWEREHEREBEFOREANYOFYOUYOUNEEDTOREMEMBER");
            break;
          case 8:
            addLine("Make your visit to the Mall...a peaceful one.");
            break;
        }
      }, 10);
    }

    else if (manhatten === "give") {
      setTimeout(function () {
        if (wp < 1) {
          addLine("You don't have any Willpower to give.");
        }

        else {
          addLine("You give one Willpower away.");
          wp -= 1;
          switch (encounterType) {
            case 3:
              addLine("Imperial Commander: Thanks.");
              addLine("Imperial Reputation Increased");
              imperialRep += 1;
              break;
            case 4:
              addLine("Arenaboss: You're looking to suck up, huh? Smart.");
              addLine("Arena Reputation Increased.");
              arenaRep += 1;
              break;
            case 5:
              if (specialEncounter === true) {
                addLine("Mr. Khan: I'm very glad you've given this to me.");
                addLine("Academy Reputation Increased.");
                acadRep += 2;
              }

              else {
                addLine("Students: THANKYOUWELOVEYOU");
                addLine("Academy Repuation Increased.");
                acadRep += 1;
              }
              break;
            case 6:
              addLine("The stragglers give you a look of gratefulness.");
              break;
            case 7:
              addLine("The eyes all huddle together to form a face that looks vaguely confused.");
              break;
            case 8:
              addLine("The monitor's eyes go up and its tongue goes out.");
              break;
          }
        }
      }, 10);
    }

    else if (manhatten === "pass") {
      setTimeout(function () {
        addLine("You ignore the group and pass them.");
        calcMode = 3;
      }, 10);
    }

    else {
      setTimeout(function () {
        addLine("That command can't be used here.");
      }, 10);
    }
    
    addLine("");
    cleanText(cmdReq.value);
  }

  else if (calcMode === 6) {
    addLine("");
    cleanText(cmdReq.value);

    if (manhatten === "help") {
      setTimeout(function () {
        addLine("ramp - Declare a one-man war against this Arena");
        addLine("dem - Demand a meeting with the Bosses of this Arena");
        addLine("buy - Buy items in return for Willpower");
        addLine("sell - Sell items for Willpower");
        addLine("fight - Fight in the Arena");
        addLine("leave - Leave the Arena");
      }, 10);
    }

    else if (manhatten === "ramp") {
      setTimeout(function () {
        addLine("Hoardes of Arenamen and creatures rush towards you.");
        currentEnemy = "arena";
        initAttackEncounter();
        isInCombat = true;
      }, 10);
    }

    else if (manhatten === "dem") {
      setTimeout(function () {
        if (wp < 50) {
          addLine("Arenaman: THE BOSSES don't like you.");
        }

        else {
          addLine("Come right on in...");
          calcMode = 18;
        }
      }, 10);
    }

    else if (manhatten === "buy") {
      setTimeout(function () {
        addLine("We have the following items in store today...");
        addLine("icepick - costs 2 Willpower, when recieved you can use this in combat to enslave and lobotomize your enemies");
        addLine("beans - costs 1 Willpower, generates 2 Willpower when used");
        addLine("powder - costs 3 Willpower, generates 10 Willpower when used");
        addLine("Your Willpower: " + wp);
        addLine("Type the name of the item you wish to buy below.");
        calcMode = 14;
      }, 10);
    }

    else if (manhatten === "sell") {
      setTimeout(function () {
        addLine("Your items: " + String(stor));
        addLine("Type the name of the item you wish to sell.");
        calcMode = 15;
      }, 10);
    }

    else if (manhatten === "leave") {
      setTimeout(function () {
        addLine("You leave the Arena.");
        calcMode = 3;
      }, 10);
    }

    else {
      setTimeout(function () {
        addLine("That's not a command you can use here.");
      }, 10);
    }
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

    if (manhatten === "help") {
      setTimeout(function () {
        addLine("ramp - Declare a one-man war against this City");
        addLine("dem - Demand a meeting with the Hosts of this City");
        addLine("buy - Buy items in return for Willpower");
        addLine("sell - Sell items for Willpower");
        addLine("leave - Leave this City");
      }, 10);
    }

    else if (manhatten === "ramp") {
      setTimeout(function () {
        addLine("The residents of the city turn and flee. Only a few come to challenge you.");
        currentEnemy = "city";
        initAttackEncounter();
        isInCombat = true;
      }, 10);
    }

    else if (manhatten === "dem") {
      setTimeout(function () {
        if (wp < 50) {
          addLine("City Worker: THE COUNCIL has deemed you unworthy.");
        }

        else {
          addLine("Come right on in...");
          calcMode = 18;
        }
      }, 10);
    }

    else if (manhatten === "buy") {
      setTimeout(function () {
        addLine("We have the following items in store today...");
        addLine("knife - costs 1 Willpower, when recieved you can use this in combat to enslave and lobotomize your enemies");
        addLine("beans - costs 1 Willpower, generates 2 Willpower when used");
        addLine("cloth - costs 1 Willpower, can be used for parts");
        addLine("ligher - costs 2 Willpower, can be used for parts");
        addLine("Your Willpower: " + wp);
        addLine("Type the name of the item you wish to buy below.");
        calcMode = 14;
      }, 10);
    }

    else if (manhatten === "sell") {
      setTimeout(function () {
        addLine("Your items: " + String(stor));
        addLine("Type the name of the item you wish to sell.");
        calcMode = 15;
      }, 10);
    }

    else if (manhatten === "leave") {
      setTimeout(function () {
        addLine("You leave the City.");
        calcMode = 3;
      }, 10);
    }

    else {
      setTimeout(function () {
        addLine("That's not a command you can use here.");
      }, 10);
    }
  }

  else if (calcMode === 10) {
    addLine("");
    cleanText(cmdReq.value);

    if (manhatten === "help") {
      setTimeout(function () {
        addLine("ramp - Declare a one-man war against this Warehouse");
        addLine("dem - Demand a meeting with the Mayor of this Warehouse");
        addLine("buy - Buy items in return for Willpower");
        addLine("sell - Sell items for Willpower");
        addLine("leave - Leave the Warehouse");
      }, 10);
    }

    else if (manhatten === "ramp") {
      setTimeout(function () {
        addLine("The warehouse residents begin to defend themselves.");
        currentEnemy = "ware";
        initAttackEncounter();
        isInCombat = true;
      }, 10);
    }

    else if (manhatten === "dem") {
      setTimeout(function () {
        if (wp < 50) {
          addLine("Warehouse Resident: The mayor doesn't really trust you.");
        }

        else {
          addLine("Come right on in...");
          calcMode = 18;
        }
      }, 10);
    }

    else if (manhatten === "buy") {
      setTimeout(function () {
        addLine("We have the following items in store today...");
        addLine("solar - costs 3 Willpower, provides energy for possible crafts");
        addLine("metal - costs 1 Willpower, can be used for parts");
        addLine("string - costs 1 Willpower, can be used for parts");
        addLine("Your Willpower: " + wp);
        addLine("Type the name of the item you wish to buy below.");
        calcMode = 14;
      }, 10);
    }

    else if (manhatten === "sell") {
      setTimeout(function () {
        addLine("Your items: " + String(stor));
        addLine("Type the name of the item you wish to sell.");
        calcMode = 15;
      }, 10);
    }

    else if (manhatten === "leave") {
      setTimeout(function () {
        addLine("You leave the Warehouse.");
        calcMode = 3;
      }, 10);
    }

    else {
      setTimeout(function () {
        addLine("That's not a command you can use here.");
      }, 10);
    }
  }

  else if (calcMode === 9) {
    addLine("");
    cleanText(cmdReq.value);

    if (manhatten === "help") {
      setTimeout(function () {
        addLine("ramp - Declare a one-man war against this Imperial Settlement");
        addLine("dem - Demand a meeting with the Overseers of this Settlement");
        addLine("buy - Buy items in return for Willpower");
        addLine("sell - Sell items for Willpower");
        addLine("leave - Leave this Settlement");
      }, 10);
    }

    else if (manhatten === "ramp") {
      setTimeout(function () {
        addLine("Many soldiers surround you.");
        currentEnemy = "set";
        initAttackEncounter();
        isInCombat = true;
      }, 10);
    }

    else if (manhatten === "dem") {
      setTimeout(function () {
        if (wp < 50) {
          addLine("Imperial Soldier: The Overseer wants you to prove yourself first.");
        }

        else {
          addLine("Come right on in...");
          calcMode = 18;
          
        }
      }, 10);
    }

    else if (manhatten === "buy") {
      setTimeout(function () {
        addLine("We have the following items in store today...");
        addLine("icepick - costs 2 Willpower, when recieved you can use this in combat to enslave and lobotomize your enemies");
        addLine("knife - costs 1 Willpower, good weapon for combat");
        addLine("rifle - costs 20 Willpower, amazing weapon for combat, costs 1 Willpower to fire each time");
        addLine("firewood - costs 1 Willpower, can be used to build crafts");
        addLine("Your Willpower: " + wp);
        addLine("Type the name of the item you wish to buy below.");
        calcMode = 14;
      }, 10);
    }

    else if (manhatten === "sell") {
      setTimeout(function () {
        addLine("Your items: " + String(stor));
        addLine("Type the name of the item you wish to sell.");
        calcMode = 15;
      }, 10);
    }

    else if (manhatten === "leave") {
      setTimeout(function () {
        addLine("You leave the Settlement.");
        calcMode = 3;
      }, 10);
    }

    else {
      setTimeout(function () {
        addLine("That's not a command you can use here.");
      }, 10);
    }
  }

  else if (calcMode === 11) {
    if (manhatten === "scav") {
      let randScav = Math.floor(Math.random() * 5);
      let scavRand = Math.floor(Math.random() * 20);

      switch (randScav) {
        case 0: 
        case 1:
        case 2:
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
        case 3:
          // Do nothing
          setTimeout(function () {
            addLine("There's nothing here.");
          }, 10);
          break;
        case 4:
          // Do nothing
          setTimeout(function () {
            addLine("There's nothing here.");
          }, 10);
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

  else if (calcMode === 12) {
    addLine("");
    cleanText(cmdReq.value);
  }

  else if (calcMode === 13) {
    addLine("");
    cleanText(cmdReq.value);

    if (manhatten === "1") {
      setTimeout(function () {
        addLine("There are Academies almost everywhere in the Suburbs. They provide safety for the various students I have.");
        addLine("I can't talk anymore, I have work to do.");
        calcMode = 3;
      }, 10);
    }

    else if (manhatten === "2") {
      setTimeout(function () {
        addLine("It...pains me to speak. Please, just take these books.");
        addLine("I can't talk anymore, the pain is too much.");
        addLine("Recieved books.");
        stor.push("facbook");
        calcMode = 3;
      }, 10);
    }

    else if (manhatten === "3") {
      setTimeout(function () {
        addLine("They create the creatures that serve as distractions from the true locations of our Academies.");

        if (acadRep > 150) {
          addLine("Here, have some. They'll help you.");
          addLine("Recieved nanobots.");
          stor.push("nanobot");
        }
        addLine("Now, leave..I must rest.");
        calcMode = 3;
      }, 10);
    }

    else {
      setTimeout(function () {
        addLine("All right then."); 
        calcMode = 3;
      }, 10);
    }
  }

  else if (calcMode === 14) {
    addLine("");
    cleanText(cmdReq.value);

    function checkBal (cost, sitem) {
      if (wp < cost) {
        setTimeout(function () {
          addLine("You don't have enough Willpower.");
        }, 10);
      }

      else {
        setTimeout(function () {
          addLine("Recieved " + sitem + ".");
        }, 10);

        wp -= cost;
        stor.push(sitem);
      }
    }

    function checkMul () {
      setTimeout(function () {
        addLine("How much of this item do you wish to buy?"); // Nevermind
      }, 10);
    }

    switch (encounterType) {
      case 9:
        if (manhatten === "icepick") {
          checkBal(2, "icepick");
        }

        else if (manhatten === "beans") {
          checkBal(1, "beans");
        }

        else if (manhatten === "powder") {
          checkBal(3, "powder");
        }

        else {
          setTimeout(function () {
            addLine("Sorry, we don't sell that item here.");
          }, 10);
        }
        
        calcMode = 6;
        setTimeout(function () {
          addLine("You have finished buying.");
        }, 10);
        break;
      case 10:
        if (manhatten === "knife") {
          checkBal(1, "knife");
        }

        else if (manhatten === "beans") {
          checkBal(1, "beans");
        }

        else if (manhatten === "cloth") {
          checkBal(1, "cloth");
        }

        else if (manhatten === "lighter") {
          checkBal(2, "lighter");
        }

        else {
          setTimeout(function () {
            addLine("Sorry, we don't sell that item here.");
          }, 10);
        }
        
        calcMode = 8;
        setTimeout(function () {
          addLine("You have finished buying.");
        }, 10);
        break;
      case 11:
        if (manhatten === "icepick") {
          checkBal(2, "icepick");
        }

        else if (manhatten === "knife") {
          checkBal(1, "knife");
        }

        else if (manhatten === "rifle") {
          checkBal(20, "rifle");
        }

        else if (manhatten === "firewood") {
          checkBal(1, "firewood");
        }

        else {
          setTimeout(function () {
            addLine("Sorry, we don't sell that item here.");
          }, 10);
        }
        
        calcMode = 9;
        setTimeout(function () {
          addLine("You have finished buying.");
        }, 10);
        break;
      case 12:
        if (manhatten === "solar") {
          checkBal(3, "solar");
        }

        else if (manhatten === "metal") {
          checkBal(1, "metal");
        }

        else if (manhatten === "string") {
          checkBal(1, "string");
        }

        else {
          setTimeout(function () {
            addLine("Sorry, we don't sell that item here.");
          }, 10);
        }
        
        calcMode = 10;
        setTimeout(function () {
          addLine("You have finished buying.");
        }, 10);
        break;
    }
  }

  else if (calcMode === 15) {
    addLine("");
    cleanText(cmdReq.value);

    function removeItemOnce (arr, value) {
      let index = arr.indexOf(value);
      if (index > -1) {
        arr.splice(index, 1);
      }
      return arr;
    }

    function balSell (cost, sitem) {
      if (sitem === "" || sitem === null || sitem === undefined) {
        setTimeout(function () {
          addLine("You can't sell thin air...");
        }, 10);
        return false;
      }
      
      if (String(stor).includes(sitem)) {
        setTimeout(function () {
          addLine("Successfully sold " + sitem + ".");
          addLine("You have finished selling."); 
        }, 10);
        wp += cost;
        stor = removeItemOnce(stor, sitem);
        switch (encounterType) {
          case 9:
            calcMode = 6;
            break;
          case 10:
            calcMode = 8;
            break;
          case 11:
            calcMode = 9;
            break;
          case 12:
            calcMode = 10;
            break;
        }
      }

      else {
        setTimeout(function () {
          addLine("You don't have that item in storage.");
        }, 10);
      }
    }

    if (manhatten === "knife") {
      balSell(1, "knife");
    }

    else if (manhatten === "cloth") {
      balSell(1, "cloth");
    }

    else if (manhatten === "icepick") {
      balSell(2, "icepick");
    }

    else if (manhatten === "beans") {
      balSell(1, "beans");
    }

    else if (manhatten === "powder") {
      balSell(3, "powder");
    }

    else if (manhatten === "metal") {
      balSell(2, "metal");
    }

    else if (manhatten === "solar") {
      balSell(3, "solar");
    }

    else if (manhatten === "string") {
      balSell(1, "string");
    }

    else if (manhatten === "lighter") {
      balSell(2, "lighter");
    }

    else if (manhatten === "firewood") {
      balSell(1, "firewood");
    }

    else if (manhatten === "rifle") {
      balSell(20, "rifle");
    }

    else if (manhatten === "nanobot") {
      balSell(50, "nanobot");
    }

    else if (manhatten === "leave") {
      switch (encounterType) {
        case 9:
          setTimeout(function () {
            addLine("You have finished selling.");
          }, 10);
          calcMode = 6;
          break;
        case 10:
          setTimeout(function () {
            addLine("You have finished selling.");
          }, 10);
          calcMode = 8;
          break;
        case 11:
          setTimeout(function () {
            addLine("You have finished selling.");
          }, 10);
          calcMode = 9;
          break;
        case 12:
          setTimeout(function () {
            addLine("You have finished selling.");
          }, 10);
          calcMode = 10;
          break;
      }
    }

    else {
      setTimeout(function () {
        addLine("That item doesn't exist yet for you to sell.");
      }, 10);
    }
  }

  else if (calcMode === 16) {
    function checkWeapon () {
      if (String(stor).includes("rifle")) {
        if (wp > 5) {
          currentWeapon = "rifle";
        }

        else {
          if (String(stor).includes("icepick")) {
            currentWeapon = "icepick";
          }

          else {
            if (String(stor).includes("knife")) {
              currentWeapon = "knife";
            }

            else {
              currentWeapon = "none";
            }
          }
        }
      }

      else {
        if (String(stor).includes("icepick")) {
          currentWeapon = "icepick";
        }

        else {
          if (String(stor).includes("knife")) {
            currentWeapon = "knife";
          }

          else {
            currentWeapon = "none";
          }
        }
      }
    }

    checkWeapon();
    
    function makeRandBatCry () {
      let randBatCry = Math.floor(Math.random() * 4);
      if (currentEnemy === "patrol") {
        switch (randBatCry) {
          case 0: 
            addLine("For Roxstrait!");
            break;
          case 1:
            addLine("Screw you!");
            break;
          case 2:
          case 3:
            break;
        }
      }

      else if (currentEnemy === "arenamen") {
        switch (randBatCry) {
          case 0:
            addLine("Ready to die?");
            break;
          case 1:
            addLine("The bosses will love this.");
            break; 
          case 2:
          case 3: 
            break;
        }
      }

      else if (currentEnemy === "khan") {
        switch (randBatCry) {
          case 0:
            addLine("I don't want to have to do this...");
            break;
          case 1:
            addLine("Damn you.");
            break;
        }     
      }

      else if (currentEnemy === "kids") {
        switch (randBatCry) {
          case 0:
            addLine("EEEEEEEEEEEEEE!!");
            break;
          case 1:
            addLine("AAAAAA!!");
            break;
        }
      }
    }

    if (manhatten === "attack") {
      if (currentWeapon === "none") {
        let randHitChance = Math.floor(Math.random() * 5);

        switch (randHitChance) {
          case 0:
          case 1:
          case 2:
          case 3:
            enemyWillpower -= 1;
            addLine("Enemy was attacked and lost 1 Willpower.");
            break;
          case 4:
            addLine("Your attack missed.");
            break;
        }
      }

      else if (currentWeapon === "knife") {
        let randHitChance = Math.floor(Math.random() * 6);

        switch (randHitChance) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
            enemyWillpower -= 2;
            addLine("Enemy was attacked and lost 2 Willpower.");
            break; 
          case 5: 
            addLine("Your attack missed.");
            break;
        }
      } 

      else if (currentWeapon === "icepick") {
        let randHitChance = Math.floor(Math.random() * 7); 

        switch (randHitChance) {
          case 0:
          case 1: 
          case 2:
          case 3:
          case 4: 
          case 5: 
            enemyWillpower -= 5;
            addLine("Enemy was attacked and lost 5 Willpower.");
            break;
          case 6:
            addLine("Your attack missed.");
            break;
        }
      }

      else if (currentWeapon === "rifle") {
        let randHitChance = Math.floor(Math.random() * 8);

        if (wp - 1 < 1) {
          addLine("You have no Willpower left to use as ammunition.");
        }

        else {
          wp -= 1;
          switch (randHitChance) {
            case 0: 
            case 1: 
            case 2: 
            case 3: 
            case 4: 
            case 5: 
            case 6: 
              enemyWillpower -= 12;
              addLine("Enemy was shot and lost 12 Willpower.");
              break; 
            case 7: 
              addLine("Your attack missed.");
              break;
          }
        }
      }

      if (enemyWillpower < 1) {
        isInCombat = false;
        setTimeout(function () {
          addLine("Your enemy has been defeated.");
          addLine("Options: LOBOT, LOOT, EAT, LEAVE");
          calcMode = 17;

          if (currentEnemy === "patrol" || currentEnemy === "set") {
            addLine("Imperial Reputation Decreased");

            if (currentEnemy === "patrol") {
              imperialRep -= 10;
            }

            else {
              imperialRep -= 20;
            }
          }

          else if (currentEnemy === "kids" || currentEnemy === "khan") {
            addLine("Academy Reputation Decreased");

            if (currentEnemy === "kids") {
              acadRep -= 12;
            }

            else {
              acadRep -= 50;
            }
          }

          else if (currentEnemy === "arena" || currentEnemy === "arenamen") {
            addLine("Arena Reputation Decreased");
            addLine("Imperial Reputation Increased");

            if (currentEnemy === "arena") {
              arenaRep -= 100;
              imperialRep += 20;
            }

            else {
              arenaRep -= 5;
              imperialRep += 4;
            }
          }
        }, 10);
      }
    }

    else if (manhatten === "block") {
      let randBlock = Math.floor(Math.random() * 14);
      enemyAtk -= randBlock;
    }

    else if (manhatten.substring(0, 4) === "item") {
      let itemUsed = manhatten.substring(5).toLowerCase();

      if (String(stor).includes(itemUsed)) {
        if (itemUsed === "beans") {
          setTimeout(function () {
            addLine("Increased Willpower by 5.");
            wp += 5;
          }, 10);
        }

        else if (itemUsed === "powder") {
          setTimeout(function () {
            addLine("Increased Willpower by 12.");
            wp += 12;
          }, 10);
        }

        else if (itemUsed === "nanobot") {
          setTimeout(function () {
            addLine("Increased Willpower by 25!");
            wp += 25;
          }, 10);
        }

        else {
          setTimeout(function () {
            addLine("You can't use that item in combat.");
          }, 10);
        }
      }

      else {
        setTimeout(function () {
          addLine("You don't have that item.");
        }, 10);
      }
    }

    else {
      setTimeout(function () {
        addLine("You can't use that command here.");
      }, 10);
    }
  }

  else if (calcMode === 17) {
    if (manhatten === "lobot") {
      if (String(stor).includes("icepick")) {
        setTimeout(function () {
          if (currentEnemy === "city" || currentEnemy === "arena" || currentEnemy === "set" || currentEnemy === "ware") {
            addLine("You now have several newly lobotomized slaves.");
            slaves += 12;
          }

          else {
            addLine("You now have a lobotomized slave. The rest did not survive the procedure.");
            slaves += 1;
          }
        }, 10);
      }

      else {
        setTimeout(function () {
          addLine("You don't have an icepick in storage.");
        }, 10);
      }
    }

    else if (manhatten === "loot") {
      let randItem = Math.floor(Math.random() * 6);

      if (isAlreadyLooted === false) {
        switch (randItem) {
          case 0:
            setTimeout(function () {
              addLine("Found some wood.");
              stor.push("firewood");
            }, 10);
            break;
          case 1:
            setTimeout(function () {
              addLine("Found a lighter.");
              stor.push("lighter");
            }, 10);
            break;
          case 2:
            setTimeout(function () {
              addLine("Found a knife.");
              stor.push("knife");
            }, 10);
            break;
        }
        isAlreadyLooted = true;
      }

      else {
        setTimeout(function () {
          addLine("There's no loot left.");
        }, 10);
      }
    }

    else if (manhatten === "eat") {
      if (hasEaten === true) {
        setTimeout(function () {
          addLine("You have already devoured that flesh.");
        }, 10);
      }

      else {
        setTimeout(function () {
          if (currentEnemy === "city" || currentEnemy === "arena" || currentEnemy === "set" || currentEnemy === "ware") {
            addLine("You begin to eat the fresh corpses of the settlement.");
            addLine("Gained 12 Willpower.");
            wp += 12;
          }

          else {
            addLine("You eat the fallen corpse.");
            addLine("Gained 1 Willpower.");
            wp += 1;
          }
        }, 10);
        hasEaten = true;
      }
    }

    else if (manhatten === "leave") {
      setTimeout(function () {
        isEnt = false;
        isTherePeople = false;
        specialEncounter = false;
        
        if (currentEnemy === "city") {
          addLine("You leave the ruined city, its embers burning behind you.");
        }

        else if (currentEnemy === "arena") {
          addLine("The arena crumbles into cement-like dust.");
        }

        else if (currentEnemy === "set") {
          addLine("The settlement is ruined, forever.");
        }

        else if (currentEnemy === "ware") {
          addLine("The warehouse's goods turn into slime and slop. Nothing more.");
        }

        else {
          addLine("You leave the desecrated bodies behind.");
        }
      }, 10);
      calcMode = 3;
    }

    else {
      setTimeout(function () {
        addLine("You can't use that command here.");
      }, 10);
    }
  }

  else if (calcMode === 18) {
    if (manhatten === "1") {
      switch (encounterType) {
        case 9: 
          setTimeout(function () {
            if (wp > 64) {
              addLine("<i>The Arenamen turn and run, screaming all the while. The Arena is yours.</i>");
              addLine("Arena Reputation decreased.");
              if (isOnline === true) {
                fetch ("/getarr")
                .then(response => response.text())
                .then(data => {
                  let datSplit = data.split("-;");
                  let arr1 = JSON.parse(datSplit[0]);
                  let arr2 = JSON.parse(datSplit[1]);

                  arr1.push(frequency);
                  arr2.push("arena");

                  fetch ("/getarr", {
                    method : "POST",
                    headers : {
                      "Content-Type" : "application/json"
                    }, 
                    body : JSON.stringify({
                      ax : arr1, 
                      ay : arr2
                    })
                  })
                  .then(response => response.text())
                  .then(data => {
                    console.log(data);
                  })
                  .catch(error => {
                    console.log(error);
                  });
                })
                .catch(error => {
                  console.log(error);
                });
              }

              else {
                locationTypes.push("arena");
                savedLocations.push(frequency);
              }
              itemSaved.push("");
            }

            else {
              buildNum = 3;
              addLine("Nah..you know what, beat it!");
              calcMode = 3;
            }
          }, 10);
          break;
        case 10: 
          setTimeout(function () {
            if (wp > 69) {
              addLine("<i>The Council of Hosts put up a small fight, but it is fairly easy to take the City as your own.</i>");
              if (isOnline === true) {
                fetch ("/getarr")
                .then(response => response.text())
                .then(data => {
                  let datSplit = data.split("-;");
                  let arr1 = JSON.parse(datSplit[0]);
                  let arr2 = JSON.parse(datSplit[1]);

                  arr1.push(frequency);
                  arr2.push("city");

                  fetch ("/getarr", {
                    method : "POST",
                    headers : {
                      "Content-Type" : "application/json"
                    }, 
                    body : JSON.stringify({
                      ax : arr1, 
                      ay : arr2
                    })
                  })
                  .then(response => response.text())
                  .then(data => {
                    console.log(data);
                  })
                  .catch(error => {
                    console.log(error);
                  });
                })
                .catch(error => {
                  console.log(error);
                });
              }

              else {
                locationTypes.push("city");
                savedLocations.push(frequency);
              }
              itemSaved.push("");
              calcMode = 3;
            }

            else {
              addLine("<i>The Council of Hosts transport you out of the city.</i>");
              calcMode = 3;
            }
          }, 10);
          break;
        case 11: 
          setTimeout(function () {
            if (wp > 74) {
              addLine("<i>Although the Imperial Overseer's might was great, yours proved to be much greater. The Settlement is now yours.</i>");
              if (isOnline === true) {
                fetch ("/getarr")
                .then(response => response.text())
                .then(data => {
                  let datSplit = data.split("-;");
                  let arr1 = JSON.parse(datSplit[0]);
                  let arr2 = JSON.parse(datSplit[1]);

                  arr1.push(frequency);
                  arr2.push("set");

                  fetch ("/getarr", {
                    method : "POST",
                    headers : {
                      "Content-Type" : "application/json"
                    }, 
                    body : JSON.stringify({
                      ax : arr1, 
                      ay : arr2
                    })
                  })
                  .then(response => response.text())
                  .then(data => {
                    console.log(data);
                  })
                  .catch(error => {
                    console.log(error);
                  });
                })
                .catch(error => {
                  console.log(error);
                });
              }

              else {
                locationTypes.push("set");
                savedLocations.push(frequency);
              }
              itemSaved.push("");
              calcMode = 3;
            }

            else {
              addLine("<i>The Imperial Overseer kicks you out of the Settlement.</i>");
              calcMode = 3;
            }
          }, 10);
        case 12:
          setTimeout(function () {
            if (wp > 34) {
              addLine("<i>The Mayor gives you the keys to his house, the Warehouse, and his fridge.</i>");
              if (isOnline === true) {
                fetch ("/getarr")
                .then(response => response.text())
                .then(data => {
                  let datSplit = data.split("-;");
                  let arr1 = JSON.parse(datSplit[0]);
                  let arr2 = JSON.parse(datSplit[1]);

                  arr1.push(frequency);
                  arr2.push("ware");

                  fetch ("/getarr", {
                    method : "POST",
                    headers : {
                      "Content-Type" : "application/json"
                    }, 
                    body : JSON.stringify({
                      ax : arr1, 
                      ay : arr2
                    })
                  })
                  .then(response => response.text())
                  .then(data => {
                    console.log(data);
                  })
                  .catch(error => {
                    console.log(error);
                  });
                })
                .catch(error => {
                  console.log(error);
                });
              }

              else {
                locationTypes.push("ware");
                savedLocations.push(frequency);
              }
              itemSaved.push("");
              calcMode = 3;
            }

            else {
              addLine("<i>The Mayor calls his security guards to throw you out of the Warehouse.</i>"); 
              calcMode = 3;
            }
          }, 10);
          break;
      }
    }
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
    console.log(error);
  })
}, 500);

setInterval(function () {
  if (isOnline === false) {
    // Do absolutely nothing.
  }

  else {
    fetch ("/getarr")
    .then(response => response.text())
    .then(data => {
      let datSplit = data.split("-;");
      let arr1 = JSON.parse(datSplit[0]);
      let arr2 = JSON.parse(datSplit[1]);

      // console.log("running");
      // console.log(arr1);
      // console.log(arr2);

      savedLocations = arr1;
      locationTypes = arr2;
    })
    .catch(error => {
      console.log(error);
    });
  }
}, 50);

setTimeout(function () {
  loadScreen();
}, 1000);