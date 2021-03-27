const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const ms = require('ms');
const db = require('quick.db');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

client.once('ready', () => { //Client hazır olduğunda
    console.log('Bot hazır!'); //Konsola "Bot hazır!" yazdır
    client.user.setActivity("Blood ✨ Loz 'Bey'i", { //Bot hesabının aktivitesini "Bu bot da Discord'a katıldı" olarak ayarla.
    type: "WATCHING" //Aktivite tipi: Oynuyor
  });
});

client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    await msg.react('🇦');
    await msg.react('🇸');
}
  if (msg.content.toLowerCase() === 'sea') {
    await msg.react('🇦');
    await msg.react('🇸');
}
  if (msg.content.toLowerCase() === 'selamun aleyküm') {
    await msg.react('🇦');
    await msg.react('🇸');
}  
  if (msg.content.toLowerCase() === 'selamün aleyküm') {
    await msg.react('🇦');
    await msg.react('🇸');
}  
  if (msg.content.toLowerCase() === 'selamun aleykum') {
    await msg.react('🇦');
    await msg.react('🇸');
}  
  if (msg.content.toLowerCase() === 'selamün aleykum') {
    await msg.react('🇦');
    await msg.react('🇸');
}
  if (msg.content.toLowerCase() === 'merhaba') {
    await msg.react('🇦');
    await msg.react('🇸');
}
  if (msg.content.toLowerCase() === 'selam') {
    await msg.react('🇦');
    await msg.react('🇸');
}
  if (msg.content.toLowerCase() === 'selamın aleyküm') {
    await msg.react('🇦');
    await msg.react('🇸');
}
  if (msg.content.toLowerCase() === 'selamin aleyküm') {
    await msg.react('🇦');
    await msg.react('🇸');
}    
});


// - ILTIFAT - \\
const iltifatlar = [
  "Öpüyorum gökyüzü gibi bakan gözlerinden.",
  "Sen yeterki çocukluk yap, gönlümde salıncağın hazır",
  "Bazen öyle güzel gülüyorsun ki, bütün dünya kör olsun istiyorum.",
  "Her yeni gün güzeldir, içinde sen varsan.",
  "Telaşımı hoş gör, ıslandığım ilk yağmursun…",
  "Seni düşünürken içim geçmiş, severken de ömrüm.",
  "Sonunu bilmeden izlediğim en güzel filmdi gözlerin.",
  "Sen hep gülümse ki yüreğinin güzelliği gülüşlerinde canlansın.",
  "Seni sevdiğim kadar yaşasaydım; ölümsüzlüğün adını aşk koyardım.",
  "Sana en muhtaç olduğum şu anda gel. Yaşamak olsan da gel, ölüm olsan da gel.",
  "Dünyada o kadar sevmesini bilmeyen insan varken ben niye sensizim.",
  "Sen benim sadece ilk görüşte değil; her görüşte aşık olduğum ilk ve son aşkımsın.",
  "Gözlerinin kahvesinden koy ömrüme, kırk yılın hatırına sen kalayım.",
  "Ey canımın sahibi Yar! Sen benimle olduktan sonra kaybettiklerimin ne önemi var.",
  "Sen benim görmek için, bakmaya gerek bile duymadığım ezberimsin.",
  "Ben utangaç bir kalbi taşırım geceden. Ben sana aşık olduğumu, ölsem söyleyemem.",
  "Acılarımı bile tatlandırıyor aşkın. Yıkıma terk edilmiş kalemin bütün hücrelerine sürülmüş iksir gibisin.",
  "Bana kimse sen gibi baktı mı bilmem, ama ben kimseye sana baktığım gibi bakmadım!",
  "Bana Kimse Senin Gibi Sıcak Komutlarla Yaklaşmadı Lütfen Bir Komut Daha Kullanırmısın Benim İçin. <3",
  "Uzaktan seviyorum seni. Kokunu alamadan, boynuna sarılmadan, yüzüne dokunamadan. Sadece seviyorum",
  "Sonunda aşk acısı olsa da sev, çok sev. Usul usul gir yüreğime, kalbim bağrım çatlasın!",
  "Okyanusla, gökyüzü gibiydik biz seninle. İkimizde maviydik, birlikte gibiydik. Aslında hiç birleşmemiştik.",
  "Ya tam açacaksın yüreğini, ya da hiç yeltenmeyeceksin! Grisi yoktur aşkın; ya siyahı ya beyazı seçeceksin.",
  "Günün birinde hepimiz sonsuza dek susacağız onun için sevdiklerimize. Seni seviyorum demekten çekinmeyin!",
  "Fizikte bir teoriye göre bazı sesler kalp atışınızın hızlanmasına neden olabilir. Benim için bu ses senin sesin.",
  "Yanağında açan güle âşık oldu bu can.",
  "Sensiz geçen günlerimin kazası yok sevgilim.",
  "Sol yanımın en güzel ağrısı iyi ki varsın.",
  "Şiir gibi gülüşü var. Mısra mısra öpmek istiyorum.",
  "Bir bozuk saattir yüreğim hep sen de durur.",
  "Yar, bütün şiirlerime sebep ettim seni, hakkını helal et!",
  "Yağmur gibi sev beni kaçmak mümkün olmasın.",
  "En delisinden sonsuzundan, akla zarar deliye kar. Özledim",
  "Sen de gördüğümü görecekler diye ödüm kopuyor.",
  "Hep aklıma geliyorsun. Bak gördün mü senin de gidecek yerin yok.",
  "Sen benim ilk şiirim, ilk kavgam, sen benim 17 yaşımsın.",
  "Tahir gibi sev mesela, özür dilerim daha önce gelemediğim için de.",
  "Canımın içi sen hangi şiirden kaçıp geldin yüreğimin orta yerine.",
  "O kadar güzel bakıyorsun ki bazen bütün dünya kör olsun istiyorum.",
  "Yürek yüreğe değmişse elin eline değmesine gerek var mı?",
  "Beni Bir Odaya Çek ve Konuşta Sesini Duyayım Özledim Be Bebeq :D",
  "Sen benim Harddiskime gönderdiğim duamın Discord'daki cevabısın.",
  "Yüreğini yasla bana sevgili, bir ömür birbirimize yük olalım.",
  "Senin saçlarından açan papatyalar sarsa tüm dünyayı, tüm gezegende bahar olurdu.",
  "Tünelimin sonu sensin sevgilim, tüm karanlığımın söndüğü yer sensin.",
  "Ne neşe isterim ne hayatımda bir gurur. Senin yokluğunda kalbim senin adınla durur.",
  "Seni kokundan öpüyorum.",
  "Aklım mı? O yüzsüz bir misafir. Hep sende kalıyor.",
  "Geleydin bir çay içimi, sen çay dökerdin, ben içimi.",
  "Ölümü boş ver, Harddiskim sen kokacak mı onu söyle?",
];

client.on("ready", async () => {
  let sunucuID = "807185038448787466"; // Sunucu ID
  let kanalID = "807185038448787469"; // Kanal ID
  let birinciRol = "807251931458043944"; // İlk rol ID (Erkek rolü)
  let ikinciRol = "807251895571316789"; // Diğer rol ID (Kız rolü)
  setInterval(() => {
    let sunucu = client.guilds.cache.get(sunucuID);
    client.channels.cache.get(kanalID).send(`${sunucu.members.cache.filter(uye => (uye.roles.cache.has(birinciRol) || uye.roles.cache.has(ikinciRol)) && uye.presence.status !== "offline").random()} ${iltifatlar[Math.floor(Math.random() * iltifatlar.length)]}`);
  }, 3600000);
});
// - ILTIFAT - \\



const DataVoice = new Map()

client.on("voiceStateUpdate", async(oldState, newState) => {
  if(oldState.user) return;
  newState.guild = oldState.guild
  let newUserChannel = newState.voiceChannelID 
  let oldUserChannel = oldState.voiceChannelID 
  if(oldUserChannel === undefined && newUserChannel !== undefined) {
    let bal = db.fetch(`Voice.${oldState.guild.id}.${oldState.user.id}`)

    if(bal === null) bal = 0

    DataVoice.set(oldState.user.id, Date.now())
  }else if(oldUserChannel !== undefined && newUserChannel === undefined) {
    let total = (Date.now() - DataVoice.cache.get(oldState.user.id))
    console.log(total)

    db.add(`Voice.${oldState.guild.id}.${oldState.user.id}`, total)

  }
})

