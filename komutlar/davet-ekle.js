const Discord = require("discord.js")
     const db = require("quick.db")

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**ADMİN** LAZIM!`)

  let kullanici = message.mentions.users.first();
  let sayi = args.slice(1).join(" ")
  if (!kullanici) return message.channel.send(`Bir kullanıcıyı etiketlemelisiniz!`)
  if (!sayi) return message.channel.send(`Bir miktar girmelisiniz!`)
  const embed = new Discord.MessageEmbed()
  .setColor("#E70000")
  .setFooter(bot.user.username, bot.user.avatarURL())
  .setDescription(`${kullanici} kullanıcısına ${sayi} adet davet eklendi!`);
  message.channel.send(embed);

  db.add(`davet_${kullanici.id}_${message.guild.id}`, +sayi);
};

module.exports.conf = {
  aliases: ["davetekle"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "davet-ekle",
  description: "davet-ekle",
  usage: "davet-ekle"
};
