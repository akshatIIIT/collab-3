import React from 'react';

const MyProjects = () => {
  const projects = [
    {
      name: "My React Project",
      description: "A web app built with React and Firebase for managing tasks.",
      gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
      status: "In Progress",
      tags: ["React", "Firebase", "JavaScript"],
      lastUpdated: "2 days ago",
      image: "mypost-1.png", // Specific image for this project
      likes: 120,
      comments: 45,
    },
    {
      name: "Portfolio Website",
      description: "Personal portfolio showcasing my work and skills.",
      gradient: "linear-gradient(135deg, #f5d7e3 0%, #f5e4e2 100%)",
      status: "Completed",
      tags: ["HTML", "CSS", "JavaScript"],
      lastUpdated: "1 week ago",
      image: "mypost-2.png", // Specific image for this project
      likes: 75,
      comments: 30,
    },
    // Add more projects here
  ];

  const handleEdit = (project) => {
    // Logic to edit the project
    console.log('Editing project:', project.name);
  };

  const handleDelete = (project) => {
    // Logic to delete the project
    console.log('Deleting project:', project.name);
  };

  const handleViewDetails = (project) => {
    // Logic to view project details
    console.log('Viewing details of project:', project.name);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white px-4 md:px-10">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white p-4 mb-4 md:mb-0">
        <h2 className="text-xl font-semibold mb-4">Project Management</h2>
        <button className="w-full text-left text-gray-700 mb-4">Create New Project</button>
        <button className="w-full text-left text-gray-700 mb-4">View All Projects</button>
        <button className="w-full text-left text-gray-700 mb-4">Manage Categories</button>
        <button className="w-full text-left text-gray-700 mb-4">Project Reports</button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6">
        {/* Header */}
        <div className="bg-white p-4 mb-6 flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-xl font-semibold">My Projects</h1>
        </div>

        {/* Projects */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-3 md:p-5 rounded-lg shadow-md mb-4 md:mb-6 hover:shadow-lg hover:scale-[101%] transition-transform max-w-lg mx-auto"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <div
                  className="w-9 h-9 rounded-full mr-3"
                  style={{
                    background: project.gradient,
                  }}
                ></div>
                <div>
                  <h3 className="font-semibold text-sm">{project.name}</h3>
                  <p className="text-xs text-gray-500">{project.status} · Last updated: {project.lastUpdated}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => handleViewDetails(project)} 
                  className="text-blue-500 hover:underline text-xs"
                >
                  View
                </button>
                <button 
                  onClick={() => handleEdit(project)} 
                  className="text-green-500 hover:underline text-xs"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(project)} 
                  className="text-red-500 hover:underline text-xs"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="flex space-x-2 mb-2 flex-wrap">
              {project.tags.map(tag => (
                <span key={tag} className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <p className="mb-3 text-sm">{project.description}</p>
            <img className="w-full rounded-lg" src={project.image} alt="Project" />

            {/* Reactions */}
            <div className="flex justify-between items-center mt-3 text-gray-600 text-sm">
              <div>
                <span className="mr-4">{project.likes} Likes</span>
                <span>{project.comments} Comments</span>
              </div>
              <div className="flex space-x-2">
                <button 
                  className="text-blue-500 hover:underline text-xs"
                >
                  Like
                </button>
                <button 
                  className="text-blue-500 hover:underline text-xs"
                >
                  Comment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;