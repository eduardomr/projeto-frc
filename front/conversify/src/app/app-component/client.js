document.addEventListener('DOMContentLoaded', function() {

    const websocketClient = new WebSocket("ws://localhost:12345");
    const messageContainer = document.getElementById("message_container");
    const messageInput = document.querySelector("[name='message_input']");
    const sendButton = document.querySelector("[name='send_message_button']");

    websocketClient.onopen = function() {
        console.log("Connection established!");

        sendButton.onclick = function() {
            sendMessage();
        };

        messageInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        });
    };

    websocketClient.onmessage = function(message) {
        const data = message.data;
        displayMessage(data, false);
    };

    function sendMessage() {
        const message = messageInput.value;
        websocketClient.send(message);
        displayMessage("Você: " + message, true); 
        messageInput.value = ''; 
    }

    function displayMessage(message, isSent) {
        const newMessage = document.createElement("div");
        if (isSent) {
            newMessage.innerText = message;
            newMessage.classList.add('self-message');
        } else {
            newMessage.innerText = "Outro usuário: " + message;
        }
        messageContainer.appendChild(newMessage);
    }

}, false);