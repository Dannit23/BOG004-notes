import React from 'react'
import './App.css';
import { 
  Route,
  Routes
} from "react-router-dom"; 

//Se crean componentes para hacer el ruteo
const Home = () => <h1>Home</h1>
const Wall = () => <h1>Wall</h1>

function App() {
  return (
    <div className='container'>
      <h1>Hello World</h1>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Wall' element={<Wall />} />
      </Routes>
    </div>
     
  );
}

export default App;
