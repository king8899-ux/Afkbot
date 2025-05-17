const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'Warriorreleam__01.aternos.me', // Replace with your server address
  port: 30566,
  username: 'immortalgang2345@gmail.com', // Replace with your Minecraft account
  auth: 'microsoft' // Use 'offline' if using cracked
});

bot.on('spawn', () => {
  console.log('Bot is online!');
  bot.chat('AFK bot is active');
});

bot.on('end', () => {
  console.log('Bot disconnected');
});
