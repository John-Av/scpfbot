const package = require('../package.json');
exports.run = (client, message, args) => {
  message.channel.send(`\`SCPFBOT ${package.version}\``);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'version',
  description: 'Returns the current version of SCPFBOT',
  usage: 'version'
};
