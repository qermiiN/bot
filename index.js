'use strict';
    const  Discord = require('discord.js');
    let snekfetch = require("snekfetch")
    const  bot = new Discord.Client();
    const config = require("./config.json");
    const token = process.env.token;
    const fs = require("fs")
    bot.commands = new Discord.Collection();
fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Nie znalazłem");
       return;
    }
         jsfile.forEach((f, i) => {
     let props = require(`./commands/${f}`);
     console.log(`${f} wczytano`);
     bot.commands.set(props.help.name , props);
   });
});
bot.on("message", async message => {
    bot.user.setActivity('(help | Strzeż się prawa [14]', { type: 'WATCHING' });

    let prefix = "("
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(bot,message,args);
    if (message.content == "regulamin"){
        const embed = new Discord.RichEmbed()
        //.addField("Każdy użytkownik serwera jest zobowiązany do przetrzegania regulaminu W przeciwnym wypadku zostaniesz ukarany na różne sposoby ( zależy co zrobiłeś)  Nieznajomość regulaminu nie zwalnia z jego przestrzegania więc teksty typu  nic nie zdziałają", "----------------------------------------------------------------------------------------------")
        .setColor("ff0000")
        .attachFile("./re.png")
        /// 1 punkt
       .addField("I. Postanowienia ogólne:", "----------------------------------")
        .addField("\` 1.1 \`",
         "Każdy użytkownik musi być wzorem dla innych, zakazane jest namawianie do zachowań złych oraz łamania regulaminu")
        .addField("\` 1.2 \`",
         "Każdy użytkownik może samowolnie opuścić serwer")
        .addField("\` 1.3 \`",
         "Zabrania się szukania luk w regulaminie, bądź robienia rzeczy zakazanych/złych nie wymienionych w regulaminie")
        .addField("\` 1.4 \`",
         "Nie nadajemy rang osobom które ich miec nie powinny [mute 8h]")
        ////// 2 punkt
        
        .addField("II. Zasady korzystania z kanałów oraz BOT'ów", "----------------------------------")
        .addField("\` 2.1 \`",
        "Surowo karzemy tutaj spam, flood oraz krzyki bądź wygłupy (chyba że nikt nie ma nic przeciwko) na kanałach głosowych")
        .addField("\` 2.2 \`",
         "Zachowujmy się, nie obrażamy innych oraz nie przesadzajmy z przekleństwami")
        .addField("\` 2.3 \`",
        "Korzystanie z botów pt. spam, bądź np. dodawanie niechcianych piosenek do kolejki jest również karane ")
        .addField("\` 2.4 \`",
         "Dodawanie sobie ról, których mieć niepowinieneś ( powiedzmy że masz 10 mocy a dajesz sobie rolę @100+ ) karzemy \**BARDZO SUROWO\**")
        .addField("\` 2.5 \`",
         "Reklamowanie swoich serwerów jest wręcz nagradzane! \**Ale banicją :)\**")
        /// 3 punkt
      
        .addField("III. Postanowienia Administracji", "----------------------------------")
        .addField("\` 3.1 \`",
         "Możemy publikować nasz regulamin")
        .addField("\` 3.2 \`",
         "Możemy edytować regulamin")
        .addField("\` 3.3 \`",
        "Zakazujemy kopiowanie regulaminu bez naszej zgody")
        // punkt 4
     
        .addField("IV. Zasady dotyczące czatu", "----------------------------------")
        .addField("\` 4.1 \`",
         "Zakaz pisania na czacie nie przeznaczonym do tego [warn]")
        .addField("\` 4.2 \`",
         "Zakaz bezpodstawnego oznaczania Gradzia @everyone @here oraz administracji [mute 24h]")
        .addField("\` 4.3 \`",
         "Zakaz reklamowania innych discordów/kanałów/reflinków itp. [BAN]")
        .addField("\` 4.4 \`",
        "Zakaz oszukiwania, skamowania itp. [BAN]")
        .addField("\` 4.5 \`", 
        "Zakaz przeklinania na czacie [mute 12h]")
        .addField("\` 4.6 \`",
        "Zakaz spamowania na czacie [mute 24h]")
        .addField("\` 4.7 \`",
         "Administratorzy mogą upominać, a także mutować, kickować czy banować bez żadnego konkretnego powodu, w momencie kiedy uznają to za stosowne")
        /// punkt 5
    
        .addField("V. Zakaz nicków:", "----------------------------------")
        .addField("\` 5.1 \`", "Podszywających się pod Administrację.")
       .setFooter("Regulamin został zedytowany przez 〈alright.scripts〉")
       message.channel.sendEmbed(embed);
    }
});
//});
bot.login(token);
