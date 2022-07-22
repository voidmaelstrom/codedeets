
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Posts = (props) => {

  const card = ( 
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Post Number
          {/* {props.data.post_id} */}
        </Typography>
        <Typography variant="h5" component="div">

        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Tag
        </Typography>
        <Typography variant="body2">
          Body
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

  return (

    <Box sx={{ minWidth: 200 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

export default Posts

