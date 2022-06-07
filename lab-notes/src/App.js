import React from 'react'
import './App.css';
import { Route, Routes, Link } from "react-router-dom"; 
import Home from './components/Home'
import Wall from './components/Wall'

//Se crean componentes para hacer el ruteo
// const Home = () => <h1>Home</h1>
/* const Wall = () => <h1>Wall</h1>  */
const NotFound = () => <h1>NotFound</h1>

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
         <Route path='/Wall' element={<Wall />} />
         <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
     
  );
}

export default App;
