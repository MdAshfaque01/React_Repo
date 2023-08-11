import React, { useState } from 'react'

const Child1 = (props) => {
   const  [count,setCount] = useState(0);

   function handleCount() {

    setCount(count + 1);
    props.countInParent(count + 1);

   }
  return (
    <>
        <p className='bg-black text-white px-6 py-4 rounded-md'>inside the child 1 : {count}</p>
        <button onClick={handleCount} className='px-4 py-2 bg-blue-500 my-3 rounded-md'>Inc</button>
    </>
  )
}

export default Child1