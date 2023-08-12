import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const [count,setCounter] = useState(0);

  useEffect(() => {
    console.log("counter updated"+count);
  },[count])

  return (
    <>
    <p className='px-6 bg-black text-white py-3'>{count}</p>
    <button className='px-4 py-2 rounded-md bg-blue-400' onClick={() => setCounter(count+1)}>Inc</button>
    
    </>
  )
}

export default UseEffect