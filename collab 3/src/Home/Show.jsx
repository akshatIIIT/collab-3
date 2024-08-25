import React from 'react';

const Home = () => {
  return (
    <div className="lg:h-[40vh] h-auto bg-white flex flex-col justify-center items-center md:flex-row md:items-center mt-32 mb-20 px-10 ">
      {/* Left Section */}
      <div className="md:w-1/2 p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-5">
          Showcase and Collaborate on Student Projects
        </h1>
        <p className="text-lg text-gray-600">
          Join a platform where students from various universities collaborate, share, and showcase their innovative projects to a broader audience.
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 p-8 flex justify-center">
        <div className="relative">
          {/* Image */}
          <img src="/dis.png" alt="Student Collaboration" className="max-w-full h-auto" />

          {/* Overlay */}
          {/* <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center p-4"> */}
            {/* <h2 className="text-2xl font-semibold text-gray-800 mb-4">Collaborations</h2> */}
            {/* <div className="text-gray-600">
              <p>Engage in discussions, share ideas, and get feedback on your projects from fellow students and professionals.</p>
              <ul className="mt-4">
                <li className="flex items-center justify-between text-sm mb-2">
                  <span className="font-semibold">Project Ideas</span>
                  <span className="text-gray-400">10 New Discussions</span>
                </li>
                <li className="flex items-center justify-between text-sm mb-2">
                  <span className="font-semibold">Collaboration Requests</span>
                  <span className="text-gray-400">24 New Requests</span>
                </li>
                <li className="flex items-center justify-between text-sm mb-2">
                  <span className="font-semibold">Feedback and Suggestions</span>
                  <span className="text-gray-400">5 New Replies</span>
                </li>
                <li className="flex items-center justify-between text-sm">
                  <span className="font-semibold">General Discussions</span>
                  <span className="text-gray-400">19 New Replies</span>
                </li>
              </ul>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;