const express = require('express')
const app = express()
const port = 3000
const IP = '127.0.0.1'


app.use(express.static(__dirname))

app.listen(port,IP, () => console.log(`Example app listening at http://${IP}:${port}`))