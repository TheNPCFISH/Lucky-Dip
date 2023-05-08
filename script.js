function Addname() {
  const newName = document.getElementById("text").value;
  const nameArea = document.getElementById("namearea");
  const newDivString =
    '<div class="name" onclick="disableName(event)">' + String(newName) +
    '<button onclick="deleteName(event)" id="x">X</button></div>';
  nameArea.innerHTML += newDivString;
  document.getElementById("text").value = "";
}

function disableName(event) {
  const nameToDisable = event.target;
  if (!nameToDisable.classList.contains("disabled")) {
    nameToDisable.classList.add("disabled");
  } else {
    nameToDisable.classList.remove("disabled");
  }
}

function chooseWinner() {
  const names = document.querySelectorAll(".name");
  const remainingNames = [...names].filter(name => !name.classList.contains("disabled"));
  const winnerIndex = Math.floor(Math.random() * remainingNames.length);
  const enabledNames = remainingNames.filter(name => !name.classList.contains("disabled"));
  const disabledNames = [...names].filter(name => name.classList.contains("disabled"));
  let delay = 1000; // delay in milliseconds
  disabledNames.forEach(name => {
    setTimeout(() => {
      name.classList.add("hide");
    }, delay);
    delay += 1000; // increase delay for next name
  });
  setTimeout(() => {
    enabledNames.forEach((name, index) => {
      if (index !== winnerIndex) {
        setTimeout(() => {
          name.classList.add("hide");
        }, delay);
        delay += 1000; // increase delay for next name
      } else {
        setTimeout(() => {
          name.classList.add("winner");
        }, delay);
      }
    });
  }, delay);
  setTimeout(() => {
    names.forEach(name => {
      name.classList.remove("winner", "hide", "disabled");
      name.classList.add("name");
    });
  }, delay + 5000); // reset after winner is shown for 5 seconds
}

function deleteName(event) {
  const divToRemove = event.target.parentNode;
  divToRemove.remove();
}

function addDeleteListeners() {
  const deleteButtons = document.querySelectorAll("#x");
  deleteButtons.forEach(button => {
    button.addEventListener("click", deleteName);
  });
}

var input = document.getElementById("text");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add").click();
  }
});
