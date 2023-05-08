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
  const names = document.querySelectorAll(".name:not(.disabled)"); // only select names that are not disabled
  const winnerIndex = Math.floor(Math.random() * names.length);
  let remainingNames = [...names];
  let delay = 1000; // delay in milliseconds

  // hide all disabled names
  const disabledNames = document.querySelectorAll(".disabled");
  disabledNames.forEach(name => {
    setTimeout(() => {
      name.classList.add("hide");
    }, delay);
    delay += 1000; // increase delay for next name
  });

  while (remainingNames.length > 1) {
    const randomIndex = Math.floor(Math.random() * remainingNames.length);
    const nameToRemove = remainingNames[randomIndex];
    setTimeout(() => {
      nameToRemove.classList.add("hide");
    }, delay);
    delay += 1000; // increase delay for next name
    remainingNames = remainingNames.filter(name => name !== nameToRemove);
  }
  setTimeout(() => {
    names[winnerIndex].classList.add("winner");
  }, delay);
  setTimeout(() => {
    remainingNames[0].classList.add("hide");
  }, delay + 1000); // hide last name after winner is shown
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
