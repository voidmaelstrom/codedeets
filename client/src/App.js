import './App.css';
import Navbar from './components/Navbar/Navbar'
import PostContainer from './components/PostContainer/PostContainer';
import UserList from './components/UserList/UserList';

const App = () => {

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
