const Discord = require("discord.js")
      const db = require("quick.db")
     
     

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**ADMİN** LAZIM!`)

  let kullanici = message.mentions.users.first();
  if (!kullanici) return message.channel.send(`Bir kullanıcı etiketlemelisiniz!`)
  const embed = new Discord.MessageEmbed()
  .setColor("#E70000")
  .setDescription(`${kullanici} kullanıcısının bütün davetleri silindi!`)
  .setFooter(bot.user.username, bot.user.avatarURL())
  message.channel.send(embed);

  db.delete(`davet_${kullanici.id}_${message.guild.id}`);

};

module.exports.conf = {
  aliases: ["davetsıfırla"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "davet-sıfırla",
  description: "davet-sıfırla",
  usage: "davet-sıfırla"
};
