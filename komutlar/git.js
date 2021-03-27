const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const filter = m => m.content.includes('discord');
module.exports.run = async (client, message, args) => {

const msg = message;
const reactionFilter = (reaction, user) => {
    return ['✅'].includes(reaction.emoji.name) && user.id === msg.mentions.users.first().id;
}
const onlyembed = new Discord.MessageEmbed()
.setColor('#0009ft')
.setDescription('**Birini etiketlemelisin.**')
 if (message.mentions.users.first() === message.author) return message.channel.send('**Kendini seçemezsin.**')
 if (!msg.mentions.users.first()) return message.channel.send(onlyembed)

  
  
  
      const samblem = client.emojis.cache.get('810500929236500510');
  const alev = client.emojis.cache.get('811677388735774760');
  
    let istek = new Discord.MessageEmbed()
    .setColor("#000000")
    .setTitle(`• Merhaba ${msg.mentions.users.first().username}`)
    .setDescription(`
    ${samblem} ${msg.author} Yanına Gelmek İstiyor.
    ${samblem} Kabul Ediyormusunuz?
    
     30 Saniyen Var ${alev}
    `)
    .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL()}`)
   .setTimestamp()  
  
      let odadayok1 = new Discord.MessageEmbed()
    .setColor("#000000")
    .setTitle(`• İstek Başarısız Oldu`)
    .setDescription(`
    ${samblem} ${msg.mentions.users.first().username} Yanına Gitme İsteğiniz Onayladı.
    ${samblem} Fakat Odada Olmadığından Dolayı Başarısız Oldu.
    
     Başaramadık Abi ${alev}
    `)
    .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL()}`)
   .setTimestamp()  
  
    let odadayok2 = new Discord.MessageEmbed()
    .setColor("#000000")
    .setTitle(`• İstek Başarısız Oldu`)
    .setDescription(`
    ${samblem} ${msg.mentions.users.first().username} İsteği Onayladın.
    ${samblem} Fakat Bir Odada Olmadığından Dolayı Başarısız Oldu.
    
     Başaramadık Abi ${alev}
    `)
    .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL()}`)
   .setTimestamp()
    
    let onaylanmadi = new Discord.MessageEmbed()
    .setColor("#000000")
    .setTitle(`• İstek Başarısız Oldu`)
    .setDescription(`
    ${samblem} ${msg.mentions.users.first().username} İsteğinizi Onaylamadı.
    ${samblem} İsteğiniz Onaylanmadığından Dolayı İptal Oldu.
    
     Başaramadık Abi ${alev}
    `)
    .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL()}`)
   .setTimestamp() 
msg.mentions.users.first().send(istek).then(async (asd) => {
    await asd.react("✅");
    asd.awaitReactions(reactionFilter, {
        max: 1,
        time: 30000,
        errors: ['time']
    }).then(async(c) => {
        if (!msg.guild.member(msg.mentions.users.first()).voice.channel){
            msg.author.send(odadayok1);
            msg.mentions.users.first().send(odadayok2);
            return;
        }
        await msg.member.voice.setChannel(msg.guild.member(msg.mentions.users.first()).voice.channelID);
        asd.delete();
    }).catch(async(e) =>{
        await asd.delete();
        msg.author.send(onaylanmadi).then(message => {setTimeout(() => {message.delete()}, 60000);})
    })
})
  
  
  msg.channel.send(istek).then(async (asd) => {
    await asd.react("✅");
    asd.awaitReactions(reactionFilter, {
        max: 1,
        time: 30000,
        errors: ['time']
    }).then(async(c) => {
        if (!msg.guild.member(msg.mentions.users.first()).voice.channel){
            msg.channel.send(odadayok1);
            msg.mentions.users.first().send(odadayok2);
            return;
        }
        await msg.member.voice.setChannel(msg.guild.member(msg.mentions.users.first()).voice.channelID);
        asd.delete();
    }).catch(async(e) =>{
        await asd.delete();
        msg.author.send(onaylanmadi).then(message => {setTimeout(() => {message.delete()}, 60000);})
    })
})

}
 module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  category: "admin",
  permLevel: 0
};

module.exports.help = {
  name: 'git',
  description: '',
  usage: ''
}