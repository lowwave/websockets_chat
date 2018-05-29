const config = require('./config.js');
const express = require('express');
const socket = require('socket.io');

// App setup
const app = express();
const PORT = config.port;
const server = app.listen(PORT, () => {
    console.log(`Listening to request on port ${PORT}`);
});

app.use(express.static('public'));

// Socket setup
const io = socket(server);

io.on('connection', (socket) => {
    console.log('made socket connection');
})