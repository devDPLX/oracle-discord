const Commando = require('discord.js-commando');
const Path = require('path');
//
const Oracle = new Commando ({
    commandPrefix: '>',
    owner: '153277301793095682'
});
//
Oracle.registry
    .registerGroups([
        ['fun', 'Fun commands'],
        ['some', 'Some group'],
        ['other', 'Some other group']
    ])
    .registerDefaults()
    .registerCommandsIn(Path.join(__dirname, 'commands'));
//
client.login(process.env.BOT_TOKEN);