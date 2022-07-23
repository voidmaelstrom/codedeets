
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { renderData } from '../../helper';

import ReactMarkdown from 'react-markdown'

const Post = (props) => {


  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          Post Number <br />
          {props.data.post_id}
        </Typography>
        <Typography variant="h8" component="div">
        <ReactMarkdown children={renderData(props)} />
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Tag <br />
          {props.data.tag}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <Box sx={{ minWidth: 200, m:1 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}

export default Post