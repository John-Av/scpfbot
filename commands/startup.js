exports.run = (client, message, args) => {
  client.channels.get('350768514803564576').send('@everyone Startup at 108!');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'startup',
  description: 'Announces a startup in #announcements',
  usage: 'startup'
};
