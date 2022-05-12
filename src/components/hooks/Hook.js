import React from 'react'

export const Hook = (props) => {
  return (
    <div>
        
        <h1 className='text-center'>{props.count}</h1>
        <button className='btn btn-primary text-center px-5 mt-4' onClick={props.increment}>+</button>
        <button className='btn btn-primary text-center px-5 mt-4 mx-2' onClick={props.decrement }>-</button>
        <h2 className='mt-5 mb-4 text-center'>{props.myName}</h2>
        <button className='btn btn-primary text-center px-5' onClick={props.changeName}>Change Name</button>
        
        </div>
  )
}
