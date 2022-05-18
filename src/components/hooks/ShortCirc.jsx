import React from 'react'

export const ShortCirc = () => {
  return (
    <div>
        <h1 className='textStyle'>{"vikrant" || "Shishodia"}</h1>
        <h1 className='textStyle'>{"" && "Shishodia"}</h1>
    </div>
  )
}
