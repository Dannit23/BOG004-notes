import React, { useState } from 'react';
import { addDoc, collection } from "firebase/firestore";
import { db, notesDatos } from "../firebase/firebase"

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
    notesDatos(setDatos)
    //limpiar datos de la nota
    event.target.reset();

  };

  return (

    <div>
      <form onSubmit={guardarDatos}>
        <div>
          <input type='text'
            id="title-note"
            name="title" 
            placeholder="Introducir titulo"
            onChange={handleInputChange} value={inputs.title}>
          </input>
        </div>
        <div>
          <textarea type='text'
           id="content-note" 
           name="content" 
           placeholder="Introducir Tu nota"
           onChange={handleInputChange} value={inputs.content}>
          </textarea>
        </div>
        <div>
          <button type='submit'>guardar</button>
        </div>
      </form>
    </div>

  )

}