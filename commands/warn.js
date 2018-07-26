const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'bot-logs')
  if (!modlog) return message.reply('I cannot find a bot-logs channel.')
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);
  if (reason.length < 1) return message.reply('You must supply a reason for the warning.')
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('Action:', 'Warning')
  .addField('User:', `${user.username}#${user.discriminator}`)
  .addField('Moderator:', `${message.author.username}#${message.author.discriminator}`);
  return client.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'warn',
  description: 'Warns the player',
  usage: 'warn <mention>'
};
