let allCharacters = [];

async function loadData() {
  let res = await fetch("data.json");
  let data = await res.json();

  allCharacters = [
    ...data.hsk1,
    ...data.hsk2,
    ...data.hsk3
  ];
}

function search() {
  let query = document.getElementById("searchInput").value.toLowerCase();
  let resultsDiv = document.getElementById("results");

  resultsDiv.innerHTML = "";

  let results = allCharacters.filter(char =>
    char.meaning.toLowerCase().includes(query)
  );

  if (results.length === 0) {
    resultsDiv.innerHTML = "<p>No results found</p>";
    return;
  }

  results.forEach(char => {
    let div = document.createElement("div");

    div.innerHTML = `
      <h2>${char.char}</h2>
      <p>${char.pinyin}</p>
      <p>${char.meaning}</p>
    `;

    resultsDiv.appendChild(div);
  });
}

function goBack() {
  window.history.back();
}

loadData();