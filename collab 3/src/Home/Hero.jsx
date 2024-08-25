import React, { useState } from 'react';
import ChatBot from './ChatBot'; // Import the ChatBot component
import './style.css';

export function Hero() {
  const [showOptions, setShowOptions] = useState(false);
  const [showReminderPopup, setShowReminderPopup] = useState(false);
  const [showAlarmPopup, setShowAlarmPopup] = useState(false);
  const [showChatbotPopup, setShowChatbotPopup] = useState(false);
  const [showVideoPopup, setShowVideoPopup] = useState(false); // New state for video popup
  const [reminderText, setReminderText] = useState('');

  const handleOpenOptions = () => {
    setShowOptions(!showOptions); // Toggle the options menu
  };

  const handleOpenReminderPopup = () => {
    setShowReminderPopup(true);
    setShowOptions(false); // Close options menu
  };

  const handleOpenChatbotPopup = () => {
    setShowChatbotPopup(true);
    setShowOptions(false); // Close options menu
  };

  const handleOpenVideoPopup = () => {
    setShowVideoPopup(true);
    setShowOptions(false); // Close options menu
  };

  const handleClosePopup = () => {
    setShowReminderPopup(false);
    setShowAlarmPopup(false);
    setShowChatbotPopup(false);
    setShowVideoPopup(false); // Close video popup
  };

  const handleSubmitReminder = (event) => {
    event.preventDefault();

    const task = event.target.task.value;
    const customTime = event.target.customTime.value;
    const timeUnit = event.target.timeUnit.value;

    // Convert the custom time to milliseconds
    let timeInMilliseconds;
    if (timeUnit === 'seconds') {
      timeInMilliseconds = customTime * 1000;
    } else if (timeUnit === 'minutes') {
      timeInMilliseconds = customTime * 60000;
    } else if (timeUnit === 'hours') {
      timeInMilliseconds = customTime * 3600000;
    }

    setReminderText(task);
    setShowReminderPopup(false);

    setTimeout(() => {
      setShowAlarmPopup(true);
    }, timeInMilliseconds);
  };

  return (
    <div className="h-[90vh] w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-8 relative">
      {/* Image */}
      <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
        <img src="/Peeps.png" alt="Community" className="w-full max-w-lg md:max-w-xl h-auto lg:mr-60" />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center text-center md:text-left max-w-lg mx-auto md:mx-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 font-monument tracking-wider">
          Your <span className="text-black drop-shadow-sm">Collaboration</span> Partner
        </h1>
        <p className="text-base md:text-lg text-gray-700">
          Join to collaborate, share, and showcase innovative projects across various disciplines. Explore a vast repository of community-published projects,
          resources, and tools to enhance your learning and development journey. Receive feedback from peers and mentors, and connect with potential employers—all in one integrated platform.
        </p>
      </div>

      {/* Floating Image Button */}
      <img
        src="Bot.avif" // Path to your image file
        alt="Options"
        className="bot-icon fixed bottom-10 right-10 w-36 h-36 cursor-pointer transition-all z-50"
        onClick={handleOpenOptions}
      />

      {/* Options Menu */}
      {showOptions && (
        <div className="fixed bottom-28 right-10 flex flex-col space-y-2 z-50 mb-16">
          <button
            className="w-32 bg-white text-black p-2 rounded-lg shadow-md hover:bg-gray-200"
            onClick={handleOpenReminderPopup}
          >
            Set Reminder
          </button>
          <button
            className="w-32 bg-white text-black p-2 rounded-lg shadow-md hover:bg-gray-200"
            onClick={handleOpenChatbotPopup}
          >
            Chat Bot
          </button>
          <button
            className="w-32 bg-white text-black p-2 rounded-lg shadow-md hover:bg-gray-200"
            onClick={handleOpenVideoPopup}
          >
            Surprise
          </button>
        </div>
      )}

      {/* Reminder Popup */}
      {showReminderPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full relative">
            <h2 className="text-2xl font-semibold mb-4">Set a Reminder</h2>
            <form onSubmit={handleSubmitReminder}>
              <div className="mb-4">
                <label htmlFor="task" className="block text-sm font-medium text-gray-700">
                  Task
                </label>
                <input
                  type="text"
                  id="task"
                  name="task"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="customTime" className="block text-sm font-medium text-gray-700">
                  Time
                </label>
                <input
                  type="number"
                  id="customTime"
                  name="customTime"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="timeUnit" className="block text-sm font-medium text-gray-700">
                  Time Unit
                </label>
                <select
                  id="timeUnit"
                  name="timeUnit"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="seconds">Seconds</option>
                  <option value="minutes">Minutes</option>
                  <option value="hours">Hours</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-4 text-gray-500 hover:text-gray-700"
                  onClick={handleClosePopup}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-800"
                >
                  Set Reminder
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Alarm Popup */}
      {showAlarmPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full relative">
            <h2 className="text-2xl font-semibold mb-4">Reminder!</h2>
            <p>{reminderText}</p>
            <button
              className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-800"
              onClick={handleClosePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Chatbot Popup */}
      {showChatbotPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <ChatBot onClose={handleClosePopup} />
        </div>
      )}

      {/* Video Popup */}
      {showVideoPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={handleClosePopup}
            >
              X
            </button>
            <video
              controls
              autoPlay
              className="w-full h-auto"
              src="/vid-3.mp4"
              type="video/mp4"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
