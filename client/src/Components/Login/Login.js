import { Button, Modal, Box, TextField} from "@mui/material"
import { useState, useContext } from "react"
import { CurrentUser } from "../../contexts/CurrentUser"

import axios from "axios"
import style from "./style"

const Login = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)


    const [ userAuth, setUserAuth ] = useState({
        name: '',
        email: '',
        password: ''
    })
    //Keeping err state here for later use
    //const [err, setErrMessage] = useState(null)
    const { setCurrentUser } = useContext(CurrentUser)
/* Not working with state
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:5050/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'applicaiton/json'
            },
            body: JSON.stringify(userAuth)
        })
        const data = await response.json()

        if(response.status === 200) {
            setCurrentUser(data.user)
            history.push('/')
        }else {
            setErrMessage(data.message)
            console.log(err)
        }
    } 
*/

const handleSubmit = async (e) => {
    e.preventDefault()

    try{
        await axios({
            method: "post",
            url: "http://localhost:5000/auth",
            data: userAuth
        })
        .then(response => {
            setCurrentUser(response.data.user)
            localStorage.setItem('token', response.data.token)
            handleClose()
        })
    }catch(err){
        console.log(err)
    }
}


    return(
    <div>
        <Button
            sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700 }}
            onClick={handleOpen}
        >Login</Button>
        
        <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
            <form  onSubmit={handleSubmit}>
                <TextField
                    sx = {{minWidth :'70%', margin: "15px"}}
                    required
                    id="outlined-required"
                    onChange={(e) => setUserAuth({...userAuth, name: e.target.value})}
                    label="username"
                    name='name'
                />
                <TextField
                    sx = {{minWidth :'70%', margin: "15px"}}
                    required
                    id="outlined-password-input"
                    onChange={(e) => setUserAuth({...userAuth, password: e.target.value})}
                    label="Password"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                />
                <Button variant="outlined" color="primary" type="submit">Log in!</Button>
            </form>
            </Box>
        </Modal>
    </div>
    )
}

export default Login