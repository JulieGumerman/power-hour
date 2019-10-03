const express = require("express");
require("dotenv").config();

const port = process.env.PORT || 9999;

const server = express();

server.use(express.json());

server.listen(port, () => {
    console.log("port", port);
})

server.get("/", (req, res) => {
    res.send("Winter is coming!")
})

let itemId = 12;

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

server.post("/api/mountains", (req, res) => {
    const { town, resort } = req.body;
    const newMountain = {town, resort, id: itemId};
    if (!town || !resort) {
        res.status(404).json({ message: "please complete the info"})
    } else {
        res.json(req.body);
    }

    mountains.push(newMountain);
    itemId++;
    res.json(mountains);
})