import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import { Link } from '@mui/material';
import { NavLink } from "react-router-dom";


// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function BasicCard(props) {
  console.log(props)
   const {id,title}=props.data;
  return (
    <Card sx={{ maxWidth: 300 ,width:220}}>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="div">
         <h4>Post No:: {id} </h4>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2" color="error.main">
          <h3>Title:: {title}</h3>
          
        </Typography>
      </CardContent>
      <CardActions>
        
        <NavLink to={`/post/${id}`} style={{textDecoration:'none'}}> <Button size="small" variant="outlined" >See More</Button></NavLink>
      </CardActions>
    </Card>
  );
}
