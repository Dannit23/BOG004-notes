import React, { useState, useEffect } from 'react'
import { getNotes } from '../firebase/firebase'

export const NoteList = () => {
  
  const [datos, setDatos] = useState ([{
    title: '',
    content: ''
  }])

  useEffect(()=>{
    console.log(useEffect)
    getNotes().then((newDatos)=>{
      console.log(newDatos)
      setDatos(newDatos)});
  }, []);

  return (
    <div>
       <ul>{
          datos.map(item =>
           <li key={item.id}>
             <p>{item.title}</p> 
             <p>{item.content}</p> 
            </li>        
         ) 
        }</ul>
    </div>
   
  )
}