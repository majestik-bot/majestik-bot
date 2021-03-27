const Discord = require('discord.js');

exports.run = async (client, message) => {
  const yasak = client.emojis.cache.get('811958245094326372');
  const elmas = client.emojis.cache.get('810500929236500510');
  const onay = client.emojis.cache.get('816747101803380786');
      message.delete()
  const embed = new Discord.MessageEmbed()
     .setColor('RANDOM')
    .setDescription(`
 ${elmas}***<@${message.author.id}> Yardımcı Oluyoruz Size :)***
${elmas} ** Çekme Komutu:  \`.çek [@ETİKET]\`**
${elmas} ** Git Komutu:    \`.git [@ETİKET]\`**

${elmas} ** Ses Etkinlik Komutu:    \`.i\`**
${elmas} ** Ses Etkinlik Sıralama Komutu:    \`.top\`**
${elmas} ** Ses Etkinlik Sıfırlama Komutu:    \`.etkinlik-sıfırla [@ETİKET]\`**

${elmas} \`Otomatik Selam Alma Sistemi\` ${onay}
${elmas} \`Belirli Sürede İltifat Sistemi\` ${onay}
`,true)
        .setFooter(`Umarım Yardımcı Olabilmişimdir...`)
message.channel.send(embed).then(message => {setTimeout(() => {message.delete()}, 60000);message.react('810500661829042176')})  
  
};

exports.conf = {
  enabled: true,
  aliases: ['tyardım'],
  permLevel: 0,
};

exports.help = {
  name: "temel-yardım",
  description: "Bot bulunduğunuz odaya girer.",
  usage: "temel-yardım",
};