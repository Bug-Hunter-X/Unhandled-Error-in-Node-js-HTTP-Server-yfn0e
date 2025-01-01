const http = require('http');

// Custom error class
class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = 404;
  }
}

const server = http.createServer((req, res) => {
  // Improved error handling
  try {
    if (req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello, World!');
    } else {
      throw new NotFoundError('Not Found');
    }
  } catch (error) {
    console.error('Error:', error.stack); // Log the error stack for debugging
    res.writeHead(error.statusCode || 500, { 'Content-Type': 'text/plain' });
    res.end(`${error.statusCode || 500} ${error.message || 'Internal Server Error'}`);
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});