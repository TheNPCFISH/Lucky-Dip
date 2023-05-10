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
  const add = document.getElementById("add")
  add.disabled = true;
  const remainingNames = [...names];
  const disabledNames = document.querySelectorAll(".disabled");
  disabledNames.forEach(name => {
    name.classList.add("hide");
  });

  if (names.length === 0) {
    alert("No names to choose from!");
    return;
  }

  let delay = 1000; // delay in milliseconds
  const winnerIndex = Math.floor(Math.random() * names.length);
  const winnerName = names[winnerIndex];
  winnerName.classList.add("winner");
  remainingNames.splice(winnerIndex, 1);

  while (remainingNames.length > 0) {
    const randomIndex = Math.floor(Math.random() * remainingNames.length);
    const nameToRemove = remainingNames[randomIndex];
    setTimeout(() => {
      nameToRemove.classList.add("hide");
    }, delay);
    delay += 1250; // increase delay for next name
    remainingNames.splice(randomIndex, 1);
  }
var elements = document.getElementsByClassName("winner");
  const checkbox = document.getElementById('check');

// Check if the checkbox is checked
if (checkbox.checked) {
  console.log('Auto-Disable');
  for (var i = 0; i < elements.length; i++) {
  elements[i].classList.add("disabled");
}
} else {
  console.log('No Auto-Disable');
}

  setTimeout(() => {
    winnerName.classList.remove("winner");
    disabledNames.forEach(name => {
      name.classList.remove("hide");
    });
    names.forEach(name => {
      name.classList.remove("hide", "disabled");
      name.classList.add("name");
    });
  }, delay + 5000); // reset after winner is shown for 1 second
  // Get the checkbox element

  add.disabled = false;
}

function deleteName(event) {
  const divToRemove = event.target.parentNode;
  divToRemove.classList.add("remove");
  setTimeout(() => {
      divToRemove.remove();
    }, 1000);
}

var input = document.getElementById("text");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add").click();
  }
});
