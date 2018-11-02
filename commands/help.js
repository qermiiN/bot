const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    // let prefix = prefixes[message.guild.id].prefixes;
  let prefix = "("
    if (message.content === prefix+"help"){
        const embed = new Discord.RichEmbed()
    .setColor('ff0000')
    .addField("\`MODERACJA:\`", "kick , ban, mute, unmute ")
    .addField("\`MATEMATYKA:\`", "Wszelkie liczby  \**PRZYKŁAD:\** \`(matma 2+2\`")
    .addField("\`UŻYTECZNE:\`", " ktoto (@osoba) ,  serverinfo, report \`(osoba)\` \`(powód)\`")
    .addField("\`ZABAWA:\`", "8ball, random, spam")
        message.author.send({embed}) + message.channel.send(":white_check_mark: **Komendy zostały wysłane w wiadomości prywatnej!**")
    }
    }
module.exports.help = {
    name: "help"
}
