const express = require('express')
const app = express()
const PORT = 5000
const path = require('path')

//setup static pages and middleware
app.use(express.static('./public'))

app.get('/', (req, res) => {
  console.log(__dirname)
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('Resource Not Found')
})
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})
