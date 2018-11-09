let httpUtility = require("http")
let fileserver = require("./fileserver")
let mysql = require("mysql2")
let util = require('../util/training-utils')
let server = httpUtility.createServer(fileserver.handleRequestUsingStream)
util.setUp(server)
server.onConnection((socket) => {
    console.log("Connected: " + socket)
})
console.log(server.constructor)
server.listen("7000", "0.0.0.0")
let server2 = httpUtility.createServer(fileserver.handleRequestUsingCallback)
server2.listen("7001", "0.0.0.0")