function Addname() {
 const newName = document
  .getElementById("text").value;
 const nameArea = document
  .getElementById("namearea");
 const newDivString =
  '<div class="name">' + String(newName) +
  '<button onclick="deleteName(event)" id="x">X</button></div>';
 nameArea.innerHTML += newDivString;
 document.getElementById("text").value = "";
}

function deleteName(event) {
 const divToRemove = event.target
  .parentNode;
 divToRemove.remove();
}

function addDeleteListeners() {
 const deleteButtons = document
  .querySelectorAll("#x");
 deleteButtons.forEach(button => {
  button.addEventListener("click",
   deleteName);
 });
}
addDeleteListeners();

function chooseWinner() {
 const names = document
  .querySelectorAll(".name");
 const winnerIndex = Math.floor(Math
  .random() * names.length);
 names.forEach((name, index) => {
  if (index !== winnerIndex) {
   name.classList.add("hide");
  } else {
   name.classList.add("winner");
  }
 });
 setTimeout(() => {
  names.forEach(name => {
   name.classList.remove("winner",
    "hide");
   name.classList.add("name");
  });
 }, 5000);
}
