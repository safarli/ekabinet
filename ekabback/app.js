const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const queries = require("./queries.js")
const {createTable} = require("./initDb.js")

// createTable()
createTable({populate: true})


const app = express()
app.use(cors())
const port = 3333

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.get('/', (req, res) => {
    res.json({ info: 'From nodejs express server!' })
})

app.get('/users', queries.getUsers)
app.get('/users/:id', queries.getUserById)
app.post('/users', queries.createUser)
app.put('/users/:id', queries.updateUser)
app.delete('/users/:id', queries.deleteUser)

app.listen(port, () => console.log('server has started'))