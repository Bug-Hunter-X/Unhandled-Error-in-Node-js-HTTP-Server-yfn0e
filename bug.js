const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  try {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello, World!');
    } else {
      throw new Error('Not Found');
    }
  } catch (error) {
    console.error('Error:', error.message); // Log the error for debugging purposes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});