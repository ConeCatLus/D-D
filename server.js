// Imports
const express = require("express")
const server = express()
const port = 3000

server.use(express.static('Public'))
server.use('/CSS', express.static(__dirname + 'Public/CSS'))
server.use('/HTML', express.static(__dirname + 'Public/HTML'))
server.use('/JS', express.static(__dirname + 'Public/JS'))

server.get('/', (req,res) => {
    res.sendFile(__dirname + '/Public/HTML/CharacterCreator.html')
})

// Listen to port 3000
server.listen(port, () => console.info(`Listening on port: ${port}`))