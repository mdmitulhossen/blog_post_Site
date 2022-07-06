import { Avatar } from '@mui/material';

import React from 'react';
 import { useState,useEffect } from 'react';

const Comment = (props) => {
    const{name,id}=props.comment
     const[image,setImage]=useState([]);
        useEffect(()=>{
            //   const data = DataCall(url);
            //   setData(data);
            //   console.log(data)
            fetch(`https://api.github.com/users/${id}`)
            .then(res=>res.json())
            .then(data=>setImage(data))
        },[id]);
    
    const style={
        display:'flex',
        width:'250px',
         justifyContent:'space-around',
        border:'2px solid lightblue',
        borderRadius:'20px 50px 20px 50px',
        alignItems:'center',
        backgroundColor:'lightblue',
        
        fontWeight:500
    }
    return (
        <div style={style}>
            <div><Avatar src={image.avatar_url}></Avatar></div>
            <div style={{width:'70%'}}>
                <h4 style={{color:'green'}}>{name}</h4>
                 <p>This is simple website.I am mitul. I am a web developer</p>
            </div>
           
        </div>
    );
};

export default Comment;