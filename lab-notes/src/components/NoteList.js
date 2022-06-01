import React, { useState, useEffect } from 'react';
import { db, notesDatos } from "../firebase/firebase"
import { doc, deleteDoc, updateDoc, getDoc } from "firebase/firestore"
import { async } from "@firebase/util"

//Este componente es el que pinta las notas en el muro
export const NoteList = ({datos, setDatos}) => {
 
  const [data, setData] = useState([{
    title: '',
    content: ''
  }]);

  //Se crea la función editar notas
   const handleEdit = (event) => {
   console.log(event.target)
   console.log(event.target.parentElement.children[0])
   event.target.parentElement.children[0].disabled = false
   event.target.parentElement.children[1].disabled = false
 }

  //Se crea la función para cambiar el valor de la data
  const handleChange = (event) => {
    setData({
      //se realiza copia de los datos que se iran modificando en la nota
      ...data,
      [event.target.item]: event.target.value
    })
  }

  //Se crea la funcion para actualizar los datos de la nota
  const updateNote = (id, note) => {
    const updateList = data.map((e, item) => {
      if(item === id){
        e = note;
      }
      return e;
    })
    setData(updateList)
  }

  /* await updateDoc(note,data) */
  
  //Se crea la función de eliminar notas
  const handleDelete = async (id) => {
    console.log("nota eliminada")
    if (window.confirm("¿Estás segur@ de que quieres eliminar esta nota?")) {
      const docRef = doc(db, 'noteCollection', id);
      await deleteDoc(docRef);
    }
    notesDatos(setDatos)
  }
  //El hook de useEffect ejecuta nuestra función getNotes, cada vez que haya un cambio de estado al recibir un props nuevo (datos y setDatos).
  useEffect(()=> {    
    notesDatos(setDatos)
  },[]);

    return (
    <div>
       <ul>{
          datos.map((item, id) =>
           <li key={id}>
             <textarea disabled value={item.title} onChange={(event) =>handleChange(event, item)}/> 
             <textarea disabled value={item.content} onChange={(event) =>handleChange(event, item)}/> 
             <button onClick={(event) => handleEdit(event, item)}>Editar</button>
             <button onClick={() => handleDelete(item.id)}>Eliminar</button>
            </li>        
          ) 
        }</ul>
    </div>
    
  )
}