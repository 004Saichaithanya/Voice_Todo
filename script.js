const startBtn = document.getElementById("start-btn");
const todoList = document.getElementById("todo-list");

// Check for SpeechRecognition support
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert("Sorry, your browser does not support Speech Recognition.");
}

const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.interimResults = false;

// When recognition result is available
recognition.onresult = function(event) {
  const spokenText = event.results[0][0].transcript;
  addTask(spokenText);
};

// Start recognition on button click
startBtn.addEventListener("click", () => {
  recognition.start();
});

// Function to add task to the list
function addTask(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  // Click to mark as completed
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  todoList.appendChild(li);
}
