const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  // let prefix = prefixes[message.guild.id].prefixes;
  let prefix = "("
if (message.content == prefix+'czas') {
    var data = new Date();
    var godziny = data.getHours();
    var minuty = data.getMinutes();
    var sekundy = data.getSeconds();
    var czas = godziny;
    czas += ((minuty < 10) ? ":0" : ":") + minuty;
    czas += ((sekundy < 10) ? ":0" : ":") + sekundy;
    var miesiac = data.getMonth() + 1;
    if (miesiac < 9){
      miesiac = "0" + miesiac;
    }
    var dzien = data.getDate();
    if (dzien < 9){
      dzien = "0" + dzien;
    }
    var rok = data.getYear();
    if (rok < 1000){
      rok = 2000 + rok - 100;
    }
    var dzienTygodnia = data.getDay();
    switch(dzienTygodnia){
      case 0: dzienTygodnia = "Dzisiaj jest Niedziela"; break;
      case 1: dzienTygodnia = "Dzisiaj jest poniedziałek"; break;
      case 2: dzienTygodnia = "Dzisiaj jest wtorek"; break;
      case 3: dzienTygodnia = "Dzisiaj jest środa"; break;
      case 4: dzienTygodnia = "Dzisiaj jest czwartek"; break;
      case 5: dzienTygodnia = "Dzisiaj jest piątek "; break;
      case 6: dzienTygodnia = "Dzisiaj jest sobota."; break;
    }
    message.channel.sendMessage(dzienTygodnia + "```" +  dzien + '/' + miesiac + "/" + rok + "```" +  "  **Godzina:** ``" + godziny +  "``" + "  **Minuty:** ``" + minuty + "``" + "  **Sekundy:**`` " + sekundy + "``" )
  }
}
module.exports.help = {
    name: "czas"
}