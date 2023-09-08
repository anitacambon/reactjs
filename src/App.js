import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar/navbar'
import ItemListContainer from './components/itemlistcontainer/itemlistcontainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
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
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App 