import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"; 
import { Notes } from './Notes.js'
import { NoteList } from './NoteList'
import styles from "./Wall.module.css";

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
      <div className={styles.outset}>
        <img className={styles.imageNotesW} src="https://i.imgur.com/Wbmj6wv.png" alt="notas"></img> 
        <img className={styles.logoW} src="https://i.imgur.com/B3HZxcf.png" alt="logo"></img>
        <form onSubmit={LogoutButton}>
          <button type='submit' className={styles.signOff}>
            <img className={styles.imgSing} src="https://i.imgur.com/kkKxJhI.png" alt="cerrarSesion"></img>
          </button>
        </form>
      </div>             
      <div className={styles.userProfile}>
        <img className={styles.imageProfile} src={localStorage.getItem("profilePic")} alt="imagenCorreo" />
        <div className={styles.userData}>
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

