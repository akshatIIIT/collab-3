import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

// Initial users data
const initialUsers = {
  "abhigyan23018@iiitd.ac.in": "12345",
  "user2@example.com": "password123",
  "user3@example.com": "mysecurepassword"
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || initialUsers);
  const navigate = useNavigate();

  const saveUsersToLocalStorage = (updatedUsers) => {
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      if (username in users) {
        toast.error('User already exists. Please log in.', { autoClose: 2000 });
      } else {
        const updatedUsers = { ...users, [username]: password };
        saveUsersToLocalStorage(updatedUsers);
        toast.success('Registration successful! Redirecting to the main page...', { autoClose: 2000 });
        setIsRegister(false);
        setTimeout(() => {
          localStorage.setItem('isLoggedIn', 'true'); // Set the login status
          navigate('/');
        }, 2000); // Delay navigation to match toast duration
      }
    } else {
      if (username in users && users[username] === password) {
        toast.success('Authentication successful. Redirecting to the main page...', { autoClose: 2000 });
        setTimeout(() => {
          localStorage.setItem('isLoggedIn', 'true'); // Set the login status
          navigate('/');
        }, 2000); // Delay navigation to match toast duration
      } else {
        toast.error('Authentication failed. Please check your credentials.', { autoClose: 2000 });
      }
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-40 overflow-hidden">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="vid-2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative w-full max-w-sm p-6 bg-white rounded-2xl shadow-2xl h-[60vh] z-10">
        <div className="flex justify-center mb-4 mt-3">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-slate-300 via-slate-300 to-slate-200 flex items-center justify-center">
            <span className="text-8xl">🐻‍❄️</span>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          {isRegister ? 'Register' : 'Login'}
        </h2>
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700">Full Name</label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>
        <p className="text-center mt-4">
          {isRegister ? (
            <>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setIsRegister(false)}
                className="text-slate-500 hover:underline"
              >
                Login
              </button>
            </>
          ) : (
            <>
              Not have an account?{' '}
              <button
                type="button"
                onClick={() => setIsRegister(true)}
                className="text-slate-500 hover:underline"
              >
                Register
              </button>
            </>
          )}
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;