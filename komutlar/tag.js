const Discord = require('discord.js');

exports.run = async (client, message) => {
  const yasak = client.emojis.cache.get('811958245094326372');
  const elmas = client.emojis.cache.get('810500929236500510');
      message.delete()
  const embed = new Discord.MessageEmbed()
     .setColor('RANDOM')
    .setDescription(`
 ${elmas}***<@${message.author.id}> Yardımcı Oluyoruz Size :)***
${elmas} **Sol Altta İsiminizin Yanında Mikrofon Ses ve Ayarlar Menüsü var.**
${elmas} **Ayarlar Menüsüne Tıklıyorsunuz.**
${elmas} **"HESABIM" Bölümünde Düzenleye Tıklayın**
${elmas} **Kullanıcı Adınızın Başına "ቐ" Tagını Ekleyin.**
${elmas} **Şifrenizi Yazıp Kaydete Tıklayın.**       
`,true)
        .setFooter(`Ailemize Katılmak Mı İstiyorsun? Devam Etmelisin... Yardımlar Yolda Geliyor...`)
message.channel.send(embed);
message.channel.send("ቐ").then(message => {message.react('810500661829042176')})  
  
};

exports.conf = {
  enabled: true,
  aliases: ['tag'],
  permLevel: 0,
};

exports.help = {
  name: "tag",
  description: "Bot bulunduğunuz odaya girer.",
  usage: "tag",
};