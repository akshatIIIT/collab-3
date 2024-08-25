import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Home/Header';
import Hero from './Home/Hero';
import Box from './Home/Box';
import About from './Home/About';
import Show from './Home/Show';
import Shows from './Home/Shows';
import Solution from './Home/Solution';
import Footer from './Home/Footer';
import Feed from './Page2/Feed';
import MyProject from './Page2/MyProject';
import Login from './Page2/Login';
import CreatePost from './Page2/Create';
import { useState } from 'react';
import Community from './Page2/Community';

function App() {
  const initialPosts = [
    {
      id: 1,
      name: "Ashwin",
      community: "Awesome Community",
      time: "57m",
      tags: ["React", "JavaScript", "AI"],
      content: "This is one Project I was building. Can someone please tell me the quality of code and any suggestion.",
      gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)",
      likes: 57000,
      comments: [
        { id: 1, username: "John Doe", text: "Great project!", time: "2 hours ago" },
        { id: 2, username: "Jane Smith", text: "Looks good, keep it up!", time: "1 hour ago" }
      ],
      shares: 7,
      image: "post-1.png",
    },
    {
      id: 2,
      name: "Danish Ansari",
      community: "Clickup Community",
      time: "57m",
      tags: ["JavaScript", "React Js", "GitHub"],
      content: "I am exicted to annouce, I have made a new webiste using React Js and Javascrpit",
      gradient: "linear-gradient(135deg, #f5d7e3 0%, #f5e4e2 100%)",
      likes: 24000,
      comments: [
        { id: 1, username: "Alice Cooper", text: "Nice work!", time: "3 hours ago" }
      ],
      shares: 3,
      image: "mypost-2.png",
    },
    {
      id: 3,
      name: "Aditiya",
      community: "CTD-Community",
      time: "57m",
      tags: ["Electronic", "GitHub"],
      content: "I was having problem in CTD Lecture-09. Please Help!! 😭",
      gradient: "linear-gradient(135deg, #f5d7e3 0%, #f5e4e2 100%)",
      likes: 24000,
      comments: [
        { id: 1, username: "Alice Cooper", text: "Nice work!", time: "3 hours ago" }
      ],
      shares: 3,
      image: "post-2.png",
    },
    {
      id: 4,
      name: "Rahul Dabas",
      community: "Dev-Community",
      time: "57m",
      tags: ["JavaScript", "C++", "GitHub"],
      content: "I have got 5 star on Python and C++!! ",
      gradient: "linear-gradient(135deg, #f5d7e3 0%, #f5e4e2 100%)",
      likes: 24000,
      comments: [
        { id: 1, username: "Alice Cooper", text: "Nice work!", time: "3 hours ago" }
      ],
      shares: 3,
      image: "mypost-3.png",
    },
    {
      id: 5,
      name: "Siddhart Reddy",
      community: "FrontEnd Community",
      time: "57m",
      tags: ["JavaScript", "C++", "GitHub"],
      content: "This is the output of my Freelance project which i did. Thanks for the oppertunity!!",
      gradient: "linear-gradient(135deg, #f5d7e3 0%, #f5e4e2 100%)",
      likes: 24000,
      comments: [
        { id: 1, username: "Alice Cooper", text: "Nice work!", time: "3 hours ago" }
      ],
      shares: 3,
      image: "mypost-1.png",
    },
    
  ];

  const [posts, setPosts] = useState(initialPosts);

  const handleCreatePost = (content, image) => {
    const newPost = {
      id: posts.length + 1,
      name: "Abhigyan Raj",
      community: "Awesome Community",
      time: "Just now",
      tags: [],
      content: content,
      gradient: "linear-gradient(135deg, #f5d7e3 0%, #f5e4e2 100%)",
      likes: 0,
      comments: [],
      shares: 0,
      image: image || null,
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <Router>
      <Header />
      <MainContent posts={posts} handleCreatePost={handleCreatePost} />
    </Router>
  );
}

function MainContent({ posts, handleCreatePost }) {
  const location = useLocation();
  
  // Determine whether to show the footer (hide it on the /community and /feed routes)
  const showFooter = location.pathname !== '/community' && location.pathname !== '/feed';
  
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Box />
            <About />
            <Show />
            <Shows />
            <Solution />
          </>
        } />
        <Route path="/feed" element={<Feed posts={posts} />} />
        <Route path="/projects" element={<MyProject />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreatePost onCreatePost={handleCreatePost} />} />
        <Route path="/community" element={<Community />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
}

export default App;