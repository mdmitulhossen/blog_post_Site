import React, { useEffect, useState } from 'react';
import BasicCard from '../Card/BasicCard';

const Homepage = () => {
    const[data,setData]=useState([]);
    
    useEffect(()=>{
        //   const data = DataCall(url);
        //   setData(data);
        //   console.log(data)
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[]);

    const style= {
        display:'flex',
        flexWrap:'wrap',
        rowGap:"20px",
        justifyContent:'space-around'
    }
   
        return (
            <div style={style}>
               {
                data.map(rs=><BasicCard data={rs} key={rs.id}></BasicCard>)
               }
            </div>
        );
   
};

export default Homepage;