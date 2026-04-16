// controllers/contactController.js

// send message
const sendMessage = async (req, res) => {
  res.json({ message: "Contact message sent" });
};

// get messages
const getMessages = async (req, res) => {
  res.json({ message: "Get messages working" });
};

module.exports = {
  sendMessage,
  getMessages,
};