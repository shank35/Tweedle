const displayContent = (req, res) => {
  const url = req.url
  const method = req.method;

  if(url == '/profile') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>this is the profile page</p>');
    return res.end();
  }
  else if (url == '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>hello</p>');
    return res.end();
  }
  else if (url == '/settings' && method == "POST") {
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>Form was submitted</h1>');
    return res.end();
  }
  else if (url == '/settings') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>setting page</h1><form action="/settings" method="POST"><input type="text"><button type="submit">press me</button></form>');
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html')
  res.write('<p>page not found</p>');
  res.end();
}

module.exports = displayContent;