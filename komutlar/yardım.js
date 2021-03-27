const Discord = require('discord.js');

exports.run = async (client, message) => {
  const yasak = client.emojis.cache.get('811958245094326372');
  const elmas = client.emojis.cache.get('810500929236500510');
      message.delete()
  const embed = new Discord.MessageEmbed()
     .setColor('RANDOM')
    .setDescription(`
 ${elmas}***<@${message.author.id}> Yardımcı Oluyoruz Size :)***
${elmas} ** Temel Yardım Kodları İçin:  \`.temel-yardım\`**
${elmas} ** Teyit Yardım Kodları İçin:  \`.teyit-yardım\`**
${elmas} ** Koruma Yardım Kodları İçin: \`.koruma-yardım\`**
${elmas} ** Seviye Yardım Kodları İçin: \`.seviye-yardım\`**
`,true)
        .setFooter(`Umarım Yardımcı Olabilmişimdir...`)
message.channel.send(embed).then(message => {setTimeout(() => {message.delete()}, 60000);message.react('810500661829042176')})  
  
};

exports.conf = {
  enabled: true,
  aliases: ['yardım'],
  permLevel: 0,
};

exports.help = {
  name: "yardım",
  description: "Bot bulunduğunuz odaya girer.",
  usage: "yardım",
};