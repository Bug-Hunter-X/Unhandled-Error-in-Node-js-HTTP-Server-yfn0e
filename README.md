# Unhandled Error in Node.js HTTP Server

This repository demonstrates an example of an unexpected error in a Node.js HTTP server and how to improve error handling.

## Bug Description
The server handles requests for the root path ('/') successfully. However, requests to other paths result in a generic '404 Not Found' response, with minimal error logging. The error handling could be more robust and informative.

## Bug Solution
The improved solution implements better error handling by:

1.  Providing specific error codes and messages.
2.  Logging detailed error information, including stack traces.
3.  Using a more sophisticated error handling approach using error classes and centralized error handling.

## How to Reproduce the Bug
1.  Clone this repository.
2.  Run `node bug.js`.
3.  Make requests to `http://localhost:3000/` and `http://localhost:3000/some-other-path`.

## How to Run the Solution
1.  Clone this repository.
2.  Run `node bugSolution.js`.
3.  Make requests to `http://localhost:3000/` and `http://localhost:3000/some-other-path`. Observe the more detailed response and error logs.