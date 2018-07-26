exports.run = function(client, message, args) {
  let messagecount = parseInt(args.join(' '));
  if (messagecount > 99) return message.reply('X cannot be higher than 99')
  message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'purge',
  description: 'Purges X amount of messages in the channel the command is run in.',
  usage: 'purge <number>'
};
