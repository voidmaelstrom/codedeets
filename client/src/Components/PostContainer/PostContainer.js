import Posts from "../Posts/Posts"
import { Grid } from "@material-ui/core"
// import { Link } from "react-router-dom"

const PostContainer = (props) => {

    const display = props.data.map((data, i) => {

        return (
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                    <Posts data={data} key={i} />
                </Grid>
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
