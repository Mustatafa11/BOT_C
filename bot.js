const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("628578421592555542")
setInterval(function() {
channel.send(`جاري جمع كريديت`);
}, 30)
})

client.login(process.env.BOT_TOKEN);