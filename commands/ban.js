const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    let memberr = message.mentions.members.first();
   const member1 = message.guild.member(memberr);
   let messageArray = message.content.split(" ");
   let cmd = messageArray[0];
   let rolw = message.guild.roles.find("name", "void");
  // let prefix = prefixes[message.guild.id].prefixes;
  let prefix = "("
if (message.content === prefix+"ban") {
    if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
        return message.reply(":x: Nie mam permisji (BAN_MEMBER) aby tego zrobić. :x: Spróbuj dać mi role, która ma permisję do banowania członków").catch(console.error);
    }

    if(message.mentions.users.size === 0) {
        return message.reply(" :x: Proszę oznacz osobę aby ją wyrzucić :x:").catch(console.error);
    }

    if(!message.member.roles.has(rolw.id)) {
    return message.channel.send(":x: Nie masz uprawnień do tej komendy! :x: ```UWAGA:``` Jeśli jesteś ``adminem`` tego serwera, zrób rangę `void` oraz daj ją sobie by uzyskać **uprawnienia!**")
    }

  memberr.ban(reason); + message.channel.sendMessage(`**Zbanowano** gracza ${memberr} :white_check_mark: |||  z opcjonalnego powodu: ${reason}`)
}
}
module.exports.help = {
    name: "ban"
}