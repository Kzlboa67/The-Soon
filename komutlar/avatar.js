exports.run = function(client, message) {

  const embed = new Discord.RichEmbed()
      .setTitle(message.author)
     .setImage(message.author.avatarURL)

  message.channel.send(embed);

};

exports.conf = {
enabled: true, 
guildOnly: false, 
aliases: ['avatarım'],
permLevel: 0 
};

exports.help = {
name: 'avatar', 
description: 'Avatarınızı gösterir',
usage: 'avatar'
};