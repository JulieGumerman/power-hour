const express = require("express");
require("dotenv").config();

// const port = process.env.NODE_PORT || 3333;
const port = 3333;
const server = express();

server.use(express.json());

server.listen(port, () => {
    console.log("port", port);
})

server.get("/", (req, res) => {
    res.send("Winter is coming!")
})


let mountains = [
    {
        id: 0,
        town: "Frisco",
        resort: "Copper Mountain"
    },
    {
        id: 1,
        town: "Salida",
        resort: "Monarch"
    }, 
    {
        id: 2, 
        town: "Aspen",
        resort: "Buttermilk"
    }
]

server.get("/api/mountains", (req, res) => {
    res.json(mountains);
})