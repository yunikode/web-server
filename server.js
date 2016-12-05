const express = require('express')
const app = express()
const PORT = 3000

const middleware = {
  requireAuthentication: (req, res, next) => {
    console.log('private route hit')
    next()
  },
  logger: (req, res, next) => {
    console.log(new Date().toString() + ' | Request: ' + req.method + ' ' + req.originalUrl)
    next()
  }
}

app.use(middleware.logger)
// app.use(middleware.requireAuthentication)

app.get('/about', middleware.requireAuthentication ,(req, res) => {
  res.send('About Us')
})

app.use(express.static(__dirname + '/public'))

app.listen(PORT, () => console.log('Express running on port ' + PORT) )
