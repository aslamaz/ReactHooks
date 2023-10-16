import React from 'react'
import UseEffectExample from './UseEffectExample'
import UseContextExample from './UseContextExample'
import { Route, Routes } from 'react-router-dom'
import Example from './Example'
import Count from './Count'
import Form from './form'
import UseRefExample from './UseRefExample'
import UseReducerExample from './UseReducerExample'
import MyProject from './MyProject'
import UseCallBackExample from './UseCallBackExample'
import UseMemoExample from './UseMemoExample'
import Promises from './Promises'

const App = () => {
  return (
    <div>
      <Example/>
    
    <Routes>
     
      <Route path='UseEffectExample' element={<UseEffectExample/>} />
      <Route path='UseContextExample' element={<UseContextExample/>} />
      <Route path='UseMemoExample' element={<UseMemoExample/>} />
      <Route path='UseRefExample' element={<UseRefExample/>} />
      <Route path='UseReducerExample' element={<UseReducerExample/>} />
      <Route path='MyProject' element={<MyProject/>}/>
      <Route path='Count' element={<Count/>}/>
      <Route path='form' element={<Form/>}/>
      <Route path='UseCallBackExample' element={<UseCallBackExample/>}/>
      <Route path='Promises' element={<Promises/>}/>

    </Routes>
    </div>
  )
}

export default App
