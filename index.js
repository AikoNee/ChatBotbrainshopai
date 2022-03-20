const uptime = require("uptime-express")
uptime.start(443)

const express = require('express');
const path = require('path');
const app = express();
const port = 443;

 //require('http').createServer((req, res) => res.end('Bot is alive!')).listen(3000)

app.listen(port, () => {
  console.log('Listening on port', port);
});

setInterval(async ()=>{
  console.log("30 seconds has passed") 
   
},30000);





const { Client } = require("discord.js");
require('discord-inline-reply');
const client = new Client;
const fetch = require('node-fetch');


const {chanelId ,
activity,apikey,bid } = require("./config.json");



client.on("ready", () => {  console.log("Ready for chatting dont forget to join my server");
                       
       


                        client.user.setActivity(activity, { type: "WATCHING"});

                                             

  
});

client.on("message", async msg => {
  if(msg.channel.id === chanelId){
  if(msg.author.bot) return;
 msg.channel.startTyping();
   fetch( 
   `http://api.brainshop.ai/get?bid=${bid}&key=${apikey}&uid=${msg.author.id}&msg=${msg.content}`)
    
    .then(response => response.json())
    .then(data => {
msg.lineReply(data.cnt)
msg.channel.stopTyping();})
  }});
  
client.login(process.env.TOKEN); //login using the process env
