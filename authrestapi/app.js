const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const dbconn = require('./dbconn.js')

dbconn.initDb(dbname='emagaza')
dotenv.config()

const APP_PORT = process.env.APP_PORT
const app = express()

const corsOptions = {
    origin: 'http://localhost:8080'
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    console.log(req.query)
    res.status(200).send(`You've reached home path!`)
})



app.listen(APP_PORT, _ => console.log(`SERVER STARTED LISTENING ON: ${APP_PORT}`))