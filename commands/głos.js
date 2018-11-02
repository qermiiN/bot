const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
    // let prefix = prefixes[message.guild.id].prefixes;
  let prefix = "("
if (message.content == prefix+"głos"){
    const eightbal = [
    "**Magiczny** `głos` mówi: *~Spróbuj jeszcze raz.*",
    "**Magiczny** `głos` mówi: *~Zdecydowanie tak jest.*",
    "**Magiczny** `głos` mówi: *~Spróbuj później.*",
    "**Magiczny** `głos` mówi: *~Odejdź, wiem skąd przybywasz.*",
    "**Magiczny** `głos` mówi: *~Nie próbuj.*",
    "**Magiczny** `głos` mówi: *~OH NIE! DZIKA ODPOWIEDŹ SIĘ POJAWIŁA*",
    "**Magiczny** `głos` mówi: *~Wyjdź stąd, jak najprędzej.*",
    "**Magiczny** `głos` mówi: *~Tylko prawdę*",
    ]
    message.channel.send(`${eightbal[Math.floor(Math.random() * eightbal.length)]}`);
    }
}
module.exports.help = {
    name: "głos"
}