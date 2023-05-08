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
function Addname() {
  const newName = document.getElementById("text").value;
  const nameArea = document.getElementById("namearea");
  const newDivString =
    '<div class="name">' +
    String(newName) +
    '<button onclick="deleteName(event)" class="delete">X</button></div>';
  nameArea.innerHTML += newDivString;
  document.getElementById("text").value = "";
  addClickListeners();
}

function deleteName(event) {
  const divToRemove = event.target.parentNode;
  divToRemove.remove();
}

function addClickListeners() {
  const nameElements = document.querySelectorAll(".name");
  nameElements.forEach(nameElement => {
    nameElement.addEventListener("click", event => {
      event.target.classList.toggle("disabled");
    });
  });
}

function chooseWinner() {
  const names = document.querySelectorAll(".name");
  const disabledNames = document.querySelectorAll(".name.disabled");
  const winnerIndex = Math.floor(Math.random() * names.length);
  let remainingNames = [...names];
  let delay = 1000; // delay in milliseconds

  // Hide disabled names first
  disabledNames.forEach(disabledName => {
    setTimeout(() => {
      disabledName.classList.add("hide");
    }, delay);
    delay += 1000;
  });

  // Hide non-disabled names one by one
  while (remainingNames.length > 1) {
    const randomIndex = Math.floor(Math.random() * remainingNames.length);
    const nameToRemove = remainingNames[randomIndex];
    if (nameToRemove !== names[winnerIndex] && !nameToRemove.classList.contains("disabled")) {
      setTimeout(() => {
        nameToRemove.classList.add("hide");
      }, delay);
      delay += 1000; // increase delay for next name
    }
    remainingNames = remainingNames.filter(name => name !== nameToRemove);
  }

  // Show winner
  setTimeout(() => {
    names[winnerIndex].classList.add("winner");
  }, delay);

  // Hide last name after winner is shown
  setTimeout(() => {
    remainingNames[0].classList.add("hide");
  }, delay + 1000);

  // Reset after winner is shown for 5 seconds
  setTimeout(() => {
    names.forEach(name => {
      name.classList.remove("winner", "hide");
      name.classList.add("name");
    });
  }, 5000);
}

var input = document.getElementById("text");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add").click();
  }
});

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
