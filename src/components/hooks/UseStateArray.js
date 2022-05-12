import React, { useState } from 'react'

export const UseStateArray = () => {
  const data=[
    {
      id:1,
      myName:"vikrant shishodia",
      age:27
    },
    {
      id:2,
      myName:"vikrant Rana",
      age:27
    }
  ]

 const[allData,setAllData]= useState(data)
 const clearData=()=>{
  setAllData([]);
}
  return (
    <>
    {allData.map((currnElem)=>{
      return <h1 className='textStyle'>Your name is {currnElem.myName} & age is {currnElem.age}</h1>
    })}
      <button className='btn btn-primary' onClick={clearData}>Clear data</button>
    </>
  )
}
