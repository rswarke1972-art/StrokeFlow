let data = {};
let level = localStorage.getItem("level");

fetch("data.json")
  .then(res => res.json())
  .then(json => {
    data = json;
    loadCharacters();
  });

function loadCharacters() {
  let listDiv = document.getElementById("characterList");

  data[level].forEach(charObj => {
    let btn = document.createElement("button");
    btn.innerText = charObj.char;

    btn.onclick = () => {
      localStorage.setItem("character", JSON.stringify(charObj));
      window.location.href = "viewer.html";
    };

    listDiv.appendChild(btn);
  });
}

function goBack() {
  window.history.back();
}