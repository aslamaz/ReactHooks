import React, { useState } from 'react'

const Form = () => {
    const [content,setContent]= useState([])
    const [name,setName]= useState('')
    const [Age,setAge]= useState('')
    const [course,setCourse]= useState('')
    

    const insertData = () =>{
           setContent([...content,"Name:"+name,"Age:"+Age,"Course:"+course]) 
           setName('')
           setAge('')
           setCourse('')
    }
 
    return (
       

    <div>
        Name:
        <input type='text' name='content' value={name} onChange={(event) => {setName(event.target.value)}}/><br/>
       

        Age:
        <input type='text' name='content' value={Age} onChange={(event) => {setAge(event.target.value)}}/><br/>
        
        course:
        <input type='text' name='content' value={course} onChange={(event) => {setCourse(event.target.value)}}/>
        <input type='submit' onClick={insertData}></input>

        <div>
            {content.map((cont,key) =>(
                <div key={key}>
                   
                <h1>{cont}</h1>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Form