'use strict';

const fs = require('fs')
    , path = require('path');

const express = require('express')
    , bodyParser = require('body-parser')
    , app = express();

const Discord = require('discord.js')
    , client = new Discord.WebhookClient(process.env.id, process.env.token);

app.use(bodyParser.json());
app.post('/', (req, res) => {
  const value = (1 - req.body.current / req.body.target) * 100;
  client.send(`${req.body.name}: 目標値まで現在${value.toFixed(2)}%`);
  res.send('OK');
});
app.listen(process.env.PORT); 