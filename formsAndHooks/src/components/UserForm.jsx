import React, { useRef, useState } from 'react'

const UserForm = () => {

    const [name,setName] = useState("");
    
    const nameInputRef = useRef(null);

    function handleSubmit(e) {
         e.preventDefault();
        // console.log("submit clicked")
        console.log(nameInputRef)
       console.log(nameInputRef.current);
       console.log(nameInputRef.current.value);
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor='nameInput'>Name</label>
            {/* <input type="text" onChange={(e) => setName(e.target.value)}/> */}
            <input type="text" id='nameInput' ref={nameInputRef}  className='border-2 border-cyan-300 outline-none'/>
            <button type='submit'>submit</button>
        </form>
    </>
  )
}

export default UserForm