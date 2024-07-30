const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const bodyParser = require("body-parser");
require("./Database/connection");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

const userRoute = require("./Routes/userRoute");
const productRoute = require("./Routes/productRoute");
const categoryRoute = require("./Routes/categoryRoute");

app.use("/api", userRoute);
app.use("/api", productRoute);
app.use("/api", categoryRoute);

app.listen(5000, (req, res) => {
  console.log("server started at port: 5000");
});
