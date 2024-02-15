const path = require("path");

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "image.png"));
  //res.send("<ul><li>Heeey Mike!</li></ul>");
}

function postMessage(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessage,
};
