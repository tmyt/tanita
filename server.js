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
  const value = (req.body.current / req.body.target - 1) * 100;
  const sign = value >= 0 ? '+' : '';
  client.send(`${req.body.name}: 目標値まで現在${sign}${value.toFixed(2)}%`);
  res.send('OK');
});
app.listen(process.env.PORT); 
