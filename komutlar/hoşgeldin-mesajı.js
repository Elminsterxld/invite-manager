const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**ADMİN* LAZIM`)

  let msj = args.slice(0).join(" ");
  if (!msj) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(`-sunucu- , -uye-, -uyetag-, -daveteden-, -davetoldu-`)
        .setColor("#E70000")
      .setFooter(bot.user.username, bot.user.avatarURL()
    );
  }

  const embed = new Discord.MessageEmbed()
    .setColor("#E70000")
    .setDescription(`Davet Hg mesajı; ${msj} olarak ayarlandı!`)
  .setFooter(bot.user.username, bot.user.avatarURL()
  message.channel.send(embed);

  db.set(`davetmsjhg_${message.guild.id}`, msj);
};

module.exports.conf = {
  aliases: ["davet-mesaj-hg"],
  permLevel: 0,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet mesaj hg",
  description: "hg",
  usage: "hgf"
};
