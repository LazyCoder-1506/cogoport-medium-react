import React from 'react'

const Profile = () => {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [lists, setLists] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:3000/users/me`);
      setFirstname(response.data.firstname);
      setLastname(response.data.lastname);
      setEmail(response.data.email);
      setUsername(response.data.username);
      setLists(response.data.lists);
      setPosts(response.data.posts);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  };

  return (
    <div className='p-4'>
      <p className="mb-2">{firstname} {lastname}</p>
      <p className="mb-2">{username}</p>
      <p className="mb-2">{email}</p>
      <p className="mb-2">Lists: {lists.map(list => (list + ', '))}</p>
      <h3 className="mt-4">My posts</h3>
      <div>{posts.map(post => {
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>Author: {post.author}</p>
          <p>Date: {post.dateTime}</p>
          <p>Likes: {post.likes}</p>
          <p>Comments: {post.comments}</p>
          <p>Comments: {post.topic}</p>
          <Link to={`/more-posts-by-author/${post.author}`}>More Posts by {post.author}</Link>
        </div>
      })}</div>
    </div>
  )
}

export default Profile