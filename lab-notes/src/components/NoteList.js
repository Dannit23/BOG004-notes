import { db } from "../firebase/firebase"
import { doc, deleteDoc } from "firebase/firestore"
import { async } from "@firebase/util"

//Este componente es el que pinta las notas en el muro
export const NoteList = ({datos}) => {
 
  //Se crea la función editar notas
  const handleEdit = () => {
  console.log('Hola')
 }
  
  //Se crea la función de eliminar notas
  const handleDelete = async (id) => {
    console.log("nota eliminada")
    if (window.confirm("¿Estás segur@ de que quieres eliminar esta nota?")) {
      const docRef = doc(db, 'noteCollection', id);
      await deleteDoc(docRef);
    }
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