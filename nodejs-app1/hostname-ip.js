// Import the required modules
const os = require('os');
const http = require('http');

// Get the hostname and IP address
const hostname = os.hostname();
const networkInterfaces = os.networkInterfaces();

let ipAddress = '';
for (const interfaceName in networkInterfaces) {
  const addresses = networkInterfaces[interfaceName];
  for (const addressInfo of addresses) {
    if (addressInfo.family === 'IPv4' && !addressInfo.internal) {
      ipAddress = addressInfo.address;
      break;
    }
  }
  if (ipAddress) {
    break;
  }
}

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<h1>Hostname: ${hostname}</h1><h1>IP Address: ${ipAddress}</h1>`);
});

// Specify the port and start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


// // Import the 'os' module
// const os = require('os');

// // Get the hostname
// const hostname = os.hostname();

// // Get the network interfaces
// const networkInterfaces = os.networkInterfaces();

// // Find the first IPv4 address
// let ipAddress = '';
// for (const interfaceName in networkInterfaces) {
//   const addresses = networkInterfaces[interfaceName];
//   for (const addressInfo of addresses) {
//     if (addressInfo.family === 'IPv4' && !addressInfo.internal) {
//       ipAddress = addressInfo.address;
//       break;
//     }
//   }
//   if (ipAddress) {
//     break;
//   }
// }

// console.log(`Hostname: ${hostname}`);
// console.log(`IP Address: ${ipAddress}`);