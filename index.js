const { Client, Intents } = require('discord.js');
// Create a new client instance
const client = new Client({ intents: [GUILDS", "GUILD_MESSAGES] });

require('discord-inline-reply');

const fetch = require('node-fetch');


const {channelId ,
activity,apikey,bid } = require("./config.json");



client.on("ready", () => {  console.log("Ready for chatting dont forget to join my server");
                       
       


                        client.user.setActivity(activity, { type: "WATCHING"});

                                             

  
});

client.on("message", async message => {
  if(message.channel.id == channelId){
  if(message.author.bot) return;
  /*  fetch(`http://api.brainshop.ai/get?bid=${bid}&key=${apikey}&uid=${message.author.id}&msg=${encodeURIComponent(message.content)}`)
         
      .then(res => res.json())
      
    .then(data => {
   */  
    
    
  fetch(`http://api.brainshop.ai/get?bid=${bid}&key=${apikey}&uid=${message.author.id}&msg=${encodeURIComponent(message.content)}`).then(response=> response.json()).then(data=>{
         message.lineReply(`${data.cnt}`);        
        }).catch(error=>{


var Errembed = new MessageEmbed()

    .setColor("RED")
    .setAuthor("Yue got a problem")

.setTitle("Problem occurred on the api!")
    .setDescription(`**Error⚠️:** ${error}`)
.setTimestamp()
.setFooter("Please wait until it is fixed 😉");




    
    message.lineReply(Errembed);   
        });  
    
  
      message.channel.stopTyping();
    
  }}); 
    

  
client.login(process.env.TOKEN); //login using the process env
