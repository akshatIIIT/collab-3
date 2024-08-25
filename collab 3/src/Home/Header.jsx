import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
    navigate('/'); // Redirect to the home page after logout
  };

  return (
    <header className="h-16 bg-transparent w-full flex items-center px-7 justify-between mt-4">
      {/* Logo */}
      <div className="flex items-center ml-4">
        <Link to="/">
          <img src="logo-1.png" alt="Logo" className="h-16" />
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="hidden md:flex space-x-6 font-medium text-black ml-[15vw] text-[1.55vh] mr-36">
        <Link to="/" className="hover:text-gray-600">Home</Link>
        <Link to="/feed" className="hover:text-gray-600">Feed</Link>
        <Link to="/projects" className="hover:text-gray-600">My Projects</Link>
        <Link to="/community" className="hover:text-gray-600">Community</Link>
        <a href="mailto:Collab@work.ac.in" className="hover:text-gray-600">Contact</a>

      </nav>

      {/* Header Actions */}
      <div className="flex items-center space-x-4">
        <Link to="/create" className="bg-black lg:flex hidden text-white px-4 py-1 rounded-xl h-10 hover:bg-gray-800 items-center justify-center font-semibold text-sm">
          Create Post
        </Link>

        {/* Login/Logout Button */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="border border-red-300 px-6 py-1 rounded-lg hover:bg-red-500 hover:text-white hidden text-red-500 lg:flex font-semibold text-[12px]"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="text-black border border-gray-300 px-6 py-1 rounded-lg hover:bg-gray-100 hidden lg:flex font-semibold text-sm">
            Login
          </Link>
        )}
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="lg:hidden flex items-center">
        <button className="text-black">
          <img src="ham.png" alt="Menu" className="h-8" />
        </button>
      </div>
    </header>
  );
};

export default Header;
