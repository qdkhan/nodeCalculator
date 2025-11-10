import http from 'http';
import { home } from './home.js';
import { calculator } from './calculator.js';
import { sum } from './sum.js'; // ✅ ensure extension

const PORT = 3003;

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Calculator in Node JS</title></head>');

  if (req.url === '/') {
    home(req, res);
  } else if (req.url === '/calculator_page' && req.method === 'GET') {
    calculator(req, res);
  } else if (req.url.toLowerCase() === '/result' && req.method === 'POST') {
    sum(req, res);
  } else {
    res.write('<p>Error Page<p>');
    res.write('</html>');
    return res.end();
  }
}).listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
