const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://username:password@localhost:27017/mydb"
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));