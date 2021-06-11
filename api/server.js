const express = require('express');

const Mistborn = require('./mistborn/mistborn-model');

const server = express();

server.use(express.json());

server.post('/characters', async (req, res) => {
    const {name} = req.body;
    
    try {
        const newChar = await Mistborn.add(name);
        res.status(200).json(newChar);
    } catch(err) {
        res.status(500).json(err.message);
    }
});

module.exports = server;