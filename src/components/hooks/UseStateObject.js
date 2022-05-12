import React, { useState } from 'react'

export const UseStateObject = () => {
//     const objData=[
//         {
//         myname:"vikrant",
//         age:27,
//         degree:"MBA"
//     }
// ]
    const[myOject,setMyObject] = useState( {
        myname:"vikrant",
        age:27,
        degree:"MBA"
    });
    
    const changeObject=()=>{
        setMyObject({...myOject, myname:"vikrant shishodia"});
        console.log("working")
    }
  return (
    <div>
        {/* {myOject.map((currnElem)=>{
            return  <h1 className='textStyle'>Your name is {currnElem.myname} and age {currnElem.age} and Degree {currnElem.degree}</h1>
        })}
        */}
        <h1 className='textStyle'>Your name is {myOject.myname} and age {myOject.age} and Degree {myOject.degree}</h1>
        <button className='btn btn-primary text-center' onClick={changeObject}> Update </button>
    </div>
  )
}
