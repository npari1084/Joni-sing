const fs = require("fs");
module.exports.config = {
  name: "iloveu",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "",
  prefix: false,
  category: "user",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("I love you")==0 || (event.body.indexOf("i love you")==0 || (event.body.indexOf("I love u")==0 || (event.body.indexOf("I love you")==0)))) {
		var msg = {
				body: "Hmm... বস নিয়াজও তোমাকে ভালোবাসে😇😻 :))"
    }
			api.sendMessage(msg, threadID, messageID);
		};
	if (event.body.indexOf("@Imrose /Muskan")==0 || (event.body.indexOf("@Imrose /Muskan")==0 || (event.body.indexOf("@Imrose /Muskan")==0 || (event.body.indexOf("@Imrose /Muskan")==0)))) {
		var msg = {
				body: "কেউ নজর দিবা না মুসকান ভাবি শুধু নিয়াজ বসের বউ 🥰"
    }
			api.sendMessage(msg, threadID, messageID);
		};

	if (event.body.indexOf("Admin")==0 || (event.body.indexOf("admin")==0 || (event.body.indexOf("Admin")==0 || (event.body.indexOf("admin")==0)))) {
		var msg = {
				body: "Name      : Niyaz\\\Facebook  : Niyaz Mursid Nibir\\\Religion  : Islam\\\𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: Dinajpur\\\𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: Dinajpur\\\𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐚𝐥𝐞\\\𝐀𝐠𝐞           : 22+\\\𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐒𝐢𝐧𝐠𝐥𝐞\\\𝐖𝐨𝐫𝐤        : Job, Computer lab operator \\\𝐆𝐦𝐚𝐢𝐥       : nibir8897@gmail.com\\\𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: Dibo na\\\𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : 😐\\\𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/profile.php?id=100075317974618"
    }
			api.sendMessage(msg, threadID, messageID);
		};
	if (event.body.indexOf("Niyaz k")==0 || (event.body.indexOf("Niyaz k")==0 || (event.body.indexOf("Niyaz K")==0 || (event.body.indexOf("Niyaz K")==0)))) {
		var msg = {
				body: "আমার বস💝"
    }
			api.sendMessage(msg, threadID, messageID);
		};


	if (event.body.indexOf("@Misty Islam")==0 || (event.body.indexOf("@Misty Islam")==0 || (event.body.indexOf("Misty")==0 || (event.body.indexOf("misty")==0)))) {
		var msg = {
				body: "কেউ নজর দিবানা মিষ্টি ভাবি শুধু আরিয়ান ভাইয়ের🤭 "
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
