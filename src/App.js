import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Actividades from './pages/Actividades'
import Escuelita from './pages/Escuelita'
import Horarios from './pages/Horarios'
import Contacto from './pages/Contacto'
import NavBar from './components/navbar/navbar'
import ItemListContainer from './components/itemlistcontainer/itemlistcontainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { CartProvider } from './context/CartContext'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Checkout from './components/CheckOut/checkout'
import Footer from './components/Footer/Footer'




function App() {
  return (
    <div className='App'>
      <CartProvider>
        <BrowserRouter>
          <div className='NavBar'>
            <NavBar />
          </div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/actividades' element={<Actividades />} />
            <Route path='/escuelita' element={<Escuelita />} />
            <Route path='/horarios' element={<Horarios />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/ver-todo' element={<ItemListContainer />} />
            <Route path='/categoria/:categoria' element={<ItemListContainer />} />
            <Route path='/products/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          <div className='NavBar'>
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App 