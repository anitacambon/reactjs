import sitio_construccion from './img/sitio_construccion.jpg'
import './css/Escuelita.css'

const Escuelita = () => {
    return (
        <div>
            <h1 className="greetingEscuelita">
                Escuelita
            </h1>
            <img src={sitio_construccion} className='imagen-construccion'  alt="sitio en construccion"></img>
        </div>
    )
}

export default Escuelita