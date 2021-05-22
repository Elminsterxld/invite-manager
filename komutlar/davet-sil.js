const Discord = require("discord.js")
     const db = require("quick.db")
    

module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**ADMİN** LAZIM!`)

  let kullanici = message.mentions.users.first();
  let sayi = args.slice(1).join(" ")
  if (!kullanici) return message.channel.send(`Bir kullanıcı etiketlemelisiniz!`)
  if (!sayi) return message.channel.send(`Kaç adet daveti sileceğinizi yazmalısınız!`)
  const embed = new Discord.MessageEmbed()
  .setColor("#E70000")
  .setDescription(`${kullanici} kullanıcısından ${sayi} adet davet silindi!`)
  .setFooter(bot.user.username, bot.user.avatarURL())
  message.channel.send(embed);

  db.add(`davet_${kullanici.id}_${message.guild.id}`, -sayi);
};

module.exports.conf = {
  aliases: ["davetsil"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "davet-sil",
  description: "davet-sil",
  usage: "davet-sil"
};
