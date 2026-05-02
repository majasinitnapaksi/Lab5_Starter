// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const faceImage = document.querySelector("#explore img");
  const textToSpeak = document.getElementById("text-to-speak");
  const voiceSelect = document.getElementById("voice-select");
  const talkButton = document.querySelector("#explore button");

  let voices = [];

  function loadVoices() {
    voices = speechSynthesis.getVoices();

    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach((voice, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();

  speechSynthesis.onvoiceschanged = loadVoices;

  talkButton.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(textToSpeak.value);

    if (voiceSelect.value !== "select") {
      utterance.voice = voices[Number(voiceSelect.value)];
    }

    utterance.onstart = () => {
      faceImage.src = "assets/images/smiling-open.png";
      faceImage.alt = "Open mouthed smiling face";
    };

    utterance.onend = () => {
      faceImage.src = "assets/images/smiling.png";
      faceImage.alt = "Smiling face";
    };

    speechSynthesis.speak(utterance);
  });
}

window.addEventListener("DOMContentLoaded", init);