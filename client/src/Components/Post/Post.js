
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ReactMarkdown from 'https://esm.sh/react-markdown@7'

const Post = (props) => {

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Post Number <br />
          {props.data.post_id}
        </Typography>
        <Typography variant="h5" component="div">
        <ReactMarkdown>{props.data.file}</ReactMarkdown>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Tag <br />
          {props.data.tag}
        </Typography>
        <Typography variant="body2">
          
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

export default Post

