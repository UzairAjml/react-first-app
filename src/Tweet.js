import React,{useState,useEffect} from 'react'
import './App.css';

const Tweet = ({name,moto}) => {



    let  [like,setLike ]=useState(0); 

    const increment=()=>{
        setLike(like+1);
    }
    useEffect(() => {
  
        setLike(like-1);
         
    },[ ] )
         

    return (
        <div className='Tweet'>
            <h1>{name}</h1>
            <p>{moto}</p>
            <div className='Likes'> 
            <button   id='btn' onClick={increment}>Likes</button>
            <h2>{like}</h2>
            </div>
        </div>
    )
}

export default Tweet
