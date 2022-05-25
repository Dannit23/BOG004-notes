import React from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom"; 

function Home() {

  let Navigate = useNavigate()
  //Se crea función de logueo con google
  const signInWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result) 
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
  
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
  
      Navigate("/Wall")
  
    })
  
    .catch((error) => {
      console.log(error)
    });
    
  };
  
  // Retornamos el componente que pinta la vista de home 
    return (
      <div id="view-home">
        <div id="home">
          <img className='image-notesH' src="https://i.imgur.com/Wbmj6wv.png" alt="notas"></img>
          <img className='logoH' src="https://i.imgur.com/B3HZxcf.png" alt="logo"></img>
          <img id="eslogan" src="https://i.imgur.com/EgoUkmb.png" alt="eslogan"></img>
          <button onClick={signInWithGoogle} type="submit" id="btn-google">
            <img className='logoGoogle' src="https://i.imgur.com/bD3SqPX.png" alt="logoGoogle">
            </img>Iniciar sesión con Google
          </button>
        </div>
      </div>   

    )
}

export default Home