import React, { useState } from 'react';

const communities = [
  { id: 1, name: "ECE-CTD", members: 120 },
  { id: 2, name: "App Dev", members: 85 },
  { id: 3, name: "Data Science", members: 90 },
  // Add more communities as needed
];

const initialMessages = {
  1: [
    { user: "Amit", text: "Web Dev ka scene mast hai yaar!", time: "10:00 AM" },
    { user: "Priya", text: "Bilkul! Main bhi excited hoon.", time: "10:05 AM" },
  ],
  2: [
    { user: "Raj", text: "App Dev ke naye features dekhne ko mil rahe hain!", time: "9:00 AM" },
    { user: "Simran", text: "Haan, abhi latest update dekha!", time: "9:15 AM" },
  ],
  3: [
    { user: "Ravi", text: "Data Science ka future bright hai!", time: "8:30 AM" },
    { user: "Neha", text: "Bilkul! Machine Learning trends dekh rahe ho?", time: "8:45 AM" },
  ],
};

const onlineUsers = {
  1: ["Amit", "Priya", "You"],
  2: ["Raj", "Simran", "You"],
  3: ["Ravi", "Neha", "You"],
};

const CommunityChat = () => {
  const [selectedCommunity, setSelectedCommunity] = useState(1);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const updatedMessages = {
        ...messages,
        [selectedCommunity]: [
          ...messages[selectedCommunity],
          { user: "You", text: newMessage, time }
        ]
      };
      setMessages(updatedMessages);
      setNewMessage('');
    }
  };

  const getProfileGradient = (user) => {
    const gradients = {
      "Amit": "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
      "Priya": "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600",
      "Raj": "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
      "Simran": "bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600",
      "Ravi": "bg-gradient-to-r from-blue-500 via-teal-500 to-green-500",
      "Neha": "bg-gradient-to-r from-red-500 via-pink-500 to-purple-600",
      "You": "bg-gradient-to-r from-gray-500 via-gray-700 to-black"
    };
    return gradients[user] || "bg-gradient-to-r from-gray-300 to-gray-500";
  };

  return (
    <div className="flex h-[90vh] bg-gray-100 text-gray-900">
      {/* Sidebar */}
      <aside className="w-1/4 bg-white p-4 border-r shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Communities</h2>
        <div className="space-y-2">
          {communities.map(community => (
            <div
              key={community.id}
              className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                selectedCommunity === community.id ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'
              }`}
              onClick={() => setSelectedCommunity(community.id)}
            >
              <p className="font-medium">{community.name}</p>
              <p className="text-xs text-gray-500">{community.members} members</p>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-4">
        {/* Chat Header */}
        <header className="flex items-center justify-between p-3 bg-white rounded-lg mb-4 shadow">
          <h2 className="text-lg font-semibold">{communities.find(c => c.id === selectedCommunity).name}</h2>
          
          <p className="text-sm text-gray-500"> 🟢 {onlineUsers[selectedCommunity].length} log online hain</p>
        </header>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white rounded-lg shadow-inner">
          {messages[selectedCommunity]?.map((msg, index) => (
            <div key={index} className={`flex ${msg.user === "You" ? 'justify-end' : 'justify-start'}`}>
              <div className="flex items-start space-x-3">
                <div className={`w-10 h-10 rounded-full ${getProfileGradient(msg.user)}`}></div>
                <div className={`p-3 rounded-lg max-w-xs transition-all duration-200 ${
                  msg.user === "You" ? 'bg-black text-white' : 'bg-gray-200 text-gray-900'
                }`}>
                  <p className="text-sm font-semibold">{msg.user}</p>
                  <p className="text-sm">{msg.text}</p>
                  <p className="text-xs text-gray-400 mt-1">{msg.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <footer className="mt-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type a message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 p-3 border border-gray-300 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              onClick={handleSendMessage}
              className="bg-black font-semibold text-white p-3 rounded-r-xl hover:bg-blue-600 transition-all duration-200"
            >
              Send
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default CommunityChat;