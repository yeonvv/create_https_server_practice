const http = require("https");
const fs = require("fs");
const express = require("express");

const POST = 3001;
const app = express();

http
  .createServer(
    {
      key: fs.readFileSync(__dirname + "/key.pem"),
      cert: fs.readFileSync(__dirname + "/cert.pem"),
    },
    app.use("/", (req, res) => {
      res.write("Congrats! You made https sercer now :)");
      res.end();
    })
  )
  .listen(POST, () => console.log(`https://localhost:${POST}`));
