
const WebSocket = require('ws');

function startSocket(httpServer) {
  // Create a WebSocket server 
  const wsServer = new WebSocket.Server({ server: httpServer });

  _handleClient(wsServer);

  return wsServer;
}

function _handleClient(wsServer) {
  wsServer.on('connection', (ws) => {
    console.log('A new client has connected.');

    // setTimeout(() => {
    //   ws.send('name:test')
    // }, 3000) 

    // Event handler for incoming messages from clients
    ws.on('message', (message) => {
      console.log(`Received: ${message}`);

      // // Broadcast the received message to all connected clients
      // wsServer.clients.forEach((client) => {
      //   if (client !== ws && client.readyState === WebSocket.OPEN) {
      //     client.send(message);
      //   }
      // });
    });

    // Event handler for WebSocket connection closing
    ws.on('close', () => {
      console.log('A client has disconnected.');
    });
  });
}


// wsServer.on('open', (ws) => {
//   ws.send('test2')
// })

module.exports = {
  startSocket
}


