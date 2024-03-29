import { Button, Modal, Box,TextField } from "@mui/material"
import { useState, useContext } from "react"
import { CurrentUser } from "../../contexts/CurrentUser"
import axios from 'axios'
import style from "./style"

const SignUp = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const [ user, setUser ] = useState({
        name: '',
        password: '',
        email: '',
        github: '',
        linkedin: '',
        website: '',
        bio: '',
        admin: false
    })
    const { setCurrentUser } = useContext(CurrentUser)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            await axios({
                method: "post",
                url: "http://localhost:5000/user",
                data: user
            })
            .then(response => {               
                setCurrentUser(response.data[0])
                handleClose()
            }
        )
        }catch(err){
            console.log(err)
        }

        try{
            await axios({
                method: "post",
                url: "http://localhost:5000/auth",
                data: user
            })
            .then(response => {
                setCurrentUser(response.data.user)
                localStorage.setItem('token', response.data.token)
                handleClose()
            })
        }catch(err){
            console.log(err.response.data)
        }
    }

    return(
    <div>
        <Button
            sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700 }}
            onClick={handleOpen}
        >Signup</Button>
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
            <form  onSubmit={handleSubmit}>
                <TextField
                    sx = {{minWidth :'70%', margin: "15px"}}
                    required
                    onChange={(e) => setUser({...user, name: e.target.value})}
                    id="outlined-required"
                    label="username"
                    name="name"
                />
                <TextField
                    sx = {{minWidth :'70%', margin: "15px"}}
                    required
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                />
                <TextField
                    sx = {{minWidth :'70%', margin: "15px"}}
                    onChange={(e) => setUser({...user, email: e.target.value})}
                    id="outlined"
                    label="email"
                    name="email"
                />
                 <TextField
                    sx = {{minWidth :'70%', margin: "15px"}}
                    onChange={(e) => setUser({...user, linkedin: e.target.value})}
                    id="outlined"
                    label="linkedIn"
                    name="linkedin"
                />
                <TextField
                    sx = {{minWidth :'70%', margin: "15px"}}
                    onChange={(e) => setUser({...user, github: e.target.value})}
                    id="outlined"
                    label="github"
                    name="github"
                />
                <TextField
                    sx = {{minWidth :'70%', margin: "15px"}}
                    onChange={(e) => setUser({...user, website: e.target.value})}
                    id="outlined"
                    label="Portfolio website"
                    name="website"
                />
                <TextField
                    sx = {{minWidth :'70%',margin: "15px"}}
                    onChange={(e) => setUser({...user, bio: e.target.value})}
                    id="standard-multiline-flexible"
                    multiline
                    maxRows={6}
                    label="Tell us about yourself!"
                    name="bio"
                />  

                <Button variant="outlined" color="primary" type="submit">Submit</Button>
            </form>
            </Box>
        </Modal>
    </div>
    )
}

export default SignUp