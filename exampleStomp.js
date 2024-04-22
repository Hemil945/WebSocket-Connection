var express = require('express')
require("dotenv").config();
var app = express()
const WebSocketServer = require('websocket').server;
const http = require('http');
const StompServer = require('stompjs');

// Create HTTP server
const server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(40511, function() {
    console.log((new Date()) + ' Server is listening on port 40511');
});

// Create WebSocket server
const wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

// Handle WebSocket requests
wsServer.on('request', function(request) {
    const connection = request.accept(null, request.origin);
    console.log((new Date()) + ' Connection accepted.');
    
    // Create STOMP server over WebSocket
    const stompServer = StompServer.overWs(connection);
    
    // Subscribe to any channel
    stompServer.subscribe('/topic/*', function(message) {
        console.log('Received message:', message.body);
    });

    // Handle WebSocket connection close
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/examplestomp.html');
  // res.send("Testing from the node service.");

})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.use(require("./src/routes/common.route"));
