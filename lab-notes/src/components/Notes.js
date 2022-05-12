import  React, { useState } from 'react';

export const Notes = () => {

 const [datos, setDatos] = useState ({
     title: '',
     content:''
 })

  const handleInputChange = (event) => {
      console.log('funciona')
  }

  return (
    <div>
        <form>
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
    </div>

  )
   
  
}