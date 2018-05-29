// Make connection
const socket = io.connect(`http://localhost:4000`);

// Query DOM
const message = document.querySelector('#message');
const btn = document.querySelector('#send');
const output = document.querySelector('#output');
const feedback = document.querySelector('#feedback');

// Emit events
btn.addEventListener('click', (event) => {
    socket.emit('chat', {
        message: message.value
    });
    message.value = '';
});

message.addEventListener('keypress', (event) => {
    socket.emit('typing');
});

// Listen for event
socket.on('chat', (data) => {
    feedback.innerHTML = '';
    output.innerHTML += `<p>${data.message}</p>`;
});

socket.on('typing', () => {
    feedback.innerHTML = '<p><em>Someone is typing...</em></p>';
});