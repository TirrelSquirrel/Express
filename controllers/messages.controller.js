const path = require("path");

function getMessages(req, res) {
  //res.sendFile(path.join(__dirname, "..", "public", 'images' ,"image.png"));
  res.render('messages', {
    title: 'Mensajes pa mis colegas',
    friend: 'Broski'
  })
}

function postMessage(req, res) {
  console.log("Updating messages...");
}

module.exports = {
  getMessages,
  postMessage,
};
