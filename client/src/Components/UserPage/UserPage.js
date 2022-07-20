import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'

const UserPage = () => {
    const { id } = useParams()
    const [userPage, setUserPage] = useState([])

        // General set up for API call on users
        useEffect(() => {
            const API_URL = "http://localhost:5000/user/"
            const fetchUser = async () => {
                const response = await fetch(API_URL+`${id}`)
                const resUsers = await response.json()
                console.log(resUsers)
                setUserPage(...resUsers)
            }
            fetchUser()
        }, [ id ]) 

    return(
        <div className="userpage">
        
            <div className="username">
                <Avatar
                    sx={{ width: 150, height: 150 }}
                >{userPage.name}</Avatar></div>
            <div className="userbio">Biography</div>
            <div className="userlinked">LinkedIn</div>
            <div className="usergithub">Github</div>
            <div className="userportfolio">Personal Portfolio</div>
        </div>

        
    )
}

export default UserPage
