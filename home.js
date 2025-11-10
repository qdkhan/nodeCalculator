
export const home = (req, res) => {
  res.write('<body>');
  res.write('<p>Home Page</p><br/>');
  res.write('<button type="button"><a href="/calculator_page">Calculator</a></button>');
  res.write('</body>');
  res.write('</html>');
  res.end(); // ✅ Always end the response
};



