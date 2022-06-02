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
      indianHead.style.display = "none";
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
let isTherePeople = false;
let imperialRep = 100;
let arenaRep = 100;
let acadRep = 100;
let allyRep = 100;
let specialEncounter = false;
let currentEnemy = "";
let enemyWillpower = 0;
let currentWeapon = "none";

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

function combatEnemy (willpow, enemy) {
  if (enemy === "patrol") {
    
  }
}

const vhs = document.getElementById("vhs");

cmdForm.onsubmit = function () {
  event.preventDefault();
  indianHead.style.display = "none";
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
        addLine("use - Use an item you have in storage");
        addLine("craft - Craft an item or vehicle using items in storage");
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
        randomEncounter();
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
        addLine("Options: ATTACK, BLOCK, WEAPON, ITEM");
        switch (encounterType) {
          case 3:
            addLine("The Imperial Patrol forms a squad-like formation and prepares to defend itself.");
            break;
          case 4:
            addLine("The group of Arenamen begin to charge at you.");
            break;
          case 5:
            if (specialEncounter === true) {
              addLine("The man shakes his head and dissolves into a flurry of angry nano-bots.");
            }

            else {
              addLine("The students go their seperate paths. Some panic, whilst others prepare to defend their Academy.");
            }
            break;
          case 6:
            addLine("The stragglers, clearly unprepared for a fight, grab whatever they can.");
            break;
          case 7:
            addLine("The eyes surround you and begin to whirl.");
            break;
          case 8:
            addLine("The arms impossibly grow longer and begin to strike at you.");
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
            break;
          case 4:
            addLine("Arenaboss: Check out an arena! If you're lucky, you won't be forced to fight in one!");
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
        
      }, 10);
    }

    else if (manhatten === "dem") {
      setTimeout(function () {
        if (wp < 50) {
          addLine("Arenaman: THE BOSSES don't like you.");
        }

        else {
          addLine("Come right on in...");
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
        
      }, 10);
    }

    else if (manhatten === "dem") {
      setTimeout(function () {
        if (wp < 50) {
          addLine("City Worker: THE COUNCIL has deemed you unworthy.");
        }

        else {
          addLine("Come right on in...");
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
        
      }, 10);
    }

    else if (manhatten === "dem") {
      setTimeout(function () {
        if (wp < 50) {
          addLine("Warehouse Resident: The mayor doesn't really trust you.");
        }

        else {
          addLine("Come right on in...");
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
        
      }, 10);
    }

    else if (manhatten === "dem") {
      setTimeout(function () {
        if (wp < 50) {
          addLine("Imperial Soldier: The Overseer wants you to prove yourself first.");
        }

        else {
          addLine("Come right on in...");
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
        let randHitChance = Math.floor(Math.random() * 3);

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
    }

    else if (manhatten === "block") {
      
    }

    else if (manhatten.substring(0, 4) === "item") {
      
    }

    else {
      addLine("You can't use that command here.");
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

setTimeout(function () {
  loadScreen();
}, 1000);