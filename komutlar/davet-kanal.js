const Discord = require("discord.js")
      const db = require("quick.db")
  

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**ADMİN** LAZIM!`)

  let kanal = message.mentions.channels.first();

  if (!kanal) return message.channel.send(`Bir kanal etiketlemelisiniz!`)
  const embed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setFooter(bot.user.username, bot.user.avatarURL())
  .setDescription(`Davet kanalı başarıyla ${kanal} olarak ayarlandı!`);
  message.channel.send(embed);

  db.set(`davetkanal_${message.guild.id}`, kanal.id);
};

module.exports.conf = {
  aliases: ["davetkanal"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "davet-kanal",
  description: "davet-kanal",
  usage: "davet-kanal"
};
