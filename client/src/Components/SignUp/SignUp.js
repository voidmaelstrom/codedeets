import { Button, Modal, Box } from "@mui/material"
import { useState } from "react"
import Form from "../Form/Form"

const SignUp = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = setOpen(true)
    const handleClose = setOpen(false)

    return(
        <div>
            <Button onClick={handleOpen}>Sign Up</Button>
       
        </div>
    )
}

export default SignUp