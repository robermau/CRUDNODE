const express = require('express')
const router = express.Router()

app.get('/',(req, res)=> res.send('Hola Mundo desde NODE'))

module.exports = router