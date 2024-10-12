const express = require('express');
const app = express();
const http = require('http');

const webSocket = require('./services/websocket');

const cors = require('./middleware/cors');

// endpoints
const apiRouter = require('./api/index');

// api handlers
app.use('/api', cors, express.json(), apiRouter);

// Create an HTTP server
const server = http.createServer(app);

// Start the HTTP server on port 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`WebSocket server is listening on port ${PORT}`);
});

const webSocketServer = webSocket.startSocket(server);
