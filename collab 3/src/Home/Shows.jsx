import React from 'react';

const Kagglers = () => {
  // Dummy data for avatars with gradients
  const kagglers = [
    { id: 1, gradient: 'bg-gradient-to-r from-green-400 to-blue-500', borderColor: 'border-white' },
    { id: 2, gradient: 'bg-gradient-to-r from-blue-400 to-purple-500', borderColor: 'border-white' },
    { id: 3, gradient: 'bg-gradient-to-r from-red-400 to-pink-500', borderColor: 'border-white' },
    { id: 4, gradient: 'bg-gradient-to-r from-yellow-400 to-orange-500', borderColor: 'border-white' },
    // Add more gradients as necessary
  ];

  return (
    <div className="min-h-[55vh] bg-white flex flex-col justify-center items-center p-8">
      <div className="w-full md:w-3/4 lg:w-2/3 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl">
        {/* Text Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Who are Collaborators?</h2>
          <p className="text-lg text-gray-600 mt-4">
            Collaborators on this platform include students, mentors, and industry professionals. They engage in project development, share knowledge, and work together to create impactful solutions across various domains.
          </p>
        </div>

        {/* Gradient Avatars Section */}
        <div className="flex flex-wrap justify-center gap-4">
          {kagglers.map((kaggler) => (
            <div
              key={kaggler.id}
              className={`w-16 h-16 rounded-full border-4 ${kaggler.borderColor} overflow-hidden`}
            >
              <div className={`w-full h-full ${kaggler.gradient}`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kagglers;