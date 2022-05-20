import  React, { useState } from 'react';
import { addDoc, collection } from "firebase/firestore/lite";
import { db } from "../firebase/firebase"


export const Notes = () => {

 const [datos, setDatos] = useState ({
    title: '',
    content: ''
 });

  //Se crea evento para pintar los datos de la nota
  const handleInputChange = (event) => {
    console.log('funciona')
    setDatos({
      //se realiza copia de los datos que se iran modificando en la nota
      ...datos, 
      [event.target.name] : event.target.value
    });
  };
  //Se crea el evento del botón de guardar nota
  const guardarDatos = async (event) =>{
    event.preventDefault();
    console.log(datos.title + ' ' + datos.content)
    let dataToSend = {
      title: datos.title,
      content: datos.content
    }
  let docRef = await addDoc(collection(db, "noteCollection"), dataToSend)  
};

  return (
    <div>
        <form onSubmit={guardarDatos}>
            <div>
              <input type='text' id="title-note" name="title" onChange={handleInputChange}></input>
            </div>
            <div>
              <textarea type='text' id="content-note" name="content" onChange={handleInputChange}></textarea>
            </div>
            <div>
              <button type='submit'>guardar</button>
            </div>
        </form>
        <h3>{datos.title} - {datos.content}</h3>
    </div>

  ) 
  
}