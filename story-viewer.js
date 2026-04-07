fetch("data.json")
  .then(res => res.json())
  .then(data => {

    let storyKey = localStorage.getItem("currentStory");
    let story = data.stories[storyKey];

    let container = document.getElementById("storyContainer");
    let currentWord = "";

    story.content.forEach(item => {
      let span = document.createElement("span");
span.innerText = item.word;
span.classList.add("word");

      span.onclick = (e) => {
  currentWord = item.word;

  document.querySelectorAll(".word").forEach(w => w.classList.remove("active"));
  span.classList.add("active");

  let popup = document.getElementById("popup");

  document.getElementById("popupWord").innerText = item.word;
  document.getElementById("popupMeaning").innerText = item.meaning;
  document.getElementById("popupPinyin").innerText = item.pinyin;

  popup.style.display = "block";
  popup.style.top = e.clientY + "px";
  popup.style.left = e.clientX + "px";
};

      container.appendChild(span);
    });

    // 🔊 AUDIO FUNCTION
    window.playSound = function () {
      let file = encodeURIComponent(currentWord);
      let audio = new Audio(`audio/${file}.mp3`);
      audio.play();
    };

  });

function goBack() {
  window.history.back();
}