var http = require("http");
var express = require("express");
var routes = require("./src/routes");
var cors = require("cors");

const app = express();
const server = http.createServer(app);

app.use(cors());

routes.init(app);

server.listen(9000);