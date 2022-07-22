import Post from "../Post/Post"
import { Grid } from "@material-ui/core"
// import { Link } from "react-router-dom"

const PostContainer = (props) => {

    const display = props.data.map((data, i) => {

        return (
                <Grid item xs={12} sm={6} md={4}>
                    <Post data={data} key={i} />
                </Grid>
        )
    })

    return(
        <Grid container xs={12}>
            {display}
        </Grid>
    )
}

export default PostContainer
