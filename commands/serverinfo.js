const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    function checkMembers(guild) {
        let memberCount = 0;
        guild.members.forEach(member => {
          if(!member.user.bot) memberCount++;
        });
        return memberCount;
      }
    /// checkmembers
    
    /// checkbots
    function checkBots(guild) {
        let botCount = 0; 
        guild.members.forEach(member => { 
          if(member.user.bot) botCount++; 
        });
        return botCount; 
      }
    
if (message.content === prefix+"serverinfo"){
    let embed = new Discord.RichEmbed()
    .setColor("#f4df42")
    .setAuthor(`${message.guild.name}`, message.guild.iconURL)
    .addField("Właściciel serwera", `${message.guild.owner}`)
    .addField("Region Serwera", `${message.guild.region}`)
    .addField("Liczba kanałów", `${message.guild.channels.size}`)
    .addField("Łączna liczba osób", `${message.guild.memberCount}`)
    .addField("Ludzie", `${checkMembers(message.guild)}`)
    .addField("Boty", `${checkBots(message.guild)}`)
    .addField("Poziom Weryfikacji", `${message.guild.verificationLevel}`)
    .setFooter("Serwer stworzony")
    .setTimestamp(message.guild.createdAt);
message.channel.sendEmbed(embed)
}
}
module.exports.help = {
    name: "serverinfo"
}