//
const { Commando } = require('discord.js-commando');
const Path = require('path');
//
const Oracle = new Commando({
    commandPrefix: '>',
    owner: ''
});
//
Oracle.registry
	.registerDefaultTypes()
	.registerGroups([
		['first', 'Your First Command Group'],
		['second', 'Your Second Command Group'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));
//
Oracle.once('ready', () => {
	console.log(`Logged in as ${Oracle.user.tag}! (${Oracle.user.id})`);
	Oracle.user.setActivity('with Commando');
});

Oracle.on('error', console.error);
//
Oracle.login(process.env.BOT_TOKEN);
//
