import { Button } from '@mui/material';
import React, { useState,useEffect} from 'react';
import { NavLink,useParams} from "react-router-dom";

// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Comment from '../Comment/Comment';
//import { Link } from '@mui/material';



const PostDetails = () => {
   let {id} = useParams();
   const[data,setData]=useState([]);
   const[comment,setComment]=useState([]);
   useEffect(()=>{
    //   const data = DataCall(url);
    //   setData(data);
    //   console.log(data)
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>res.json())
    .then(data=>setData(data))
},[id]);
   useEffect(()=>{
   
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(res=>res.json())
    .then(data=>setComment(data))
},[id]);
   const style= {
    margin:'20px auto',
    width:'70%',
   }
   const commentStyle= {
    margin:'20px auto',
    width:'70%',
    display:'flex',
    justifyContent:'space-around',
    flexWrap:'wrap',
    gap:'15px'
   }
    return (
        <div >
            <Card style={style}>
            <CardContent>
                {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
                </Typography> */}
                <Typography variant="h5" component="div">
                     Post No: {id}
                </Typography>
        
                  <Typography variant="body2" color="error.main">
                     <h2>Title:: {data.title}</h2>
                  </Typography>
                  <Typography variant="body2">
                     <h4><span style={{color:'green'}}>Details::</span> {data.body}</h4>
                  </Typography>
                </CardContent>
                <CardActions>
        
                <NavLink to='/' style={{textDecoration:'none'}}> <Button size="small" variant="main.container" >Back</Button></NavLink>
                </CardActions>
                </Card>

                <br/>
                <br/>
                <h1 style={{textAlign:'center',color:'blue', padding:'20px',borderBottom:'2px dashed lightblue',}}>Comments</h1>
                
                <div style={commentStyle}>
                    {
                        comment.map(dt=><Comment comment={dt}></Comment>)
                    }
                    
                </div>

        </div>
    );
};

export default PostDetails;