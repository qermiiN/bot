const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
let user = message.mentions.users.first();
if (!args.join(' ')){
    let emded = new Discord.RichEmbed()
    .setColor("#ffd700")
    .setThumbnail(`${message.author.avatarURL}`)
    .addField("Nazwa użytkownika", `${message.author.username}`)
    .addField("Tag użytkownika", `${message.author.discriminator}`)
    .addField("Pełny nick", `${message.author.tag}`)
    .addField("ID użytkownika", `${message.author.id}`)
    if (message.author.bot) return
    message.channel.sendEmbed(emded);
    return;
}


var usercreatedat = user.createdAt.toString().split(' ')
let embed = new Discord.RichEmbed()
.setAuthor(`${user.username} Info`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.setColor('RANDOM')
.addField("Nazwa użytkownika", `${user.username}`)
.addField('ID', user.id)
.addField("TAG:", user.discriminator)
.addField("Status:", user.presence.status)
.addField("Data stworzenia konta:", usercreatedat[1] + ` ${usercreatedat[2]}` + ` ${usercreatedat[3]}`)
message.channel.send(embed)

}
module.exports.help = {
    name: "ktoto"
}