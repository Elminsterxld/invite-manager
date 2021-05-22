const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**ADMİN** LAZIM!`)
let seç = args[0]
if(!seç){
  const embed = new Discord.MessageEmbed()
    .setColor("#E70000")
    .setDescription(`Lütfen sıfırlanacak mesajı belirtiniz (hg veya bb)!`)
    .setFooter(bot.user.username, bot.user.avatarURL())
  message.channel.send(embed);
    return
}
if(seç == "hg"){
  let msj = await db.fetch(`davetmsjhg_${message.guild.id}`)
  if(!msj){
      const embed = new Discord.MessageEmbed()
    .setColor("#E70000")
    .setDescription(`Hoşgeldin Davet Mesajı zaten ayarlanmamış!`)
    .setFooter(bot.user.username, bot.user.avatarURL())
  message.channel.send(embed);
    return
  }
  db.delete(`davetmsjhg_${message.guild.id}`)
  const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`Hoşgeldin Davet Mesajı sıfırlandı!`)
    .setFooter(bot.user.username, bot.user.avatarURL())
  message.channel.send(embed);
    return
}
  if(seç == "bb"){
  let msj = await db.fetch(`davetmsjbb_${message.guild.id}`)
  if(!msj){
      const embed = new Discord.MessageEmbed()
    .setColor("#E70000")
    .setDescription(`Görüşürüz Davet Mesajı zaten ayarlanmamış!`)
    .setFooter(bot.user.username, bot.user.avatarURL())
  message.channel.send(embed);
    return
  }
  db.delete(`davetmsjbb_${message.guild.id}`)
  const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setDescription(`Görüşürüz Davet Mesajı sıfırlandı!`)
    .setFooter(bot.user.username, bot.user.avatarURL())
  message.channel.send(embed);
    return
}
  
  

};

module.exports.conf = {
  aliases: ["davet-mesaj-sıfırla"],
  permLevel: 0,
  enabled: true,
  guildOnly: true,
};

module.exports.help = {
  name: "davet mesaj sıfırla",
  description: "sıfırla",
  usage: "sıfırla"
};
