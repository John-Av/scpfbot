exports.run = (client, message, args) => {
  client.user.setGame(args.join(' '));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};

exports.help = {
  name: 'setgame',
  description: 'Sets the bot\'s current game',
  usage: 'setgame <text>'
};
