const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {
let polecenie = message.content.split(" ");
switch(polecenie[0])
      {
  case '(report':
  {
    const embed = new Discord.RichEmbed()
  .setAuthor("⚠️Zgłoszenie⚠️")
  .setFooter("Dzień zgłoszenia |")
  .setThumbnail("https://media.giphy.com/media/PmpA5ohOUl1xC/giphy.gif")
  .setTimestamp()
  .setColor('FF0000')
  .addField("Autor zgłoszenia", message.author)
  .addField("Osądzony zgłoszenia", `${polecenie[1]}`, true)
  .addField("Powód", `${(polecenie.slice(2).join(" "))}`, true);
    if(message.mentions.users.size === 0) {
   return message.reply(":x: Nie trolluj z reportami! Może się do dla ciebie źle skończyć. `POPRAWNE UŻYCIE:` `(report @osoba powód`").catch(console.error);
}
  bot.channels.get('501474044424618007').send({embed}); + message.channel.sendMessage(`Zgłoszono gracza ${polecenie[1]} ✅ `)
  console.log(`${message.author.username} zgłosił gracza ${polecenie[1]}; Powód: ${(polecenie.slice(2).join(" "))}`)
   break;
  }
      }
    }
module.exports.help = {
    name: "report"
}
