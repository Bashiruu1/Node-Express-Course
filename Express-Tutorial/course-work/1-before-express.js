const http = require('http')
const { readFileSync } = require('fs')

//get all  files;
const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
  console.log('user hit the server')
  console.log(req.method)
  console.log(req.url)

  const url = req.url ?? ''
  switch (url) {
    case '/': // Home Page
      res.writeHead(200, { 'content-type': 'text/html' })
      res.write(homePage)
      break
    case '/about': // About Page
      res.writeHead(200, { 'content-type': 'text/html' })
      res.write('<h1>About Page</h1>')
      break
    default:
      //404
      res.writeHead(404, { 'content-type': 'text/html' })
      res.write('<h1>Page Not Founde</h1>')
      break
  }

  res.end()
})

server.listen(5000)
