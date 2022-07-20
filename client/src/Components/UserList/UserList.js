
import { useState, useEffect } from 'react';

const UserList = (props) => {

    // useState variable for user data
    let [user, setUser] = useState([])

    // General set up for API call on users
    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch("http://localhost:5000/user")
            const resUser = await response.json()
            setUser(resUser)
            console.log(resUser)
        }
        fetchUser()
    }, []) 

    const display = user.map((data, i) => {
        return (
            <li>{data.name} key={i}</li>
        )
    })

    return (
        <div className='users'>
            <h1>Users List</h1>
            {display}
        </div>
    )
}

export default UserList;
