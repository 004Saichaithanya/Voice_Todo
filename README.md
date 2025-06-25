# 🎙️ Voice-Based To-Do List

A simple, accessible web application that allows users to add items to a to-do list using their **voice**. It utilizes the **Web Speech API** in JavaScript to convert spoken words into text, automatically adding them as task items in a dynamic list. Users can also mark tasks as completed.

---

## 📌 Features

* 🎤 Voice-to-text task entry using browser's speech recognition.
* 📝 Dynamic task list with add and complete functionalities.
* 🎨 Clean, dark-themed user interface.
* ✅ Click to mark tasks as completed (line-through effect).
* 📱 Runs entirely in your browser — no server setup needed.

---

## 📖 Approach

The project uses the **Web Speech API's SpeechRecognition interface** to listen for voice input. Once the user speaks, the recognized text is converted to a string and dynamically appended as a new item in the to-do list. Tasks can be clicked to mark them as completed. This provides an accessible and hands-free way to manage task lists.

---

## 📦 Libraries & Technologies Used

* **HTML5** — structure.
* **CSS3** — styling and theme.
* **JavaScript (Web Speech API)** — speech recognition and dynamic list manipulation.

> No external libraries or frameworks are used — it's all native web APIs.

---

## 🚀 How to Run

1. 📥 Download or clone this repository:

   ```bash
   git clone https://github.com/004Saichaithanya/Voice_Todo.git
   ```

2. 📂 Open the project folder.

3. 🖥️ Open the `index.html` file in **Google Chrome** (as Web Speech API is fully supported in Chrome).

4. 🎙️ Click the **"🎤 Start Speaking"** button and speak your task.

5. ✅ The recognized text will automatically appear in the to-do list.

6. ✏️ Click on a task to mark it as completed.

---

## 📌 Notes

* This project works best in **Google Chrome**.
* Ensure microphone permissions are granted when prompted by the browser.

---

## 📸 Preview

![image](https://github.com/user-attachments/assets/b6266621-3c51-4c4a-b9e1-b9676278ade9)
![image](https://github.com/user-attachments/assets/aa1ca352-7c2f-48b7-891d-11c6003fbe6b)
![image](https://github.com/user-attachments/assets/11544a6c-bde3-4873-a64a-1d6185506884)


---

## 📜 License

This project is open-source and free to use for personal or educational purposes.
