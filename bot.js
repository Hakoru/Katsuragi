const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Im ready to conquest`);
});
 
client.on('message', msg => {
  if (msg.content === '.buenas') {
    msg.reply('buenas');
  }
});
 
client.login(procces.env.BOT_TOKEN);
