const express = require("express");
require("dotenv").config();

const port = process.env.NODE_PORT || 3333;
const server = express();

server.use(express.json());

server.listen(port, () => {
    console.log("port", port);
})