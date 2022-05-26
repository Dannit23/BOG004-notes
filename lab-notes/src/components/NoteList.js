import React, { useState, useEffect } from 'react';
import { db, getNotes } from "../firebase/firebase"
import { doc, deleteDoc, updateDoc, getDoc } from "firebase/firestore"
import { async } from "@firebase/util"

//Este componente es el que pinta las notas en el muro
export const NoteList = ({datos, setDatos}) => {
 
  const [inputs, setInputs] = useState([{
    title: '',
    content: ''
  }]);

  //Se crea la función editar notas
  const handleEdit = async (e, id) => {
   e.preventDefault()
   const note = doc(db, "noteCollection", id)
   const data = {title: inputs.title, content: inputs.content}
   //Se pasa función de firestore para actualizar datos
   await updateDoc(note, data)
 }

  //Se crea la función para obtener un único id
  const getNoteById = async (id) => {
    const note = await getDoc(doc(db, "noteCollection", id))
    if(note.exists()) {
      /* console.log(note.data()) */
      setInputs(note.data().title)
      setInputs(note.data().content)
    }else {
      console.log('La nota no existe')
    }
  }

  useEffect(()=> { 
    getNoteById(id)
  },[]);


  //Se crea la función de eliminar notas
  const handleDelete = async (id) => {
    console.log("nota eliminada")
    if (window.confirm("¿Estás segur@ de que quieres eliminar esta nota?")) {
      const docRef = doc(db, 'noteCollection', id);
      await deleteDoc(docRef);
      /* setDatos (datos.filter((nota)=>nota.id!=id)) */
    }
    getNotes().then((newDatos) => {
      //Se usa setDatos para actualizar los datos
      setDatos(newDatos)
    }); 

  }

    return (
    <div>
       <ul>{
          datos.map((item, id) =>
           <li key={id}>
             <textarea disabled value={item.title}/> 
             <textarea disabled value={item.content}/> 
             <button onClick={handleEdit}>Editar</button>
             <button onClick={() => handleDelete(item.id)}>Eliminar</button>
            </li>        
          ) 
        }</ul>
    </div>
    
  )
}