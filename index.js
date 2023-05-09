let express = require("express");
let routes = require("./src/routes");

const app = express();

routes.init(app);
app.listen(9000);
//test
