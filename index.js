"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");

const server = express();

server.use(bodyParser.urlencoded({
    extended: true
}));

server.use(bodyParser.json());

server.post("/raidUpdated", (req, res) => {
    let update = req.body.raid;
    console.log(`raw: ${JSON.stringify(req.body)}`);
    console.log(`raid updated: ${JSON.stringify(update)}`);
    return res.json({ updated: true });
});

server.post("./raidRemoved", (req, res) => {
    const update = req.body.raid;
    console.log(`token: ${JSON.stringify(req.body)}`);
    console.log(`raid removed: ${JSON.stringify(update)}`);
    return res.json({ removed: true });
});

server.listen((process.env.PORT || 8000), () => {
    console.log("Server is up and running...");
});