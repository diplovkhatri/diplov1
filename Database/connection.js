const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://root:root@clusterd.dtamzzg.mongodb.net/diplov?retryWrites=true&w=majority"
  )
  .then(() => {
    return console.log("Database Connected");
  })
  .catch((error) => console.log(error.message));
