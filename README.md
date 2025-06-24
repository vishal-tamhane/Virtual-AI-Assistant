# Virtual AI Assistant

A simple voice-activated virtual assistant built using HTML, CSS, and JavaScript. This project leverages the Web Speech API for speech recognition and synthesis, allowing users to interact with their browser using voice commands.

## Features

- **Voice Recognition:** Listens to your commands using your microphone.
- **Speech Synthesis:** Responds to you with spoken feedback.
- **Smart Commands:** Can open popular websites (YouTube, Google, WhatsApp, Instagram, Facebook) or search Google for any other query.
- **Interactive UI:** Click a button to start listening.

## How It Works

1. Click the "Start Listening" button.
2. The assistant greets you and starts listening after 2 seconds.
3. Speak your command (e.g., "open YouTube", "open Google", or any search query).
4. The assistant will respond and perform the action (open a website or search Google).

## Usage

1. **Clone or Download** this repository.
2. Open `index.html` in your browser.
3. Make sure your browser supports the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) (works best in Chrome).
4. Click the button and start speaking!

## Example Commands

- `open youtube`
- `open google`
- `open whatsapp`
- `open instagram`
- `open facebook`
- `what is the weather today` (or any other query, will search Google)

## Code Overview

The core logic is in `script.js`:

```js
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    function speak(text) {
        const texts = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(texts);
    }

    function handleCommands(command) {
        if (command.includes("open youtube")) {
            speak("opening Youtube.");
            window.open("https://www.youtube.com", "_blank");
        } else if (command.includes("open google")) {
            speak("opening Google.");
            window.open("https://www.google.com", "_blank");
        } else if (command.includes("open whatsapp")) {
            speak("opening WhatsApp.");
            window.open("https://web.whatsapp.com", "_blank");
        } else if (command.includes("open instagram")) {
            speak("opening Instagram.");
            window.open("https://www.instagram.com", "_blank");
        } else if (command.includes("open facebook")) {
            speak("opening Facebook.");
            window.open("https://www.facebook.com", "_blank");
        } else {
            speak("Searching on google");
            window.open(`https://www.google.com/search?q=${command}`, "_blank");
        }
    }

    recognition.start();
    speak("Hello, how can I assist you today?");
    setTimeout(() => {
        recognition.onresult = (event) => {
            const command = event.results[0][0].transcript.toLowerCase();
            handleCommands(command);
        };
    }, 2000);
});
```