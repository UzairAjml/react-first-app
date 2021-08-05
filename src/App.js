  import React from 'react'
 import Tweet from './Tweet'
 import './App.css';
 
 
 function App ()  {


  const villians  = [

    {name:'LOKI', moto:'Do you truly think so little of me?'  },
    {name:'THANOS', moto:'You Should Have Gone For The Head'  },
    {name:'HELA', moto:'Our destiny is to rule over all others. And I am here to restore that power' },
    {name:'ULTRON', moto:' As I always say, keep your friends rich, and your enemies rich, and then find out which is which'  }
  ];

   return (
     <div className='App'>
         
        {villians.map(villian=>(
          <Tweet name={villian.name} moto={villian.moto}/>
        ))}
     </div>
   )
 }
 
 export default App
   