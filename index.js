const listEndpoints = require('express-list-endpoints')

var http = require("http");
var express = require("express");
var routes = require("./src/routes");
var cors = require("cors");

const app = express();
const server = http.createServer(app);


app.use(cors());

routes.init(app);
console.log(listEndpoints(app));

server.listen(9000);