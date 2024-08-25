import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ onCreatePost }) => {
  const [postContent, setPostContent] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postContent || selectedImage) {
      onCreatePost(postContent, selectedImage);
      setPostContent(''); // Reset the input field
      setSelectedImage(null); // Reset the image
      alert('Post published successfully!');
      navigate('/feed'); // Navigate back to the feed page
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-40">
      <form onSubmit={handleSubmit} className="space-y-4 mb-10">
        <textarea
          className="w-full h-40 p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="What's on your mind?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        ></textarea>

        {selectedImage && (
          <div className="relative px-20">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-h-64 w-full object-cover rounded-lg"
            />
            <button
              type="button"
              className="absolute top-2 right-2 font-extrabold text-red-500 p-1 rounded-full text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        )}

        <div className="flex items-center">
          <label className="bg-gray-200 p-2 rounded-lg cursor-pointer font-semibold hover:bg-gray-300 transition-all text-sm">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            Add Image
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white font-semibold p-3 rounded-lg hover:bg-slate-900 transition-all"
        >
          Publish Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;