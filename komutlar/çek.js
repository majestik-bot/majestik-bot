const Discord = require('discord.js');
exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR"))
if(!message.member.roles.cache.has("807314994081169459")) return message.channel.send(`Bu komutu kullanabilmek için \`Transport Staff\` yetkisine sahip olmasınız.`);
    if (!message.member.voice.channel) { return message.channel.send("**Ses kanalında olman lazım!**"); }
 let kullanıcı = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
  if (!kullanıcı) return message.channel.send('**Kullanıcıyı etiketlemelisin.**')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  if(!member.voice.channel) return message.channel.send("**Etiketlenen kullanıcı bir ses kanalında değil**").then(message => {setTimeout(() => {message.delete()}, 60000);})  
  const voiceChannel = message.member.voice.channel.id;
if(!voiceChannel) return
  member.voice.setChannel(voiceChannel);
   const voiceChannel1 = message.member.voice.channel.name;
  let embed = new Discord.MessageEmbed()
    .setColor("#000000")
    .setDescription(`${message.author} **Tarafından** ${kullanıcı} **Kullanıcısı** \`${voiceChannel1}\` ** Sesli Kanalına Çekildi.**  `)
    .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL()}`)
   .setTimestamp()  
    message.channel.send(embed).then(message => {setTimeout(() => {message.delete()}, 60000);message.react('810500661829042176')})  
 
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
}
exports.help = {
  name: 'çek',
  description: " ",
  usage: 'çek'
}