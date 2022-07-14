import { Grid } from "@material-ui/core"
import { Link } from "react-router-dom"

const PostContainer = () => {
    
    const text = () => {
        <p>Lorem ipsum</p>
    }

    return(
        <Grid container xs={12}>
            {text}
        </Grid>
    )
}

export default PostContainer
