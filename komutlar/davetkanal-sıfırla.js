const Discord = require("discord.js")
     const db = require("quick.db")
      

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**ADMİN** LAZIM!`)

  let kanal = await db.fetch(`davetkanal_${message.guild.id}`)

  if (!kanal) return message.channel.send(`Davet kanalı ayarlı değil!`)
  db.delete(`davetkanal_${message.guild.id}`)
  const embed = new Discord.MessageEmbed()
  .setColor("#E70000")
  .setFooter(bot.user.username, bot.user.avatarURL())
  .setDescription(`Davet kanalı başarıyla sıfırlandı!`);
  message.channel.send(embed);
  
};

module.exports.conf = {
  aliases: ["davetkanalsıfırla"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "davet-kanal-sıfırla",
  description: "davet-kanal-sıfırla",
  usage: "davet-kanal-sıfırla"
};
