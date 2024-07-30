const mongoose = require("mongoose");
const express = require("express");

mongoose
  .connect(
    "mongodb+srv://root:root@clusterd.dtamzzg.mongodb.net/diplov?retryWrites=true&w=majority&appName=ClusterD"
  )
  .then(() => {
    return console.log("database is connected");
  })
  .catch((error) => console.log(error.message));

const app = express();

const userRoute = require("./Routes/newr");
app.use("/api", userRoute);

app.listen(5000, (req, res) => {
  console.log("server is started at port 5000");
});
