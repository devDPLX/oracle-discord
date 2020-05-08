//
const { Commando } = require('discord.js-commando');
const Path = require('path');
//
const Oracle = new Commando({
    commandPrefix: '>',
    owner: ''
});
//
client.registry
	.registerDefaultTypes()
	.registerGroups([
		['first', 'Your First Command Group'],
		['second', 'Your Second Command Group'],
	])
	.registerDefaultGroups()
	.registerDefaultCommands()
	.registerCommandsIn(path.join(__dirname, 'commands'));
