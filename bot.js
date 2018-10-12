const Eris = require('eris');
const bot = new Eris(process.env.BOT_TOKEN);

bot.on('ready', () => {
    console.log('Connected');
    bot.editStatus('online', {name: 'SetPrefix ?', type :0})
});

bot.on('messageCreate', msg => {
    const usedby = `Command ${msg.content} used by ${msg.member.username}#${msg.member.discriminator} (${msg.member.id})`;

    if (msg.author.bot) return;

    if (msg.content === '!updates') {
        bot.createMessage(msg.channel.id, {embed: {
            description: 'Our list of updates can be found in the Official Server (Run command !help to join)'
        }})
        .catch((e) => {console.log(e)});

        console.log(usedby);
    };
        
    if (msg.content === '!commands') {
        bot.createMessage(msg.channel.id, {embed: {
            description: 'Commands can be found here:'
        }})
        .catch((e) => {console.log(e)});

        console.log(usedby);
    };

    if (msg.content === '!help') {
        bot.createMessage(msg.channel.id, {embed: {
            description: 'If you require help than please join the support server here:'
        }})
        .catch((e) => {console.log(e)});

        console.log(usedby);
    };
      
    if (msg.content === '!addme') {
        bot.createMessage(msg.channel.id, {embed: {
            description: 'You can add me here: '
        }})
        .catch((e) => {console.log(e)});

        console.log(usedby);
      };

});

bot.connect();
