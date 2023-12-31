import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './DeletePost.css';


const DeletePost = () => {
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await axios.delete(`http://127.0.0.1:3000/post?id=/${postId}`);
      setPost(response.data);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`YOUR_ROR_API_ENDPOINT/posts/${postId}`);
      alert('Post deleted successfully!');
      // Redirect to the post list after successful deletion
      navigate.push('/');
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container'>
      <div className='delete-post-section'>
        <h2>Delete Post</h2>
        <p>Title: {post.title}</p>
        <p>Author: {post.author}</p>
        <p>Date: {post.dateTime}</p>
        <p>Likes: {post.likes}</p>
        <p>Comments: {post.comments}</p>
        <p>Comments: {post.topic}</p>

        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default DeletePost;
