import { runAgent } from "./tools.js";

const sendBtn = document.getElementById("sendBtn");
const clearBtn = document.getElementById("clearBtn");
const userInput = document.getElementById("userInput");
const chatBox = document.getElementById("chatBox");


sendBtn.addEventListener("click", async () => {
    const input = userInput.value.trim();
    if (!input) return;

    appendMessage("user", input);
    userInput.value = "";

    const response = await runAgent(input);
    appendMessage("agent", response);
});


clearBtn.addEventListener("click", () => {
    chatBox.innerHTML = "";
    userInput.value = "";
});


userInput.addEventListener("keypress", async (e) => {
    if (e.key === "Enter") {
        sendBtn.click();
    }
});

function appendMessage(sender, text) {
    const msg = document.createElement("div");
    msg.classList.add("chat-message", sender);
    msg.textContent = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}
