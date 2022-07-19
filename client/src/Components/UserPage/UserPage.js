
import Avatar from '@mui/material/Avatar'

const UserPage = () => {
    
    return(
        <div className="userpage">
            
            <div className="username">
                <Avatar
                    sx={{ width: 150, height: 150 }}
                >JA</Avatar></div>
            <div className="userbio">Biography</div>
            <div className="userlinked">LinkedIn</div>
            <div className="usergithub">Github</div>
            <div className="userportfolio">Personal Portfolio</div>
        </div>

        
    )
}

export default UserPage
