const {Client,RichEmbed}=require('discord.js');
const client = new Client();

client.on('ready',()=>{
    console.log(`Bot despierto: ${client.user.tag} `);
    if(client.user.presence.status === 'dnd'){
        console.log('Bot en inveernacion', client.user.presence.status);
    }else{
        console.log('Bot activo');
    }
    const testChannel = client.channels.find(channel => channel.name === 'canal gamers uaemex');
    console.log('esta activo');
});

client.on('message',async message =>{
    console.log(message);
    if(message.content === 'ping'){
        message.reply('pong');
    }
    if(message.content === 'hola'){
        message.channel.send(`hola ${message.author} saludos!!`);
    }
    if(message.content.includes('joto')){
        message.channel.send(` ${message.author} tu wey xdd`);
    }
    if(message.content === 'nimzaj'){
        message.channel.send('https://nimzaj.com.mx');
        message.channel.send('https://neo4j.com/');
    }
    if(message.content === '!pretty'){
        const embed = new RichEmbed()//los mensajes concatenados esten bonitos
        .setTitle('Pretty Message xd')
        .setColor('#f46611')
        message.channel.send(embed);
    };
    if(message.content === '!clear'){
        const fetched = await message.channel.fetchMessages({limit: 100});
        message.channel.bulkDelete(fetched);
        console.log('message deleted')

    };
    
});

client.login('NjUwMDA1NDcwNjEzOTk1NTM5.XeFDWQ.fblp4I37nCJUv7vY8Hs55lDtR-w'); 



