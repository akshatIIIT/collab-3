import React, { useState } from 'react';

// Function to generate a gradient based on a string (e.g., user's name or ID)
const generateGradient = (userId) => {
  const colors = ['#f3ec78', '#af4261', '#a1c4fd', '#c2e9fb', '#ff9a8b', '#f6d365'];
  const seed = parseInt(userId, 16) % colors.length;
  const color1 = colors[seed];
  const color2 = colors[(seed + 1) % colors.length];
  return `linear-gradient(135deg, ${color1}, ${color2})`;
};

const Feed = ({ posts }) => {
  const [postsState, setPostsState] = useState(
    posts.map(post => ({
      ...post,
      liked: false,
      showComments: false,
      newComment: "",
      gradient: generateGradient(post.id) // Generate a unique gradient for each post/user
    }))
  );

  const handleLike = (index) => {
    const updatedPosts = [...postsState];
    updatedPosts[index].liked = !updatedPosts[index].liked;
    updatedPosts[index].likes += updatedPosts[index].liked ? 1 : -1;
    setPostsState(updatedPosts);
  };

  const toggleComments = (index) => {
    const updatedPosts = [...postsState];
    updatedPosts[index].showComments = !updatedPosts[index].showComments;
    setPostsState(updatedPosts);
  };

  const handleCommentChange = (e, index) => {
    const updatedPosts = [...postsState];
    updatedPosts[index].newComment = e.target.value;
    setPostsState(updatedPosts);
  };

  const handleAddComment = (index) => {
    const updatedPosts = [...postsState];
    if (updatedPosts[index].newComment.trim()) {
      updatedPosts[index].comments.push({
        name: "You",
        time: "Just now",
        text: updatedPosts[index].newComment,
        avatar: "your-avatar.png"  // replace with the path to the user's avatar
      });
      updatedPosts[index].newComment = "";
      setPostsState(updatedPosts);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white px-4 md:px-10">
      <div className="flex-1 p-4 md:p-6">
        {postsState.length > 0 ? (
          postsState.map((post, index) => (
            <div
              key={post.id || index}
              className="bg-white p-3 md:p-5 rounded-lg shadow-md mb-4 md:mb-6 hover:shadow-lg hover:scale-[101%] transition-transform max-w-lg mx-auto"
            >
              <div className="flex items-center mb-3">
                <div
                  className="w-9 h-9 rounded-full mr-3"
                  style={{ background: post.gradient }}
                ></div>
                <div>
                  <h3 className="font-semibold text-sm">{post.name}</h3>
                  <p className="text-xs text-gray-500">{post.community} · {post.time}</p>
                </div>
              </div>
              <div className="flex space-x-2 mb-2 flex-wrap">
                {post.tags.map((tag, i) => (
                  <span key={i} className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="mb-3 text-sm">{post.content}</p>
              {post.image && (
                <img className="w-full rounded-lg" src={post.image} alt="Post" />
              )}
              <div className="flex justify-between items-center mt-3">
                <button
                  className={`flex items-center text-xs transition-colors ${
                    post.liked ? 'text-red-500 font-bold' : 'text-gray-500'
                  }`}
                  onClick={() => handleLike(index)}
                >
                  <img
                    className={`w-4 h-4 mr-1 transition-opacity ${
                      post.liked ? 'opacity-100' : 'opacity-50'
                    }`}
                    src="like.png"
                    alt="Like"
                  />
                  {post.likes.toLocaleString()}
                </button>
                <button
                  className="text-gray-500 flex items-center text-xs"
                  onClick={() => toggleComments(index)}
                >
                  <img className="w-4 h-4 mr-1" src="comment.png" alt="Comment" />
                  {post.comments.length.toLocaleString()}
                </button>
                <span className="text-gray-500 flex items-center text-xs">
                  <img className="w-4 h-4 mr-1" src="share.png" alt="Share" />
                  {post.shares}
                </span>
              </div>

              {post.showComments && (
                <div className="mt-4">
                  <div className="bg-gray-100 p-3 rounded-lg">
                    {post.comments.length > 0 ? (
                      post.comments.map((comment, i) => (
                        <div key={i} className="flex items-start mb-3">
                          <div
                            className="w-8 h-8 rounded-full mr-3"
                            style={{
                              background: 'linear-gradient(135deg, #f3ec78, #af4261)' // Placeholder gradient for comments
                            }}
                          ></div>
                          <div className="flex-1">
                            <div className="flex items-center">
                              <span className="font-semibold text-sm mr-2">{comment.name}</span>
                              <span className="text-xs text-gray-500">{comment.time}</span>
                            </div>
                            <p className="text-sm text-gray-700">{comment.text}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500">No comments yet.</p>
                    )}
                  </div>
                  <div className="flex mt-3">
                    <input
                      type="text"
                      value={post.newComment}
                      onChange={(e) => handleCommentChange(e, index)}
                      className="flex-1 border border-gray-300 rounded-lg p-2 text-sm"
                      placeholder="Add a comment..."
                    />
                    <button
                      onClick={() => handleAddComment(index)}
                      className="ml-2 bg-black font-semibold text-white rounded-lg px-4 py-2 text-sm"
                    >
                      Post
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default Feed;