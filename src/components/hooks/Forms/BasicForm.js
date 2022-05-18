import React, { useState } from 'react'

export const BasicForm = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[allEntry,setAllEntry]=useState([]);
const submitForm=(e)=>{
  e.preventDefault();
  if(email && password){
    const newEntry={id:new Date().getTime().toString(),email,password};
setAllEntry([...allEntry, newEntry])
console.log(allEntry);
setEmail("");
setPassword("");
  }else{
    alert("please fill the data");
  }

}
  return (
    <>
    <form action="" onSubmit={submitForm}>
        <div className='mb-3'>
            <label htmlFor='email'>Email</label><br/>
            <input type="text" name="email" id='email' className='form-control col-lg-6' value={email} onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div className='mb-3'>
            <label htmlFor='password'>Password</label><br/>
            <input type="password" name="password" id='password' className='form-control col-lg-6' value={password} onChange={(e)=> setPassword(e.target.value)} />
        </div>
        <button className='btn btn-primary'>Login</button>
    </form>
    {allEntry.map((currElem)=>{
      const {id,email,password}=currElem;
      return(
        <>
              <div className="card mt-5 col-lg-6" key={id}>
  <div className="card-body">
   <p>{email}</p>
   <p>{password}</p>
  </div>
</div>
        </>
      )
      })}

    </>
  )
}
