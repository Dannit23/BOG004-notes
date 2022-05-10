import React from 'react'

const Wall = () => {
    return (
        <div id="view-wall">
            <div id="outset">
              <img className='image-notesW' src="https://i.imgur.com/Wbmj6wv.png" alt="notas"></img> 
              <img className='logoW' src="https://i.imgur.com/B3HZxcf.png" alt="logo"></img>
              <img className='add-note' src="https://i.imgur.com/PrK7Qax.png" alt="agregarNota"></img>
              <img className='sign-off' src="https://i.imgur.com/kkKxJhI.png" alt="cerrarSesion"></img>
            </div>             
            <div id="user-profile">
              <img className='image-profile' src={localStorage.getItem("profilePic")} />
              <div id="user-data">
                  <h1>{localStorage.getItem("name")}</h1>
                  <h1>{localStorage.getItem("email")}</h1>
              </div>             
            </div>
                    
        </div>
      
    )
}

export default Wall