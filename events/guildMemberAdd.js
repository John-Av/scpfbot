module.exports = member => {
  client.channels.get('444695791118843905').send(`User: ${member.user.username} has joined the server`)
};
