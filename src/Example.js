import React from 'react'
import { Link } from 'react-router-dom'

const Example = () => {
  return (
    <div style={{width:'100%',height:'100px',border:'1px solid'}}>
    <Link to={'./UseEffectExample'}>useEffectExample</Link>
    <Link to={'./Count'}>Count</Link>
    <Link to={'./Form'}>form</Link>
    <Link to={'./MyProject'}>MyProject</Link>
</div>
  )
}

export default Example