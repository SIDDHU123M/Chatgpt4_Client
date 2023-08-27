## ChatGPT 4 Client

https://github.com/SIDDHU123M/node-ChatGPT4-Client/assets/76509525/eabef0bd-4575-470f-b7f2-255dd0dd1b8a


### Description:
The **ChatGPT Node Client** is a Node.js script that interacts with the [ChatGPT](https://chatgpt.ai/) API to have a conversation with the ChatGPT AI model. This script sends a user's input question to the ChatGPT API and receives a response from the AI model, allowing for interactive conversations.

### Prerequisites:
Before using the ChatGPT Node Client, make sure you have the following dependencies installed in your Node.js environment:
- **node-fetch**: This library is used to make HTTP requests to the ChatGPT API.
- **form-data**: This library is used to handle multipart/form-data for sending data in HTTP requests.
- **readline**: This module provides an interface for reading input from the command line.

You can install these dependencies using the following commands:
```sh
npm install node-fetch@2 form-data
```

### Installation and Usage:
1. Clone or download the repository containing the ChatGPT Node Client code.

2. Open a terminal window and navigate to the directory containing the downloaded code.

3. Run the following command to execute the script:
```sh
node index.js
```

4. The script will prompt you to enter a question. Type your question and press Enter.

5. The script will send your question to the ChatGPT API and display the AI's response.

6. You can continue the conversation by entering more questions when prompted.

### Code Explanation:
- The script starts by importing the necessary libraries: `node-fetch` for making HTTP requests and `form-data` for handling form data.

- The `chatgpt` function is defined, which performs the interaction with the ChatGPT API. It extracts necessary information from the initial response, constructs the necessary headers and form data, and sends a POST request to the API.

- The `readline` module is used to create an interface for reading input from the command line.

- The script prompts the user to enter a question using `rl.question`. Upon receiving the question, it calls the `chatgpt` function and logs the AI's response to the console.

### Configuration:
In the code, you can find the following headers that are used in the HTTP requests:
```javascript
const headers = {
  'authority': 'chatgpt.ai',
  'origin': 'https://chatgpt.ai',
  // ... other headers ...
};
```
These headers are used to provide necessary information in the requests. If there are changes to the ChatGPT API or its endpoints, you may need to adjust these headers accordingly.

### Disclaimer:
Please note that this script is provided for educational purposes and personal use. Usage of the ChatGPT API may be subject to terms of use or limitations imposed by OpenAI. Always ensure you comply with the relevant usage guidelines.

### License:
This script is provided under the [MIT License](https://opensource.org/licenses/MIT).
