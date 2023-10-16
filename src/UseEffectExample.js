import React, { useEffect, useLayoutEffect, useState } from 'react'

const UseEffectExample = () => {

 

  const [check,setCheck]=useState(false)
  const [array,setArray]=useState('')

  const changeCheck = () =>{
    setCheck(!check)
  }

  
useLayoutEffect(() => {
 setArray('hello')
},[])

useEffect(() => {
  setArray('hi')
},[check])

  return (
    <div><h1>{array}</h1><br/>
    <button onClick={changeCheck}>Click</button>
  
  
    </div>
  )
}

export default UseEffectExample