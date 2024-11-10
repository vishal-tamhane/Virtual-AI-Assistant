const recognition = new (window.SpeachRecognition || window.webkitSpeechRecognition)(); // used to listen the user
recognition.lang = "en-US";
// console.log(recognition);

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    //recognition.start(); // it start listining form start that why we use set time out and we start it after 2s..

    // Convert text to voice  ... // Function for speak the system our question
    function speak(text) {
        const texts = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(texts);
    }

    function handleCommands(command) {
        if (command.includes("open youtube")) {
            speak("opening Youtube.");
            window.open("https://www.youtube.com", "_blank"); // _blank -- opens in a new tap..
        }
        else if (command.includes("open google")) {
            speak("opening google.");
            window.open("https://www.google.com", "_blank"); // _blank -- opens in a new tap..
        }
        else if (command.includes("open whatsapp")) {
            speak("opening whatsapp.");
            window.open("https://www.whatsapp.com", "_blank"); // _blank -- opens in a new tap..
        }
        else if (command.includes("open instagram")) {
            speak("opening instagram.");
            window.open("https://www.instagram.com", "_blank"); // _blank -- opens in a new tap..
        }
        else if (command.includes("open facebook")) {
            speak("opening facebook.");
            window.open("https://www.facebook.com", "_blank"); // _blank -- opens in a new tap..
        }
        else {
            speak("Searching on google");
            window.open(`https://www.google.com/search?q=${command}`, "_blank");
        }
    }
    speak("Hello , how can i help you");

    setTimeout(() => {
        btn.innerHTML = "Listening...";
        btn.style.backgroundColor = "red";
        recognition.start()
    }, 2000); // start the listining after the 2000 mseconds

    recognition.onresult = (event) => {
        // console.log(onresult);
        const command = event.results[0][0].transcript.toLowerCase();
        // console.log(command); // it gives us a text in console which we talk to him or ask to him..
        handleCommands(command);
    }
    recognition.onend = () => {
        btn.innerHTML = "Start Listening";
        btn.style.backgroundColor = "red";
    }
});
