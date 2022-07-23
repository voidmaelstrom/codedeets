import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import { Button } from '@mui/material'
import { Link } from "react-router-dom"


const UserPage = () => {
    const { id } = useParams()
    const [userPage, setUserPage] = useState([])

    // General set up for API call on users
    useEffect(() => {
        const API_URL = "http://localhost:5000/user/"
        const fetchUser = async () => {
            const response = await fetch(API_URL + `${id}`)
            const resUsers = await response.json()
            setUserPage(...resUsers)
        }
        fetchUser()
    }, [id])

    return (
        <div className="userpage">
            <div className="username">
                <Avatar
                    sx={{ width: 150, height: 150 }}
                >{userPage.name}</Avatar></div>
            <div className="userbio">
                <h3>Biography</h3>
                {userPage.bio}
            </div>
            <div className="userlinked">
                <h3>LinkedIn</h3>
                <Button variant="contained" size="medium">
                    <a href={userPage.linkedin}>Click Here</a>
                </Button>
            </div>
            <div className="usergithub">
                <h3>Github</h3>
                <Button variant="contained" size="medium">
                    <a href={userPage.github}>Click Here</a>
                </Button>
            </div>
            <div className="userportfolio">
                <h3>Personal Portfolio Website</h3>
                <Button variant="contained" size="medium">
                    <a href={userPage.website}>Click Here</a>
                </Button>
            </div>
            <Link to="/">Go Back Home</Link> <br />
        </div>
    )
}

export default UserPage
