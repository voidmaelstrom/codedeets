import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import PostContainer from './Components/PostContainer/PostContainer';
import UserList from './Components/UserList/UserList';
import GettingStarted from './Components/GettingStarted/GettingStarted';
import Error404 from './Components/Error404/Error404';
import UserPage from './Components/UserPage/UserPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Form from './Components/Form/Form';
import Resources from './Components/Resources/Resources';
//import MarkdownPostContainer from './components/MarkdownPostContainer/MarkdownPostContainer';


const App = () => {

  let [data, setData] = useState([{}])


  // General set up for API call
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5050/posts')
      const resData = await response.json()
      setData(resData)
    }
    fetchData()
  }, [])



  return (
    <div className="container">
      <Router>
        <Navbar />
        <UserList />
        {/*renderData(data)*/}
        {/* Div container where all routed components will render */}
        <div className="display">
          <Routes>    
            <Route path="/" element={<PostContainer  />} />
            <Route path="/gettingstarted" element={<GettingStarted data={data} />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/form" element={<Form />} />
            {/* Route to UserPage */}
            <Route path="/user/:userId" component={<UserPage />} />
            {/* Error 404 Route */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>

        <div className="footer">Footer</div>
      </Router>
    </div>
  );
}

export default App;
