import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Actividades from './pages/Actividades'
import Escuelita from './pages/Escuelita'
import Horarios from './pages/Horarios'
import Products from './pages/Tienda'
import Contacto from './pages/Contacto'
import NavBar from './components/navbar/navbar'

import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='NavBar'>
          <NavBar />
        </div>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/actividades' element={<Actividades />} />
          <Route path='/escuelita' element={<Escuelita />} />
          <Route path='/horarios' element={<Horarios />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/ver-todo' element={<Products />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App 