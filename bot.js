const Discord = require('discord.js');
const client = new Discord.Client(); 
client.on("ready", () => {
  client.user.setActivity("امارس اعمالي عادي رغم اني مريض", {type:'PLAYING'});

    });


client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
