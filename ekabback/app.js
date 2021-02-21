const express = require("express")
const bodyParser = require("body-parser")
const dbconn = require("./dbconn.js")
const { response } = require("express")

const app = express()
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

app.get('/users', dbconn.getUsers)
app.get('/users/:id', dbconn.getUserById)
app.post('/users', dbconn.createUser)
app.put('/users/:id', dbconn.updateUser)
app.delete('/users/:id', dbconn.deleteUser)

app.listen(port, () => console.log('server has started'))