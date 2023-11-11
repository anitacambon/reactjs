import sitio_construccion from './img/sitio_construccion.jpg'
import './css/Actividades.css'

const Actividades = () => {
    return (
        <div>
            <h1 className="greetingActividades">
                Actividades
            </h1>
            <img src={sitio_construccion} className='imagen-construccion' alt="sitio en construccion"></img>
        </div>
    )
}

export default Actividades