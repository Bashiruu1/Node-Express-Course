const express = require('express')
const app = express()
const PORT = 5000

app.get('/', (req, res) => {
  console.log('user hit root resource')
  res.send('Home Page')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource Not Found</h1>')
})

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})

//app.get()
//app.post()
//app.put()
//app.delete()
//app.all()
//app.use() middleware... everything is middleware
//app.listen()
