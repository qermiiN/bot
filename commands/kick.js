const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
    // let prefix = prefixes[message.guild.id].prefixes;
  let prefix = "("
let memberr = message.mentions.members.first();
const member1 = message.guild.member(memberr);
let reason = args.slice(1).join(" ");
let messageArray = message.content.split(" ");
let cmd = messageArray[0];

let rolw = message.guild.roles.find("name", "void");
    if (message.content === prefix+"kick") {
        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
            return message.reply(":x: Nie mam permisji (KICK_MEMBER) aby tego zrobić. :x: Spróbuj dać mi role, która ma permisję do wyrzucania członków").catch(console.error);
        }
    
        if(message.mentions.users.size === 0) {
            return message.reply(" :x: Proszę oznacz osobę aby ją wyrzucić :x:").catch(console.error);
        }
    
        if(!message.member.roles.has(rolw.id)) {
        return message.channel.send(":x: Nie masz uprawnień do tej komendy! :x: ```UWAGA:``` Jeśli jesteś ``adminem`` tego serwera, zrób rangę `void` oraz daj ją sobie by uzyskać **uprawnienia!**")
        }
      memberr.kick(reason); + message.channel.sendMessage(`Wyrzucono gracza ${memberr} :white_check_mark:  |||  z opcjonalnego powodu: ${reason}`)
    
      }
}
module.exports.help = {
    name: "kick"
}