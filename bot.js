const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const prefix = "-";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('╚[════════════]╝')
});



const developers = ["510444339176931328"]
const adminprefix = "-";
client.on('message', message => {//Toxic Codes
    var argresult = message.content.split(` `).slice(1).join(' ');//Toxic Codes
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});//Toxic Codes
      message.channel.send(`**✅   ${argresult}**`)//Toxic Codes
  } else
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)//Toxic Codes
  } else
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/zero");
      message.channel.send(`**✅**`)//Toxic Codes
  }
});//Toxic Codes

client.login("NTEwNDQ0MzM5MTc2OTMxMzI4.Dw-C7w.4v676FTW1Jag-VPCODzzcBEidIw");
