import {React, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import AddPost from "./components/AddPost/AddPost";
import EditPost from "./components/EditPost/EditPost";
import PostList from "./components/PostList/PostList";

function App() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [posts, setPosts] = useState([]);
  const [editedPost, setEditedPost] = useState({})

  function addPost (newPost) {
    let newPosts = [...posts];
    newPosts.push(newPost);
    setPosts(newPosts);
    console.log(posts)
  };

  function deletePost (id) {
    let newPosts = posts.filter(item => item.id !== id);
    setPosts(newPosts)
  }

  function getOnePost (id) {
    let postObj = posts.find(item => item.id === id);
    setEditedPost(postObj);
    setShow(true);
    console.log(postObj);
  }

  function saveChanges (newPost) {
    let newPosts = posts.map(item => {
      if(item.id === newPost.id) {
        return newPost
      }
      return item
    })

    setPosts(newPosts);
    console.log(newPosts);
    setShow(false)
  }

  return (
    <>
      <Header/>
      <AddPost addPost={addPost}/>
      <PostList posts={posts} deletePost={deletePost} getOnePost={getOnePost}/>
      {show && <EditPost show={show} handleClose={handleClose} editedPost={editedPost} saveChanges={saveChanges}/>}
    </>
  );
};

export default App;
