import React, { useEffect, useState } from 'react'

export const UseEffects1 = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log("Effect");
        if(count >= 1){
            document.title=`Chats (${count})`;
        }
        else{
            document.title=`Chats `;
        }
        
    },[count]);
  return (
    <div>
        <h1 className='text-center'>{count}</h1>
        <button className='btn btn-primary mt-2' onClick={()=>{setCount(count+1)}}>Click</button>
    </div>
  )
}
