import { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form/Form';
import Navbar from './components/navbar/Navbar';
//import MarkdownPostContainer from './components/MarkdownPostContainer/MarkdownPostContainer';

function App() {
  let [data, setData] = useState([null])

  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5050/posts')
      const resData = await response.json()
      console.log(resData)
      setData(resData)
    }
    fetchData()
  },[])





  return (
    <div className="App">
        <Navbar/>
        <Form></Form>
        
    </div>
  );
}

export default App;
