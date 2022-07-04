import './App.css';

// Importing Pages


import { Routes, Route } from 'react-router-dom'
import {Login,Signup} from './Pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>

  );
}

export default App;
