require('dotenv').config();
const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const express = require('express');
const app = express();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
  partials: [Partials.Channel],
});

client.commands = new Collection();

// Load commands, events, systems here (placeholder)
console.log('Loading commands, events, systems...');

// Bot ready event
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// Express dashboard server
app.get('/', (req, res) => {
  res.send('Dashboard home page placeholder');
});

const PORT = process.env.DASHBOARD_PORT || 3000;
app.listen(PORT, () => console.log(`Dashboard running on port ${PORT}`));

// Login Discord bot
client.login(process.env.DISCORD_TOKEN);