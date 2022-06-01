import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"; 
import { Notes } from './Notes.js'
import { NoteList } from './NoteList'

const Wall = () => {
  //Se usa Navigate para redireccionar a un componente en especifico
  let Navigate = useNavigate()
  // Se crea funcion del botón cerrar sesión
  function LogoutButton(e) {
    e.preventDefault();
    console.log('click')
    Navigate("/")
  } 

  const [datos, setDatos] = useState ([{
    title: '',
    content: ''
  }])
  
  return (
    <div id="view-wall">
      <div id="outset">
        <img className='image-notesW' src="https://i.imgur.com/Wbmj6wv.png" alt="notas"></img> 
        <img className='logoW' src="https://i.imgur.com/B3HZxcf.png" alt="logo"></img>
        <img className='add-note' src="https://i.imgur.com/PrK7Qax.png" alt="agregarNota"></img>
        <form onSubmit={LogoutButton}>
          <button type='submit' >
            <img className='sign-off' src="https://i.imgur.com/kkKxJhI.png" alt="cerrarSesion"></img>
          </button>
        </form>
      </div>             
      <div id="user-profile">
        <img className='image-profile' src={localStorage.getItem("profilePic")} alt="imagenCorreo" />
        <div id="user-data">
          <h1>{localStorage.getItem("name")}</h1>
          <h1>{localStorage.getItem("email")}</h1>
        </div>             
      </div>
       <Notes datos={datos} setDatos={setDatos}/> 
       <NoteList datos={datos} setDatos={setDatos}/>         
    </div>
    
  );
  
};

export default Wall

