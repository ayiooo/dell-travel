const express = require('express')
// const cors = require('cors')
const router = require('./routes')

const app = express()
// app.use(cors())
app.use('/api', router)

const port = 3001
app.listen(port, () => {
  console.log(`listening http://localhost:${port}`)
})
