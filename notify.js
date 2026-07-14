const axios = require('axios');
require('dotenv').config();

async function notificar(mensagem) {
  const token = process.env.TELEGRAM_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  await axios.post(url, {
    chat_id: chatId,
    text: mensagem
  });
}

module.exports = notificar;