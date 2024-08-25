import React, { useState } from 'react';

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { user: 'bot', text: 'Hello! How can I assist you today?' }
  ]);
  const [userInput, setUserInput] = useState('');

  const capabilities = {
    reminder: 'Set a reminder',
    joke: 'Tell a joke',
    time: 'Get current time',
    date: 'Get current date'
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== '') {
      const newMessages = [
        ...messages,
        { user: 'user', text: userInput }
      ];

      // Update messages to include the user's message
      setMessages(newMessages);
      setUserInput('');

      // Simulate bot response after a short delay
      setTimeout(() => {
        handleBotResponse(userInput);
      }, 500); // Slight delay to simulate processing
    }
  };

  const handleBotResponse = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase();
  
    let botMessage = 'Sorry, I didn’t understand that. Can you please rephrase?';
  
    if (lowerCaseInput.includes('hello') || lowerCaseInput.includes('hi')) {
      botMessage = 'Hello! How can I help you today?';
    } 
    else if (lowerCaseInput.includes('how are you') || lowerCaseInput.includes('how are you doing')) {
      botMessage = 'I\'m just a bot, but I\'m doing great! How can I assist you today?';
    } 
    else if (lowerCaseInput.includes('thank you') || lowerCaseInput.includes('thanks')) {
      botMessage = 'You\'re welcome! If you have any more questions, feel free to ask.';
    }
    else if (lowerCaseInput.includes('reminder')) {
      botMessage = 'You can set a reminder by clicking on the + button and choosing "Set Reminder".';
    } 
    else if (lowerCaseInput.includes('what is your name')) {
      botMessage = 'I am your friendly chatbot, here to assist you!';
    } 
    else if (lowerCaseInput.includes('what can you do')) {
      botMessage = `I can help you with the following:\n${Object.entries(capabilities).map(([key, value]) => `- ${value}`).join('\n')}`;
    }
    else if (lowerCaseInput.includes('joke')) {
      botMessage = 'Why don’t scientists trust atoms? Because they make up everything!';
    } 
    else if (lowerCaseInput.includes('help')) {
      botMessage = 'Sure, I’m here to help! What do you need assistance with?';
    } 
    else if (lowerCaseInput.includes('time') || lowerCaseInput.includes('date')) {
      const now = new Date();
      botMessage = `It is currently ${now.toLocaleTimeString()} on ${now.toLocaleDateString()}.`;
    }
    else if (Object.keys(capabilities).some(key => lowerCaseInput.includes(key))) {
      botMessage = `Performing the requested action: ${lowerCaseInput}.`;
      // Handle specific actions based on the user's request
      handleAction(lowerCaseInput);
    }
  
    // Append the bot's response to the message list
    setMessages(prevMessages => [...prevMessages, { user: 'bot', text: botMessage }]);
  };

  const handleAction = (userInput) => {
    const lowerCaseInput = userInput.toLowerCase();
    if (lowerCaseInput.includes('reminder')) {
      setMessages(prevMessages => [...prevMessages, { user: 'bot', text: 'Reminder functionality is not yet implemented.' }]);
    } 
    else if (lowerCaseInput.includes('joke')) {
      setMessages(prevMessages => [...prevMessages, { user: 'bot', text: 'Why don’t scientists trust atoms? Because they make up everything!' }]);
    } 
    else if (lowerCaseInput.includes('time') || lowerCaseInput.includes('date')) {
      const now = new Date();
      setMessages(prevMessages => [...prevMessages, { user: 'bot', text: `It is currently ${now.toLocaleTimeString()} on ${now.toLocaleDateString()}.` }]);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-2xl max-w-lg w-full relative">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
      >
        ✕
      </button>
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Chat Bot</h2>
      <div className="flex flex-col space-y-4 mb-6 max-h-80 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.user === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`p-4 rounded-xl max-w-xs ${
                message.user === 'user' ? 'bg-black text-white' : 'bg-gray-200 text-gray-900'
              } shadow-md`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Type a message"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleSendMessage}
          className="bg-black text-white p-3 rounded-r-lg hover:bg-slate-800 transition-all duration-200 px-5"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;