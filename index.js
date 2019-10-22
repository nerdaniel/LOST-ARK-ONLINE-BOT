const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () =>{
    console.log ('This bot is online!');
client.login(process.env.BOT_TOKEN);
