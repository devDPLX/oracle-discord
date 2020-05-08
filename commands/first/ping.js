module.exports = class PingCommand extends Command {
	constructor(client) {
		super(client, {
			name: 'ping',
			aliases: ['doping'],
			group: 'first',
			memberName: 'ping',
			description: 'Replies with a ping, idiot.',
		});
	}
  run(message) {
		return message.say('pong');
	}
};
