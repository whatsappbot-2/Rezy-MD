const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/whatsappbot-2/Rezy-MD_Image_Maker/blob/main/ALIVE.jpeg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 Rezy-MD Is Alive Now😍*",
BOT_OWNER: '94761203755',  // Replace with the owner's phone number



};
