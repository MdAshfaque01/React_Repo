import { useState } from "react"
import Child1 from "./components/Child1"
import Child2 from "./components/Child2"

function App() {
 
  const [countInP,setCount] = useState(0);

  function countInParent(count) {
    setCount(count)
  }

  return (
    <>
       <div className="flex justify-center items-center min-h-screen">
       
          <div>
          <p className="bg-black text-white px-6 py-4 rounded-md my-4">
        inside the parent : {countInP}
      </p>
              <Child1 countInParent={countInParent}/>
              <Child2 countInchildc2={countInP}/>
          </div>
       </div>
    </>
  )
}

export default App
