import horariosDevoto from './img/horariosDevoto.jpg'
import horariosCaseros from './img/horariosCaseros.jpg'
import horariosStrikDev from './img/horariosStrikDev.jpg'
import horariosStriking from './img/horariosStriking.jpg'
import './css/Horarios.css'

const Horarios = () => {
    return (
        <div className='Body'>
            <h1 className="greetingHorarios">
                Horarios
            </h1>

            <div className='container vista-horarios'>
                <div className='row'>
                    <div className='col'>
                        <h2 className='sede'>Sede Villa Devoto</h2>
                        <img src={horariosDevoto} className="horarios" alt="horarios devoto"></img>
                        <img src={horariosStrikDev} className="horarios" alt="horarios devoto striking"></img>
                    </div>
                </div>
                <div className='col'>
                    <h2 className='sede'> Sede Caseros</h2>
                    <img src={horariosCaseros} className="horarios" alt="horario caseros"></img>
                    <img src={horariosStriking} className="horarios" alt="horarios caseros striking"></img>
                </div>
            </div>
        </div >
    )
}

export default Horarios