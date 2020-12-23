const express = require('express')

const router = express.Router()
const city = require('./api/city.json')
const detail = require('./api/detail.json')
const home = require('./api/index.json')

router.get('/city', (req, res) => {
  res.send(city)
})
router.get('/detail', (req, res) => {
  res.send(detail)
})
router.get('/home', (req, res) => {
  res.send(home)
})

module.exports = router
