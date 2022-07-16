import { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form/Form';
import Navbar from './components/navbar/Navbar';
//import MarkdownPostContainer from './components/MarkdownPostContainer/MarkdownPostContainer';

function App() {
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
    <div className="App">
        <Navbar/>
        
        
    </div>
  );
}

export default App;
