import React from 'react';

const KaggleSection = () => {
  return (
    <div className="bg-white p-8">
      <h1 className="text-center text-3xl font-semibold mb-8 font-mono tracking-wide">Who is on Collab?</h1>
      <div className="flex justify-around items-center">
        {/* Students Section */}
        <div className="flex flex-col items-center text-center">
          <img 
            src="dev.png" 
            alt="Students" 
            className="w-20 h-20 mb-4" 
          />
          <h3 className="text-lg font-semibold">Students</h3>
          <p className="text-gray-600">Submit and showcase your projects to gain recognition.</p>
        </div>

        {/* Collaborators Section */}
        <div className="flex flex-col items-center text-center">
          <img 
            src="learn.png" 
            alt="Collaborators" 
            className="w-20 h-20 mb-4" 
          />
          <h3 className="text-lg font-semibold">Collaborators</h3>
          <p className="text-gray-600">Connect and collaborate on projects with peers.</p>
        </div>

        {/* Employers Section */}
        <div className="flex flex-col items-center text-center">
          <img 
            src="re.png" 
            alt="Employers" 
            className="w-20 h-20 mb-4" 
          />
          <h3 className="text-lg font-semibold">Employers</h3>
          <p className="text-gray-600">Discover talent and innovative projects for recruitment.</p>
        </div>
      </div>
    </div>
  );
};

export default KaggleSection;