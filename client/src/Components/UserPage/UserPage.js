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
        const API_URL = `${process.env.REACT_APP_SERVER_URL}user/`
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
            
            <div className='userBio'>
                <h3>Biography</h3>
                {userPage.bio}
            </div>
            <div className='userLinks'>
                <div className='userLinked'>
                <Button variant="contained" size="medium">
                    <a href={userPage.linkedin}>LinkedIn</a>
                </Button>
                </div>
                <div className='userGithub'>
                <Button variant="contained" size="medium">
                    <a href={userPage.github}>Github</a>
                </Button>
                </div>
                <div className='userPortfolio'>
                <Button variant="contained" size="medium">
                    <a href={userPage.website}>Portfolio</a>
                </Button>
                </div>
                </div>
            <Link to="/">Go Back Home</Link> <br />
        </div>
    )
}

export default UserPage