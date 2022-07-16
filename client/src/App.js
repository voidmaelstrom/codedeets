import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import PostContainer from './Components/PostContainer/PostContainer';
import UserList from './Components/UserList/UserList';

import Form from './components/Form/Form';
import Navbar from './components/navbar/Navbar';
//import MarkdownPostContainer from './components/MarkdownPostContainer/MarkdownPostContainer';

      
const App = () => {

let [data, setData] = useState([null])

// General set up for API call
useEffect(() => {
  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/posts')
    const resData = await response.json()
    console.log(resData)
    setData(resData)
  }
  fetchData()
},[])



  return (
    <div className="container">
      <div className="navbar"><Navbar /></div>
      <div className="users"><h1>User List</h1><UserList /></div>
      <div className="posts"><h1>Recent Posts</h1><PostContainer /></div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;
