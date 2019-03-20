const Discord = require('discord.js');
const client = new Discord.Client();

global.currentTeamMembers = [];
global.servers = {};



 client.on("ready", () => {
  console.log("You are connected to " + client.guilds.size + " servers!");
  client.user.setGame("󠀀󠀀󠀀󠀀| 𝙏𝙃𝙄𝙎 𝙄𝙎 𝘾𝙊𝙈𝙈𝙐𝙉𝙄𝙏𝙔 𝙎𝙀𝙍𝙑𝙀𝙍 |  󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀  󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀 󠀀󠀀󠀀󠀀 󠀀󠀀 󠀀󠀀󠀀󠀀 󠀀󠀀𝙊𝙬𝙣𝙚𝙧 : 𝙈𝙤𝙪𝙨𝙚𝙒𝙚𝙚𝙙", "https://www.twitch.tv/mouseweed")
});    


client.on('message', msg => {
  if (msg.content === 'Hello') {
    msg.reply('Hello my friend ♥');
  }

  client.on('message', message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;
  
    if (message.content === '/join') {
      // Only try to join the sender's voice channel if they are in one themselves
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection
            message.reply('I have successfully connected to the channel!');
          })
          .catch(console.log);
      } else {
        message.reply('You need to join a voice channel first!');
      }
    }
  });

  client.on('message', message => {
    // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;
  
    if (message.content === '/leave') {
      // Only try to join the sender's voice channel if they are in one themselves
      if (message.member.voiceChannel) {
        message.member.voiceChannel.leave()
          .then(connection => { // Connection is an instance of VoiceConnection
            message.reply('I have successfully connected to the channel!');
          })
          .catch(console.log);
      } else {
        message.reply('You need to join a voice channel first!');
      }
    }
});










  
});

client.login('NTIyMDM0MTY4OTMxMjg3MDcw.D3J9Eg.NEgaYU_Uqi-Wny9fCdR_pFqERbI');
