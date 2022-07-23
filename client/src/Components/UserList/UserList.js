
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const UserList = () => {

    // useState variable for user data
    let [users, setUsers] = useState([])

    // General set up for API call on users
    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch("http://localhost:5050/user")
            const resUsers = await response.json()
            setUsers(resUsers)
            //console.log(resUsers)
        }
        fetchUser()
    }, [users]) 

    const displayUsers = users.map((user) => {
        return (
            <li key={user.user_id}>
                <Link style={{textDecoration: 'none', color: 'white'}} to={`/user/${user.user_id}`}>{user.name}</Link>
            </li>
        )
    })

    return (
        <div className='users'>
            <Typography
                variant='h3'
                fontWeight='800'
                color= 'white'
            >
                Users List
            </Typography>
            <ul style={{listStyleType: 'none', backgroundColor: "#536b70", marginLeft: '2%', borderRadius: '25px'}}>
            {displayUsers}
            </ul>
        </div>
    )
}

export default UserList;
