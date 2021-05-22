const Discord = require("discord.js")
    const  db = require("quick.db")
   


exports.run = async (client, message, args) => {
  let rol1 = await db.fetch(`rol1_${message.guild.id}`);
  let roldavet1 = await db.fetch(`roldavet1_${message.guild.id}`);
  let roldavet2 = await db.fetch(`roldavet2_${message.guild.id}`);
  let rol2 = await db.fetch(`rol2_${message.guild.id}`);

  if (!rol1) return message.channel.send(`Herhangi bir rütbe ayarlanmamış!`)
  if (rol1) {
    if (!rol2) {
      const embed = new Discord.MessageEmbed()
      .setDescription(`1 - Rol: **${message.guild.roles.cache.get(rol1).name}** - ${roldavet1} Davet!`)
      .setColor("#E70000")
      .setFooter(client.user.username, client.user.avatarURL());
      return message.channel.send(embed);
    } else {
      const embed = new Discord.MessageEmbed()
        .setDescription(`1 - Rol: **${message.guild.roles.cache.get(rol1).name}** - ${roldavet1} Davet!\n2 - Rol: **${message.guild.roles.cache.get(rol2).name}** - ${roldavet2} Davet!`)
        .setColor("#E70000")
        .setFooter(client.user.username, client.user.avatarURL());
      message.channel.send(embed);
      return;
    }
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["rütbeler", "rütbeliste", "rütbelistele", "rütbe-listele"],
  permLevel: 0
};
exports.help = {
  name: "rütbe-liste",
  description: "rütbe-liste",
  usage: "rütbe-liste"
};
