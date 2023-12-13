const displayContent = (req, res) => {
  const url = req.url
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
  res.setHeader('Content-Type', 'text/html')
  res.write('<p>page not found</p>');
  res.end();
}

builtinModules.exports = displayContent;