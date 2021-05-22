const Discord = require("discord.js")
      const db = require("quick.db")
     

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`**ADMİN** LAZIM!`)
  let rol1 = await db.fetch(`rol1_${message.guild.id}`);
  let rol2 = await db.fetch(`rol2_${message.guild.id}`);
  let davetrol1 = await db.fetch(`roldavet1_${message.guild.id}`)
  if (rol2) return message.channel.send(`Daha fazla rütbe eklenemez!`);
  if (!rol1) {
    let davetsayi = args[1];
    let davetrol = message.mentions.roles.first();
    if (!davetrol) return message.channel.send(`Lütfen bir rol etiketleyiniz!\nÖrnek: !!rütbe-ekle @elminster 5`);
    if (!davetsayi) return message.channel.send(`Lütfen bir davet sayısı belirtiniz!\nÖrnek: !!rütbe-ekle @elminster 5`);
    
    await db.set(`rol1_${message.guild.id}`, davetrol.id);
    await db.set(`roldavet1_${message.guild.id}`, davetsayi);
    message.channel.send(`Başarılı bir şekilde ${davetrol} rolü ${davetsayi} davet karşılığında elde edilebilecek!`)
  }else{
    let davetsayi = args[1];
    let davetrol = message.mentions.roles.first();
    if (!davetrol) return message.channel.send(`Lütfen bir rol etiketleyiniz!\nÖrnek: !!rütbe-ekle @elminster 5`);
    if (!davetsayi) return message.channel.send(`Lütfen bir davet sayısı belirtiniz!\nÖrnek: !!rütbe-ekle @elminster 5`);
    
    await db.set(`rol2_${message.guild.id}`, davetrol.id);
    await db.set(`roldavet2_${message.guild.id}`, davetsayi);
    message.channel.send(`Başarılı bir şekilde ${davetrol} rolü ${davetsayi} davet karşılığında elde edilebilecek!`)
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "rütbe-ekle",
  description: "rütbe-ekle",
  usage: "rütbe-ekle"
}
