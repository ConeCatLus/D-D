// Create warrior
const nameField     = document.getElementById("name");
const genderDisplay = document.getElementById("gender");
const classDisplay  = document.getElementById("class");
const raceDisplay   = document.getElementById("race");
const raceDescript  = document.getElementById("raceDescription");
const classDescript = document.getElementById("classDescription");
const addButton     = document.getElementById("addButton");
// Bottom pane
const selectQuest       = document.getElementById("quest");
const selectLocation    = document.getElementById("location");
const selectVillain     = document.getElementById("villain");
const selectRandomQuest = document.getElementById("randomQuest");

// Character creator related
raceDisplay.addEventListener("change", function () {
  const race = this.value;
  const description = races[race] ? races[race].description : "";
  document.getElementById("raceDescription").innerHTML = description;
});
classDisplay.addEventListener("change", function () {
  const className = this.value;
  const description = classes[className] ? classes[className].description : "";
  document.getElementById("classDescription").innerHTML = description;
});

addButton.addEventListener("click", function addCharacter() {
  if (genderDisplay.value === '' || raceDisplay.value === '' || classDisplay.value === '') {
    return;
  }
  let character = new Character(nameField.value, 
                                genderDisplay.value, 
                                raceDisplay.value, 
                                classDisplay.value
  );
  characters.push(character);
  updateCharacterDisplay();
  nameField.value     = '';
  genderDisplay.value = '';
  raceDisplay.value   = '';
  classDisplay.value  = '';
  classDescript.innerHTML = '';
  raceDescript.innerHTML  = '';
});

// List of warriors related
function updateCharacterDisplay() {
  let characterDisplay = '';
  for (const [index, character] of characters.entries()) {
    characterDisplay += `
        <div style="margin-bottom: 20px;">
          <h1>
            <button id="characterButton-${index}" onclick="toggleCharacterDetails(${index})">
              ${"Name: " + character.name}
            </button>
          </h1>
          <div id="characterDetails-${index}">
            <p>Race: ${character.race}</p>
            <p>Class: ${character.class}</p>
          </div>
        </div>
      `;
  }
  document.getElementById('characters').innerHTML = characterDisplay;
}

function toggleCharacterDetails(index) {
  const button = document.getElementById(`characterButton-${index}`);
  const details = document.getElementById(`characterDetails-${index}`);
  if (details.style.display === 'none') {
    details.style.display = 'block';
    details.style.borderRadius = '0px 0px 5px 5px';
    button.style.borderRadius = '5px 5px 0px 0px';
    button.innerText = `${"Name: " + characters[index].name} (hide)`;
  } else {
    details.style.display = 'none';
    button.style.borderRadius = '5px';
    button.innerText = `${"Name: " + characters[index].name}`;
  }
}
// Quest related
window.onload = function () {
  for (var i = 0; i < questOptions.length; i++) {
    var opt = questOptions[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectQuest.appendChild(el);
  }
  for (var i = 0; i < locationOptions.length; i++) {
    var opt = locationOptions[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectLocation.appendChild(el);
  }
  for (var i = 0; i < villainOptions.length; i++) {
    var opt = villainOptions[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    selectVillain.appendChild(el);
  }
}

selectRandomQuest.addEventListener("click", function randomiseQuest() {
  selectQuest.value     = questOptions[Math.floor(Math.random() * questOptions.length)];
  selectLocation.value  = locationOptions[Math.floor(Math.random() * locationOptions.length)];
  selectVillain.value   = villainOptions[Math.floor(Math.random() * villainOptions.length)];
});

document.getElementById("startGame").addEventListener("click", function () {
  if (characters.length > 0 && selectQuest.value != '' && selectLocation.value != '' && selectVillain.value != 0) {
    sessionStorage.setItem("characters", JSON.stringify(characters));
    sessionStorage.setItem("quest", JSON.stringify(selectQuest.value));
    sessionStorage.setItem("location", JSON.stringify(selectLocation.value));
    sessionStorage.setItem("villain", JSON.stringify(selectVillain.value));
    window.open("../HTML/GamePage.html", "_self");
  }
});

const questOptions = [
  "Rescue mission",
  "Assassination plot",
  "Heist",
  "Artifact retrieval",
  "Monster slaying",
  "Diplomatic mission",
  "Exploration",
  "Revenge plot",
  "Political intrigue",
  "Catastrophe prevention",
  "Escape from danger",
  "Ancient mystery",
  "Betrayal",
  "Rivalry",
  "Cultural exchange",
  "Rebellion",
  "Religious pilgrimage",
  "Disaster relief",
  "Espionage",
  "Festival",
];
const locationOptions = [
  "Cave system",
  "Mountain range",
  "Forest",
  "Swamp",
  "Ocean",
  "Ruins",
  "City",
  "Desert",
  "Jungle",
  "Underwater city",
  "Space station",
  "Alternate dimension",
  "Haunted house",
  "Mythical realm",
];
const villainOptions = [
  "Evil wizard",
  "Dragon",
  "Goblin king",
  "Undead warlord",
  "Vampire lord",
  "Cult leader",
  "Demon prince",
  "Dark knight",
  "Mad scientist",
  "Warrior queen",
  "Tyrant king",
  "Criminal mastermind",
  "Corrupt politician",
  "Giant",
  "Troll",
  "Ogre",
  "Behemoth",
  "Minotaur",
  "Medusa",
  "Kraken",
];