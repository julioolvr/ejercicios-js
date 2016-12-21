const express = require('express')
const app = express()

const middleware = require('./middleware')

app.use(middleware('admin', 'superadmin'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Listening on port 3000!')
})
