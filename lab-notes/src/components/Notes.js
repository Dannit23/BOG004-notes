import React, { useState } from 'react';
import { addDoc, collection } from "firebase/firestore";
import { db, notesDatos } from "../firebase/firebase";
import styles from "./Notes.module.css";

export const Notes = ({ datos, setDatos }) => {
 //Se crea arreglo para actualizar el estado de los inputs, donde los inputs es donde se almacena la informacion de las notas
  const [inputs, setInputs] = useState([{
   title: '',
   content: ''
 }]);

  //Se crea evento para pintar los datos de la nota
  const handleInputChange = (event) => {
    console.log('funciona')
     setInputs({
      //se realiza copia de los datos que se iran modificando en la nota
      ...inputs,
      [event.target.name]: event.target.value
    }); 
  };

  //Se crea el evento del botón de guardar nota
  const guardarDatos = async (event) => {
    event.preventDefault();
    console.log(inputs.title + ' ' + inputs.content)
    let dataToSend = {
      title: inputs.title,
      content: inputs.content
    }
    //Se crea variable para enviar datos a la colección 
    let docRef = await addDoc(collection(db, "noteCollection"), dataToSend)
    //Se llama función para cambiar el valor de datos de la lista de notas
    notesDatos(setDatos)
    //limpiar datos de la nota
    event.target.reset();
    setInputs({
      title:'',
      content:''
    })

  };

  return (

    <div>
      <form onSubmit={guardarDatos}>
        <div className={styles.createNote}>
          <textarea type='text'
            rows="2" cols="23"
            className={styles.titleNote}
            name="title" 
            placeholder="Introducir título..."
            onChange={handleInputChange} value={inputs.title}>
          </textarea>
          <textarea type='text'
           rows="5" cols="23"
           className={styles.contentNote} 
           name="content" 
           placeholder="Introducir Tu nota..."
           onChange={handleInputChange} value={inputs.content}>
          </textarea>
          <button className={styles.btnSave} type='submit'>
            <img className={styles.addNote} src="https://i.imgur.com/PrK7Qax.png" alt="agregarNota"></img>
          </button>
        </div>
      </form>
    </div>

  )

}