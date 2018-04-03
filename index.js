const discord = require("discord.js"); //discord pack !

const PREFIX = "!";

var bot = new discord.Client(); //the client of the bot

const TOKEN = "NDMwNDE2ODI5MDgxNTgzNjI3.DaP4bQ.meD0HDNq7aWnwwathfgwxlhveyU";//bot token !


bot.on("ready", function(){
    console.log("Ready"); //sends in the console a message that says hello!
    bot.user.setGame("!help");
}); //a event in all time the bot is working its gonna say in the console:"ready !"
music(Bot, {
	prefix: '-',        // Prefix of '-'.
	global: false,      // Server-specific queues.
	maxQueueSize: 10,   // Maximum queue size of 10.
	clearInvoker: true, // If permissions applicable, allow the bot to delete the messages that invoke it (start with prefix)
    channel: 'music'    // Name of voice channel to join. If omitted, will instead join user's voice channel.
});


bot.on("message", function(message){
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;
    var args = message.content.substring(PREFIX.length).split(" ");
    switch (args[0])
      {
        case "help":
        message.channel.sendMessage("```"+"lol"+"```");
        break;
        case "youtube":
          message.channel.sendMessage("הנה קישור לערוץ שלי :https://www.youtube.com/channel/UCPjlh_gw2c3ZFalb2Dv2OtA");
          break;
          case play:

            break;
        }
      });
bot.login(TOKEN);//Logins the bot to the discord api , must be the lastest line in the script !
