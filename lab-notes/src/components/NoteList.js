import { sendSignInLinkToEmail } from 'firebase/auth';
import { collection, doc, onSnapshot } from 'firebase/firestore';
import React, { useState, useEffect, useContext } from 'react'
import { getNotes, db } from '../firebase/firebase'
import { Context } from './Notes';

export const NoteList = () => {
  /* const { index, newDatos} = useContext(Context); */

  const [datos, setDatos] = useState ([{
    title: '',
    content: ''
  }])

  useEffect(()=> {
    onSnapshot(collection(db, 'notesCollection'), (snapshot) => 
      setDatos(snapshot.docs.map((doc) =>({...doc.data(), id:doc.id})))
    );
    
    console.log(useEffect)
     getNotes().then((newDatos) => {
        console.log(newDatos)
        setDatos(newDatos)});
  }, []);

  return (
    <div>
       <ul>{
          datos.map((item, index) =>
           <li key={index}>
             <p>{item.title}</p> 
             <p>{item.content}</p> 
            </li>        
          ) 
        }</ul>
    </div>
    
  )
}