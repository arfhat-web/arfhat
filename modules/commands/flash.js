module.exports.config = { 
    usePrefix: true,
    name: "flash",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "SAMI",
    description: "Restart Bot",
    commandCategory: "system",
    usages: "restart",
    cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
    const { threadID, messageID } = event;

    setTimeout(() => {
        api.setMessageReaction("3️⃣", event.messageID, (err) => {
            if (err) console.error("Error setting reaction:", err);
        }, true);
    }, 1000);

    setTimeout(() => {
        api.setMessageReaction("2️⃣", event.messageID, (err) => {
            if (err) console.error("Error setting reaction:", err);
        }, true);
    }, 2000);

    setTimeout(() => {
        api.setMessageReaction("1️⃣", event.messageID, (err) => {
            if (err) console.error("Error setting reaction:", err);
        }, true);
    }, 3000);

setTimeout(() => {
  api.setMessageReaction("✅", event.messageID, (err) => {
    if (err) console.error("Error setting reaction:", err);
  }, true);
}, 4000);

    setTimeout(() => {
        api.sendMessage(`🔄 | Sami System Restarting....`, threadID, () => process.exit(1));
    }, 5000);
}
