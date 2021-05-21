const Discord = require("discord.js");
    const   db = require("old-wio.db")
     

exports.run = async (client, message, args, tools) => {
  let kişi;
  if (message.mentions.members.first()) kişi = message.mentions.members.first();
  else kişi = message.author;

  let davetv2 = await db.fetch(`davet_${kişi.id}_${message.guild.id}`);
  let davet;
  if (!davetv2) {
    davet = 0;
  } else {
    davet = await db.fetch(`davet_${kişi.id}_${message.guild.id}`);
  }
  let rol1 = await db.fetch(`rol1_${message.guild.id}`);
  let roldavet1 = await db.fetch(`roldavet1_${message.guild.id}`);
  let roldavet2 = await db.fetch(`roldavet2_${message.guild.id}`);
  let rol2 = await db.fetch(`rol2_${message.guild.id}`);
  if (!rol1) {
     const embed = new Discord.MessageEmbed()
    .addField(`Kullanıcı`, `<@` + kişi.id + `>`, true)
    .addField(`Toplam Davet:`, davet, true)
      .setColor("#E70000")
     .setThumbnail(message.author.avatarURL({dynamic:true}))
    .setFooter(client.user.username, client.user.avatarURL());
    message.channel.send(embed);
  }
  if (message.member.roles.cache.has(rol2)) {
  const embed = new Discord.MessageEmbed()
    .addField(`Kullanıcı`, `<@` + kişi.id + `>`, true)
    .addField(`Toplam Davet:`, davet, true)
      .setColor("#E70000")
   .setThumbnail(message.author.avatarURL({dynamic:true}))
    .setFooter(client.user.username, client.user.avatarURL());
    message.channel.send(embed);
  }
  if (!message.member.roles.cache.has(rol1)) {
    const embed = new Discord.MessageEmbed()
    .addField(`Kullanıcı`, `<@` + kişi.id + `>`, true)
    .addField(`Toplam Davet:`, davet, true)
   .setColor("#E70000")
     .setThumbnail(message.author.avatarURL({dynamic:true}))
    .setDescription(`${message.guild.roles.cache.get(rol1).name} rolü için son ${roldavet1 - davet} davet!`);
    message.channel.send(embed);
  }
  if (message.member.roles.cache.has(rol1)) {
    if (!rol2) {
  const embed = new Discord.MessageEmbed()
      .addField(`Kullanıcı`, `<@` + kişi.id + `>`, true)
      .addField(`Toplam Davet:`, davet, true)
       .setColor("#E70000")
   .setThumbnail(message.author.avatarURL({dynamic:true}))
      .setFooter(client.user.username, client.user.avatarURL());
      message.channel.send(embed);
    }
    if (rol2) {
      const embed = new Discord.MessageEmbed()
      .addField(`Kullanıcı`, `<@` + kişi.id + `>`, true)
      .addField(`Toplam Davet:`, davet, true)
      .setColor("#E70000")
       .setThumbnail(message.author.avatarURL({dynamic:true}))
      .setDescription(`${message.guild.roles.cache.get(rol2).name} rolü için son ${roldavet2 - davet} davet!`);
      message.channel.send(embed);
    }
  }
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["davetlerim"],
  permLevel: 0
};

module.exports.help = {
  name: "davetlerim",
  description: "davetlerim",
  usage: "davetlerim"
};
