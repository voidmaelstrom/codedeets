import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar'
import PostContainer from './Components/PostContainer/PostContainer';
import UserList from './Components/UserList/UserList';
import GettingStarted from './Components/GettingStarted/GettingStarted';
import Error404 from './Components/Error404/Error404';
import UserPage from './Components/UserPage/UserPage';
import Form from './Components/Form/Form';
import Resources from './Components/Resources/Resources';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';

import './App.css';
import CurrentUserProvider from './contexts/CurrentUser';



const App = () => {


 
  return (
    <CurrentUserProvider>
    <div className="container">
      <Router>
        <Navbar />
        <UserList />
        {/* Div container where all routed components will render */}
        <div className="display">
          <Routes>    
            <Route path="/" element={<PostContainer  />} />
            <Route path="/gettingstarted" element={<GettingStarted />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/form" element={<Form />} />
            {/* Route to UserPage */}
            <Route path="/user/:id" element={<UserPage />} />
            {/* Error 404 Route */}
            <Route path="*" element={<Error404 />} />
            {/*Login & Signup Routes*/}
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>} />
          </Routes>
        </div>

        <div className="footer">Footer</div>
      </Router>
    </div>
    </CurrentUserProvider>
  );
}

export default App;
