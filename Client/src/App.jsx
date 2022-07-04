import './App.css';

// Importing Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


// Importing Pages


import { Routes, Route } from 'react-router-dom'
import {Home, Login,Signup} from './Pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>

  );
}

export default App;
