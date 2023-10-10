import React, { useState } from 'react'

const SimpleForm = () => {
    const[input,setInput]=useState('');
  return (
    <div>
    
    <form action={console.log(input)}>
    <label id='username'>Enter the UserName
    <input type='text'></input></label>
    <br></br>
    <label id='password'>Enter the Password
    <input type='password'></input></label>
    </form>
    <br></br>
    <button onClick={(e)=>setInput(alert("form Submitted"))}>Submit</button>

    </div>
  )
}

export default SimpleForm;