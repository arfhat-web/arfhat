module.exports.config = { usePrefix: true,
name: "spam",
	version: "",
	hasPermssion: 2,
	credits: "SAMI",
	description: "blast the bos in 1 sec",
	commandCategory: "Admin",
	usages: "",
	cooldowns: 5,
	dependencies: "",
};

module.exports.run = function ({ api, event, Users }) {
	var { threadID, messageID } = event;
	var k = function (k) { api.sendMessage(k, threadID)};

	//*vonglap
	
for (i = 0; i < 200; i++) {
 k("Topic Change..");
}
	
	}
	