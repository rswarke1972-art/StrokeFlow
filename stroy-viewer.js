fetch("data.json")
  .then(res => res.json())
  .then(data => {

    let storyKey = localStorage.getItem("currentStory");
    let story = data.stories[storyKey];

    let container = document.getElementById("storyText");
    let currentWord = "";

    story.content.forEach(item => {
      let span = document.createElement("span");
      span.innerText = item.word + " ";

      span.onclick = () => {
        currentWord = item.word;

        document.getElementById("popupWord").innerText = item.word;
        document.getElementById("popupMeaning").innerText = item.meaning;
        document.getElementById("popupPinyin").innerText = item.pinyin;

        document.getElementById("popup").classList.remove("hidden");
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