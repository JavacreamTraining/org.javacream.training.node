let httpUtility = require("http")
let fileserver = require("./fileserver")
let config = require('./config.json')
let util = require('util')
let server = httpUtility.createServer(fileserver.handleRequestUsingStream)
server.listen(config[0].port, config[0].host)
console.log("web server listening at port " + util.inspect(config[0]))
let server2 = httpUtility.createServer(fileserver.handleRequestUsingCallback)
server2.listen(config[1].port, config[1].host)
console.log("web server listening at port " +  util.inspect(config[1]))
