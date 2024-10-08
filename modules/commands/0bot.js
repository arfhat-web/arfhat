const axios = require("axios");
const URL = global.config.ApiUrl;
module.exports.config = {
    name: "bot",
    version: "1",
    hasPermission: 0,
    credits: "Arfhat.Imtiaz",
    description: "Simsimi",
    usages: "Message",
    commandCategory: "ai",
    cooldowns: 5
};
 
module.exports.run = async ({ api, event, args }) => {
    try {
        let message = args.join(" ");
        if (!message) {
            return api.sendMessage(`Hi, I am an A.i(Artificial Intelligence)🧠, which is made by @Arfhat Islam.\nUse "/bot (question?)".✅`, event.threadID, event.messageID);
        }
  
  
        const response = await axios.get(`https://gpt-19zs.onrender.com/gpt4?prompt=${message}`);
        const respond = response.data.message;
        api.sendMessage(respond, event.threadID, event.messageID);
    } catch (error) {
        console.error("An error occurred:", error);
        api.sendMessage("Oops! Something went wrong.", event.threadID, event.messageID);
    }
};
