const characters = JSON.parse(sessionStorage.getItem("characters"));
const chosenQuestType = JSON.parse(sessionStorage.getItem("quest"));
const chosenLocation = JSON.parse(sessionStorage.getItem("location"));
const chosenVillain = JSON.parse(sessionStorage.getItem("villain"));

const characterContainer = document.getElementById("characters");
const input = document.getElementById('game-input');
const gameLogBody = document.querySelector('.game-log');
const gameLogInput = document.querySelector('.game-log-input input');

updateCharacterDisplay();

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

// Input pane
window.onload = function () {
  const questDescription = `Your party has been hired to embark on a ${chosenQuestType} to ${chosenLocation}, where you will face off against the infamous ${chosenVillain}. Do you have what it takes to complete the quest? (Yes/No)`;
  appendText(questDescription)
}

function appendText (text) {
  const command = document.createElement('p');
  command.textContent = text;
  gameLogBody.appendChild(command);
  gameLogBody.appendChild(command);
}

const handleInput = (event) => {
    if (event.key === 'Enter') {
        const inputText = '>> ' + gameLogInput.value; // Replace >> with the players name
        gameLogInput.value = '';
        const command = document.createElement('p');
        command.textContent = inputText;
        gameLogBody.appendChild(command);
        appendText(generateResponse(prompt));
    }
};

gameLogInput.addEventListener('keydown', handleInput);
