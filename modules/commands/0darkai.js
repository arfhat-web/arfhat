const axios = require("axios");
const APIUrl = global.config.ApiUrl;
const APIKEY = "SAKI-BIN-SWT56X";
module.exports.config = {
    name: "black",
    version: "1",
    hasPermission: 0,
    credits: "Arfhat",
    description: "Blackbox A.i",
    usages: "Message",
    commandCategory: "...",
    cooldowns: 0
};

module.exports.run = async ({ api, event, args }) => {
    try {
     let prompt = args.join("");
        if (!prompt) {
            return api.sendMessage(`➤ Hi, I'm MR. Black from Arfhat D-Base..🎩`, event.threadID, event.messageID);
        }

        const response = await axios.get(`${APIUrl}/api/blackbox?prompt=${prompt}&apikey=SAKI-BIN-SWT56X`);
        const respond = response.data.message;
        api.sendMessage(respond, event.threadID, event.messageID);
    } catch (error) {
        console.error("An error occurred:", error);
        api.sendMessage("Oops! Something went wrong.", event.threadID, event.messageID);
    }
};
