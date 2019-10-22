const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () =>{
    console.log ('This bot is online!');
     client.on('message', message => {
  if ( message.contest === 'ping' ) {
      message.reply('pong');
});

client.login(process.env.BOT_TOKEN);
