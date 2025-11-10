export const sum = (req, res) => {
  const body = [];

  req.on('data', chunk => {
    body.push(chunk);
  });

  req.on('end', () => {
    const fullBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(fullBody);
    const bodyObject = Object.fromEntries(params);
    const total = Number(bodyObject.first_number) + Number(bodyObject.second_number);
    res.write(`<p>First Number: ${bodyObject.first_number}</p>`);
    res.write(`<p>Second Number: ${bodyObject.second_number}</p>`);
    res.write(`<h3>The Sum is: ${total}</h3>`);
    res.write('<br/><a href="/">Back to Home</a>');
    res.write('</body>');
    res.write('</html>');
    res.end();
  });
};
