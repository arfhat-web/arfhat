module.exports.config = { usePrefix: true,
	name: "linux",
	version: "7.3.1",
	hasPermssion: 2,
	credits: "Arfhat",
	description: "running shell",
	commandCategory: "admin",
	usages: "[shell]",
	cooldowns: 0,
	dependencies: {
		"child_process": ""
	}
};
module.exports.run = async function({ api, event, args, Threads, Users, Currencies, models }) {    
const { exec } = require("child_process");
const permission = global.config.GOD;
  if (! permission.includes(event.senderID)) 
return api.sendMessage("LOL", event.threadID, event.messageID);
let text = args.join(" ")
exec(`${text}`, (error, stdout, stderr) => {
    if (error) {
        api.sendMessage(`error: \n${error.message}`, event.threadID, event.messageID);
        return;
    }
    if (stderr) {
        api.sendMessage(`stderr:\n ${stderr}`, event.threadID, event.messageID);
        return;
    }
    api.sendMessage(`stdout:\n ${stdout}`, event.threadID, event.messageID);
});
}