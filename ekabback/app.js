const express = require("express")
const bodyParser = require("body-parser")
const { response } = require("express")

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.get('/', (req, res) => {
    res.json({ info: 'From nodejs express server!' })
})

app.listen(port, () => console.log('server has started'))