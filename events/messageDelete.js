module.exports = message => {
  var client = message.client
  console.log(`A message with the contents ${message.cleanContent} was deleted from ${message.channel}`)
	client.channels.get('444695791118843905').send(`A message with the contents ${message.cleanContent} was deleted from ${message.channel}`)
};
