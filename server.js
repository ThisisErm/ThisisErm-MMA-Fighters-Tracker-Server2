//Command Center

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const db = require ('./config/db')
const PORT = 8000

const fighterRoutes = require('./routes/fighter-routes.js')

//deprecation warning 
mongoose.set('strictQuery', true)

//create connection between local MongoDB & this express app
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
} )

// starting express app by invoking express()
const app = express()

app.use(cors({ origin:'http://127.0.0.1:5501' }))

//sending json
//need to be able to accept json
app.use(express.json())

//server needs to know about this router
app.use(fighterRoutes)

app.listen(PORT, () => {
    console.log('Now listening on port' + PORT)
})

module.exports = app