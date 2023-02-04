const Chat = require('clever-chat')
require("./inline.js");
const chatSend = async (message) => {
  const chat = new Chat({ name: "//Settings™", gender: "male", developer_name: "Nazmul", user: message.author.id, language: "en" });

  message.channel.startTyping()
  let reply = await chat.chat(message.content).then(reply => {
    message.sendInline(reply, { allowedMentions: { repliedUser: false } });
    //you can set it to true!
    message.channel.stopTyping()

  })
  console.log(reply)
}

module.exports = {
  chatSend
};