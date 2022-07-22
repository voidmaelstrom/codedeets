import Post from "../Post/Post"
import { Grid } from "@material-ui/core"

const PostContainer = (props) => {

    const display = props.data.map((data, i) => {

        return (
                <Grid key={i} item xs={12} sm={6} md={4}>
                    <Post data={data} key={i} value={i} />
                </Grid>
        )
    })

    return(
        <Grid container item xs={12}>
            {display}
        </Grid>
    )
}

export default PostContainer
