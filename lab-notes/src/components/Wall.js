import React, { useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom"; 
import { Notes } from './Notes.js'
/* import { getNotes } from '../firebase/firebase.js' */

const Wall = () => {
  let Navigate = useNavigate()
  function LogoutButton(e) {
    e.preventDefault();
    console.log('click')
    Navigate("/")
  } 

 /*  const [datos, setDatos] = useState ([])
  getNotes().then(notesList => {
    notesList.forEach( note => ([
      ...datos, note
    ]) )
    console.log(datos)
  }); */

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
        <img className='image-profile' src={localStorage.getItem("profilePic")} />
        <div id="user-data">
          <h1>{localStorage.getItem("name")}</h1>
          <h1>{localStorage.getItem("email")}</h1>
        </div>             
      </div>
       <Notes/>          
    </div>
      
  );
  
};

export default Wall

