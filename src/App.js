// import logo from './logo.svg';
// import './App.css';

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Edit <code>src/App.js</code> and save to reload.
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

//export default App;
// import //itemlistcontainer.js

import Button from './components/navbar/cartwidget'
import Brand from './components/brand/brand'
import {useState} from 'react'




const App = () => {

  const [counter, setCounter] = useState (0)

  const handleSetCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <Brand
        text='Magna'
        id='titulo'
        className='title'
      />
      <Button
        text={`Carrito: ${counter}`} 
        onClick={handleSetCounter}
      />
    </div>
  )
}

export default App