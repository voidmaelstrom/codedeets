
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const UserList = () => {

    // useState variable for user data
    let [users, setUsers] = useState([])

    // General set up for API call on users
    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch("http://localhost:5000/user")
            const resUsers = await response.json()
            setUsers(resUsers)
            //console.log(resUsers)
        }
        fetchUser()
    }, [users]) 

    const displayUsers = users.map((user) => {
        return (
            <li key={user.user_id}>
                <Link to={`/user/${user.user_id}`}>{user.name}</Link>
            </li>
        )
    })

    return (
        <div className='users'>
            <h1>Users List</h1>
            {displayUsers}
        </div>
    )
}

export default UserList;
