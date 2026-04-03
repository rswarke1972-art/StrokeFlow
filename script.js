

function nextStroke() {
  if (current < strokes.length) {
    strokes[current].style.strokeDashoffset = 0;
    current++;
  }
}

let data = {};
let strokes = [];
let current = 0;

fetch("data.json")
  .then(res => res.json())
  .then(json => data = json);

document.getElementById("levelSelect").addEventListener("change", function() {
  let level = this.value;
  let listDiv = document.getElementById("characterList");
  listDiv.innerHTML = "";

  data[level].forEach(charObj => {
    let btn = document.createElement("button");
    btn.innerText = charObj.char;
    
    btn.onclick = () => loadCharacter(charObj);

    listDiv.appendChild(btn);
  });
});

function loadCharacter(charObj) {
  document.getElementById("charDisplay").innerText = charObj.char;
  document.getElementById("pinyinDisplay").innerText = charObj.pinyin;

  let svg = document.getElementById("character");
  svg.innerHTML = "";

  strokes = [];
  current = 0;

  charObj.strokes.forEach(pathData => {
    let path = document.createElementNS("http://www.w3.org/2000/svg", "path");

    path.setAttribute("d", pathData);
    path.setAttribute("class", "stroke");

    svg.appendChild(path);
    strokes.push(path);
  });
}

function nextStroke() {
  if (current < strokes.length) {
    strokes[current].style.strokeDashoffset = 0;
    current++;
  }
}