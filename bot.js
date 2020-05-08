console.log('0');
const { Commando } = require('discord.js-commando');
const Path = require('path');
console.log('1');
//
const Oracle = new Commando({
    commandPrefix: '>',
    owner: ''
});
console.log('2');
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
console.log('3');
Oracle.once('ready', () => {
	console.log(`Logged in as ${Oracle.user.tag}! (${Oracle.user.id})`);
	Oracle.user.setActivity('with Commando');
});
console.log('4');
Oracle.on('error', console.error);
//
Oracle.login(process.env.BOT_TOKEN);
console.log('5');
