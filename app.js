const express = require("express")
require('dotenv').config()
app = express()

const PORT = process.env.APPPORT || 4001;

const mainRoutes = require('./src/routes/mainRoutes')
const charactersRoutes =require('./src/routes/charactersRoutes')

// app.use(express.urlencoded())
// app.use(express.json)

app.use('/', mainRoutes)
app.use('/api', charactersRoutes)

app.listen(PORT , () => console.log(`Servidor corriendo en http://localhost:${PORT}`))