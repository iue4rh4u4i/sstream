const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const prefix = "-";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('╚[════════════]╝')
});

client.login(process.env.BlueGamer);
