import React, { useState, useEffect } from 'react';
import { db, notesDatos, updateNote } from "../firebase/firebase"
import { doc, deleteDoc } from "firebase/firestore"
import { async } from "@firebase/util"
import styles from "./NoteList.module.css";

//Este componente es el que pinta las notas en el muro
export const NoteList = ({datos, setDatos}) => {
 
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [noteId, setNoteId] = useState("");

  //Se crea la función editar notas
   const handleEdit = (event, id) => {
   console.log(event.target)
   console.log(event.target.parentElement.children[0])
   event.target.parentElement.children[0].disabled = false
   event.target.parentElement.children[1].disabled = false
   setNoteId(id)
   console.log('ID', id, noteId)
   console.log('content', id, content)
   console.log('title', id, title)
 }

  //Se crea la función de eliminar notas
  const handleDelete = async (id) => {
    console.log("nota eliminada")
    if (window.confirm("¿Estás segur@ de que quieres eliminar esta nota?")) {
      const docRef = doc(db, 'noteCollection', id);
      await deleteDoc(docRef);
    }
    notesDatos(setDatos)
  }

  //Se crea la función para actualizar los datos de la nota
  const handleUpdate = async (event, noteId) => {
    await updateNote(noteId, title, content);
    event.target.parentElement.children[0].disabled = true
    event.target.parentElement.children[1].disabled = true
    console.log(title)
    console.log(content)
    console.log(noteId)
  }

  //El hook de useEffect ejecuta nuestra función getNotes, cada vez que haya un cambio de estado al recibir un props nuevo (datos y setDatos).
  useEffect(()=> {    
    notesDatos(setDatos)
  },[]);

  //
  const changeTitle = (event, id) => {
    setTitle(event.target.value)
    datos[id].title = event.target.value
    setDatos(datos) 
  }

  const changeContent = (event, id) => {
    setContent(event.target.value)
    datos[id].content = event.target.value
    setDatos(datos) 
  }

    return (
    <div>
       <ul>{
          datos.map((item, id) =>
           <li key={id} className={styles.listNote}>
              <textarea 
                disabled
                readOnly={item.id !== noteId} 
                value={item.title} 
                onChange={(event) =>changeTitle(event, id)}
                rows="2" cols="23"
                className={styles.titleNote}
              /> 
             <textarea 
                disabled
                readOnly={item.id !== noteId}
                value={item.content} 
                onChange={(event) =>changeContent(event, id)}
                rows="5" cols="23"
                className={styles.contentNote} 
              />
              <button  onClick={(event) => handleEdit(event, item.id)} className={styles.btnEdit}>
                <img className={styles.imgEdit} src="https://i.imgur.com/YJaBGB3.png" alt="boton Editar"/>
              </button>
              <button onClick={(event) => handleUpdate(event, noteId)} className={styles.btnSave}>
                <img className={styles.imgSave} src="https://i.imgur.com/5i9iW1b.png" alt="boton Guardar"/>
              </button>
              <button onClick={() => handleDelete(item.id)} className={styles.btnDelete}>
                <img className={styles.imgDelete} src="https://i.imgur.com/ucgr6yR.png" alt="boton Eliminar"/>
              </button>
            </li>        
          ) 
        }</ul>
    </div>
    
  )
}