const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db");
dotenv.config();

const app = express();
const port = process.env.PORT;
connectDB();
app.use(express.json());

app.use("/v1", require("./router/emailRouter"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
