const fetch = require('node-fetch');
const { config } = require('../config/config.js');  
const chalk = require('chalk');

const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, ENABLE_TELEGRAM_NOTIFICATIONS } = config;

async function sendTelegramMessage(message, parseMode = 'Markdown') {
  if (!ENABLE_TELEGRAM_NOTIFICATIONS) {
    console.log(chalk.yellow('Telegram notifications are disabled.'));
    return;
  }

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const params = {
    chat_id: TELEGRAM_CHAT_ID,
    text: message,
    parse_mode: parseMode,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    });

    const data = await response.json();
    if (!data.ok) {
      console.error(chalk.red('Error sending message to Telegram:'), data.description);
    }
  } catch (error) {
    console.error(chalk.red('Error sending message to Telegram:'), error);
  }
}

module.exports = { sendTelegramMessage };
