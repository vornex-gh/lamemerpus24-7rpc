const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Kolkata', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rpc started! check your profile ^^`);

  const r = new Discord.RichPresence()
    .setApplicationId('1154459332914720878')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=HAuuvGQkZnw') //Must be a youtube video link 
    .setState('Playing NGRP AS:Duggles_D_Xebec')
    .setName('KidneY 🍒')
    .setDetails(`Developer,KidneY 💉 [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/external/g0dRFUr3eL4xv76GNWWUjAT9c2MEkXWtxGkumpjbHeU/https/i.pinimg.com/originals/19/f7/e8/19f7e88ecdf3ead830ee96a82e3de21a.gif') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Sunny') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/external/eK_s96YiVIfvG14xk6TFz4ZQWuVTRi0M_I7oPZhpoto/https/emoji.discadia.com/emojis/798267a5-3e6c-4168-a56c-9fc4be65aad3.gif') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Blue TiK') //Text when you hover the Small image
    .addButton('JOIN NGRP', 'https://discord.gg/ngrp-kerala-official-776666577546117151')
    .addButton('💀', 'https://google.com')

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Developer,KidneY 💉 [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
