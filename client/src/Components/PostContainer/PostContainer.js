import Posts from "../Posts/Posts"
import { Grid } from "@material-ui/core"
// import { Link } from "react-router-dom"

const PostContainer = (data) => {

    return(
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
                <Posts />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Posts />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Posts />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Posts />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Posts />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Posts />
            </Grid>
        </Grid>
    )
}

export default PostContainer
