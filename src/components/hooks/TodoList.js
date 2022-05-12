import React ,{useState} from 'react'

export const TodoList = () => {
    const data=[
        {
          id:0,
          myName:"vikrant shishodia",
          age:27
        },
        {
          id:1,
          myName:"vikrant Rana",
          age:27
        }
      ]
    
     const[allData,setAllData]= useState(data)
     const clearData=()=>{
      setAllData([]);
    }
    const removeData=(id)=>{
// alert(id);
const myNewArray=allData.filter((curElem)=>{
    return curElem.id !== id
})
setAllData(myNewArray)
    }
      return (
        <>
        {allData.map((currnElem)=>{
          return <h1 className='textStyle'>Your name is {currnElem.myName} & age is {currnElem.age}  <button className='btn btn-primary' onClick={()=>removeData(currnElem.id)}>Remove</button></h1>
        })}
          <button className='btn btn-primary' onClick={clearData}>Clear data</button>
        </>
      )
    }
    