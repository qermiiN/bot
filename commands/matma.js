const Discord = require("discord.js");
const math = require("mathjs");
module.exports.run = async (bot, message, args, tools) => {
    let wpierdol = message.content.split(" ");
   let messageArray = message.content.split(" ");
   let cmd = messageArray[0];
if (!args[0]) return message.channel.reply("Proszę podaj poprawną kalkulację. :x: ");

let resp;
try {
    resp = math.eval(args.join(' '));
} catch (e) {
    return message.reply("Przepraszam, proszę podaj poprawną kalkulację.")
}
   const embed = new Discord.RichEmbed()
   .setColor(0xffffff)
   .setTitle("Kalkulacja")
   .addField("Polecenie:", `\`\`\`${args.join(' ')}\`\`\``)
   .addField("Wynik:", `\`\`\`js
   ${resp}\`\`\``)
    message.channel.send(embed);
}
module.exports.help = {
    name: "matma"
}

//if (wpierdol == '+'){
  //  let numArray = args.map(n=> parseInt(n));
 //   let total = numArray.reduce( (p, c )  => p+c);
 //   message.channel.sendMessage(`**${total}** to wynik który obliczyłem :white_check_mark:`);
  //  }
  //  }
//if (wpierdol == '-'){
  //  let numArray = args.map(n=> parseInt(n));
  //  let total = numArray.reduce( (p, c )  => p-c);
 //   message.channel.sendMessage(`**${total}** to wynik który obliczyłem :white_check_mark:`)
  ///  }
 // if (wpierdol == '*'){
 //   let numArray = args.map(n=> parseInt(n));
  //  let total = numArray.reduce( (p, c )  => p*c);
  //  message.channel.sendMessage(`**${total}** to wynik który obliczyłem :white_check_mark:`);
   // }

  //  if (wpierdol == ':'){
  //      let numArray = args.map(n=> parseInt(n));
  //        for( let i = 1; i < numArray.length; i++ ) {
   //         let c = numArray[i];
   //         if( c == 0 ) {
   //             message.channel.sendMessage(`Nie mogę podzielić przez 0 :x:`)
   //             return;
   //         }} 
   //         let total = numArray.reduce( (p, c )  => p/c);
   //         message.channel.sendMessage(`**${total}** to wynik który obliczyłem :white_check_mark:`);
        //  }//