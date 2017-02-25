var Discord = require('discord.io');

var bot = new Discord.Client({
    token: "Mjg1MDg3NTI5ODg2MDIzNjgw.C5NGEA.LWq2jhejsueGe5aBMSHOyj-j190",
    autorun: true
});

bot.on('ready', function() {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.on('message', function(user, userID, channelID, message, event) {
    if (message === "eddy") {
        bot.sendMessage({
            to: channelID,
            message: "God Eddy*"
        });
    }else if (message.toLowerCase() == "am i noob?"){
      if (userID=="144196515076767744"){
        bot.sendMessage({
            to: channelID,
            message: "No, you're not!"
        });
      }else{
        bot.sendMessage({
            to: channelID,
            message: "Of course you are, probably even noober than noobs"
        });
      }
    }
});
