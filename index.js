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
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1154459332914720878')
    .setType('STREAMING')
    .setURL('https://youtu.be/hzQ2WMKK0qM?si=N8Sl8Gavnzt_AH-1') //Must be a youtube video link 
    .setState('Gaming is not a Crime')
    .setName('KidneY 🍒')
    .setDetails(`A Developer, (Python) [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/external/g0dRFUr3eL4xv76GNWWUjAT9c2MEkXWtxGkumpjbHeU/https/i.pinimg.com/originals/19/f7/e8/19f7e88ecdf3ead830ee96a82e3de21a.gif') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('PlaYing NGRP') //Text when you hover the Large image
    .setAssetsSmallImage('https://media.discordapp.net/external/eK_s96YiVIfvG14xk6TFz4ZQWuVTRi0M_I7oPZhpoto/https/emoji.discadia.com/emojis/798267a5-3e6c-4168-a56c-9fc4be65aad3.gif') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('*_*') //Text when you hover the Small image
    .addButton('Pacha Nikker','')
  .addButton('JOIN NGRP','https://discord.gg/ngrp-kerala-official-776666577546117151')

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `A Developer, (Python) [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
