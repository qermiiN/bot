const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let memberr = message.mentions.members.first();
const member1 = message.guild.member(memberr);
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let rolw = message.guild.roles.find("name", "void");
let muted = message.guild.roles.find("name", "muted");
// let prefix = prefixes[message.guild.id].prefixes;
let prefix = "("
if (message.content == prefix+"mute"){
    if(!message.guild.member(bot.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) {
        return message.reply(":x: Nie mam permisji (MANAGE_MEMBERS) aby tego zrobić. :x: Spróbuj dać mi role, która ma permisję do zarządzania rolami członków").catch(console.error);
    }
    if(!message.member.roles.has(rolw.id)) {
        return message.channel.send(":x: Nie masz uprawnień do tej komendy! :x: ```UWAGA:``` Jeśli jesteś ``adminem`` tego serwera, zrób rangę `void` oraz daj ją sobie by uzyskać **uprawnienia!**")
        }
if(message.mentions.users.size === 0) {
        return message.reply(" :x: Proszę oznacz osobę aby ją wyciszyć :x:").catch(console.error);
}
if (!message.guild.roles.find((role => role.name === 'muted'))){
    message.reply(":x: Musisz zrobić rangę `muted`, `zabrać jej uprawnienia do wysyłania wiadomości`, oraz dać ją **wyżej** niż domyślna ranga!").catch(console.error);
    return;
}
if (message.author.bot) return
memberr.addRole(muted) + message.channel.sendMessage(`Wyciszono gracza ${memberr} :mute:`).catch(console.error);
}
}
module.exports.help = {
    name: "mute"
}