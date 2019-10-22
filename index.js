const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () =>{
    console.log ('This bot is online!');
});
const PREFIX = '-';
})

client.on('message', message=>{
     
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'lostarkbot' :
            message.channel.sendMessage('Welcome, this is commands list: -server, -installazione, work in progress.')
            break;
            case 'server':
                message.channel.sendMessage('Sirion [Сирион]')
            break;
            case 'installazione' :
                message.channel.sendMessage('https://www.youtube.com/watch?v=alpGI-wqKmk&t=6s')
            break;
            case 'pulisci':
                if(!message.member.roles.find( r => r.name === "gattoschifomadò" )) return message.channel.send('non hai i permessi!')
                if(!args[1]) return message.reply ('errore inserisci il numero di righe righe')
                message.channel.bulkDelete(args[1]);
            break;
    }
})
client.login(process.env.BOT_TOKEN);
