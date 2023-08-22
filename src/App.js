import './App.css'
import NavBar from './components/navbar/navbar'
import ItemListContainer from './components/itemlistcontainer/itemlistcontainer'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"




function App () {

  return (
    <div className='NavBar'>
      <NavBar/>
      <ItemListContainer greeting={'Centro de entrenamiento de Artes Marciales y Deportes de Combate'} />
    </div>
    
  )
}

export default App 