// npm uninstall node-fetch
// npm install node-fetch@2
// npm install node-fetch form-data


const fetch = require('node-fetch');
const FormData = require('form-data');
const readline = require('readline');

async function chatgpt(chat) {
  const response1 = await fetch('https://chatgpt.ai/');
  const text = await response1.text();

  const nonce = text.match(/data-nonce="(.*)"/)[1];
  const post_id = text.match(/data-post-id="(.*)"/)[1];
  const bot_id = text.match(/data-bot-id="(.*)"/)[1];

  const headers = {
    'authority': 'chatgpt.ai',
    'origin': 'https://chatgpt.ai',
    'pragma': 'no-cache',
    'referer': 'https://chatgpt.ai/gpt-4/',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
  };

  let formData = new FormData();

  formData.append('_wpnonce', nonce);
  formData.append('post_id', post_id);
  formData.append('url', 'https://chatgpt.ai/gpt-4');
  formData.append('action', 'wpaicg_chat_shortcode_message');
  formData.append('message', chat);
  formData.append('bot_id ', bot_id);

  const response2 = await fetch('https://chatgpt.ai/wp-admin/admin-ajax.php', {
    method: 'POST',
    headers: {...headers, ...formData.getHeaders()},
    body: formData,
  });

  const json = await response2.json();
  return json['data'];
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your question: ", function(question) {
  chatgpt(question)
  .then(reply => {
    console.log(reply);
    rl.close();
  }) 
  .catch(err => console.error(err));
});
