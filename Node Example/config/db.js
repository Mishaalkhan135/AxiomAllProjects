const mongoose = require("mongoose");

let driverUrl = `mongodb+srv://mishaal:khan@cluster0.aucpu.mongodb.net/nodeExample?retryWrites=true&w=majority`;

mongoose.connect(driverUrl);
module.exports = mongoose;
