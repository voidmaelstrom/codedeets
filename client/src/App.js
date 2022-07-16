import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import PostContainer from './Components/PostContainer/PostContainer';
import UserList from './Components/UserList/UserList';
import GettingStarted from './Components/GettingStarted/GettingStarted';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';

import Form from './Components/Form/Form';
import Resources from './Components/Resources/Resources';
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
  }, [])



  return (

    <div className="container">
      <Router>
        <Navbar />
        <UserList />

        {/* Div container where all routed components will render */}
        <div className="display">
          <Routes>
            <Route path="/" element={<PostContainer />} />
            <Route path="/gettingstarted" element={<GettingStarted />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>

        <div className="footer">Footer</div>
      </Router>
    </div>
  );
}

export default App;
