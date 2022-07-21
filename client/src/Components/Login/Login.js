import { Button, Modal, Box, Paper, TextField, Checkbox,  } from "@mui/material"
import { useState } from "react"
import style from "./style"

const Login = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return(
    <div>
        <Button
            sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700 }}
            onClick={handleOpen}
        >Login</Button>
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
            <form action={'http://localhost:5000/auth'} method='POST'>
                <TextField
                    sx = {{minWidth :'70%', margin: "15px"}}
                    required
                    id="outlined-required"
                    label="username"
                    name='name'
                />
                <TextField
                    sx = {{minWidth :'70%', margin: "15px"}}
                    required
                    id="outlined-password-input"
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