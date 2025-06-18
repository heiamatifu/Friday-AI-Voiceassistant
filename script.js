
const output = document.getElementById("output");
const micButton = document.getElementById("micButton");
const creatorButton = document.getElementById("creatorButton");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";

micButton.onclick = () => {
  output.textContent = "Listening...";
  recognition.start();
};

recognition.onresult = (event) => {
  const userInput = event.results[0][0].transcript.toLowerCase();
  output.textContent = "You said: " + userInput;
  handleCommand(userInput);
};

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

function handleCommand(input) {
  let response = "";

  if (input.includes("who made you") || input.includes("creator")) {
    response = "I was created by Mohd Atif Idrisi, a passionate freelance software developer.";
  } else if (input.includes("hello") || input.includes("hi") || input.includes("how are you")) {
    response = "Hello! I’m doing great. How can I assist you today?";
  } else if (input.includes("joke")) {
    response = "Why don’t scientists trust atoms? Because they make up everything!";
  } else if (input.includes("what can you do")) {
    response = "I can answer your questions, tell jokes, give recipes, translate, and much more.";
  } else if (input.includes("friday") && input.includes("weather")) {
    response = "Please specify a city to check the weather.";
  } else {
    response = "I'm still learning! Try asking about my creator, a joke, or say hello.";
  }

  output.textContent = response;
  speak(response);
}

creatorButton.onclick = () => {
  const creatorMsg = "You can reach Atif at atifidrisi121@gmail.com or on LinkedIn at linkedin.com/in/atif-idrisi-a7672736b";
  output.textContent = creatorMsg;
  speak(creatorMsg);
};
