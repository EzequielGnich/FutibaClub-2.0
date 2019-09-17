require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.CONN_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on("connected", function() {
  console.log("=====Conexão estabelecida com sucesso=====");
});
mongoose.connection.on("error", function(err) {
  console.log("=====Ocorreu um erro: " + err);
});
mongoose.connection.on("disconnected", function() {
  console.log("=====Conexão finalizada=====");
});
