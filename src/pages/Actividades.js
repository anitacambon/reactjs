import imgActBJJ from './img/imgActBJJ.jpg'
import imgActBJJgi from './img/imgActBJJgi.jpg'
import imgActMMA from './img/imgActMMA.jpg'
import imgActKick from './img/imgActKick.jpg'
import imgActBoxeo from './img/imgActBoxeo.jpg'
import imgActEscuelita from './img/imgActEscuelita.jpg'
import { Link } from "react-router-dom"
import './css/Actividades.css'

const Actividades = () => {
    return (
        <div className='Body'>
            <h1 className="greetingActividades">
                Actividades
            </h1>

            <div className='actividad'>
                <img src={imgActBJJgi} className="img-act" alt="imagen jiu jitsu"></img>
                <h3>Jiu Jitsu Brasilero</h3>
                <p className='text'>El jiu-jitsu brasileño (o BJJ) es un arte marcial, deporte de combate y sistema de defensa personal desarrollado en Brasil. Se centra principalmente en la lucha cuerpo a cuerpo en el suelo, usando para ello luxaciones, estrangulaciones, inmovilizaciones y derribos. El principal objetivo del jiu-jitsu brasileño es someter al rival mediante una luxación o estrangulación sin necesidad de usar golpes, de ahí que se le denomine a veces «arte suave».</p>
            </div>

            <div className='actividad'>
                <img src={imgActBJJ} className="img-act" alt="imagen jiu jitsu"></img>
                <h3>Jiu Jitsu No-Gi</h3>
                <p className='text'>Modalidad sin kimono o gi, también conocida como Grappling</p>
                <h5>Profesores a cargo: </h5>
                <div className='prof'>
                    <p>Ezequiel "Zaza" Eyaralar <Link className="insta" to='https://www.instagram.com/zazabjj/' target="blank">@zazabjj</Link></p>
                    <p>Julia Pareja <Link className="insta" to='https://www.instagram.com/juubjj/' target="blank">@juubjj</Link></p>
                    <p>Nicolás "Shaggy" <Link className="insta" to='https://www.instagram.com/nico.shaggy/' target="blank">@nico.shaggy</Link></p>
                    <p>Claudio "Zapa" Mastrolorenzo <Link className="insta" to='https://www.instagram.com/claudiozapa69/' target="blank">@claudiozapa69</Link></p>
                    <p>Gianfranco Mastrolorenzo <Link className="insta" to='https://www.instagram.com/gianf99/' target="blank">@gianf99</Link></p>
                    <p>Agustin Oliva <Link className="insta" to='https://www.instagram.com/agustinolivabjj/' target="blank">@agustinolivabjj</Link></p>
                    <p>Gaston Aquino <Link className="insta" to='https://www.instagram.com/gastoneze.aquino/' target="blank">@gastoneze.aquino</Link></p>
                    <p>Leandro Lefosse <Link className="insta" to='https://www.instagram.com/lean_lefosse/' target="blank">@lean_lefosse</Link></p>
                </div>
            </div>
            <hr></hr>
            <div className='actividad'>
                <img src={imgActMMA} className="img-act" alt="imagen mma"></img>
                <h3>MMA</h3>
                <p className='text'>Las artes marciales mixtas (conocida frecuentemente por sus siglas en inglés MMA, de mixed martial arts) son la combinación de técnicas provenientes de distintas artes marciales y deportes de combate, generalmente se usa para la competición en el deporte de combate pero también para la defensa personal. </p>
                <h5>Profesores a cargo: </h5>
                <p className='prof'>Gabriel Bellomini <Link className="insta" to='https://www.instagram.com/gabriel.bellomini/' target="blank">@gabriel.bellomini</Link></p>
            </div>
            <hr></hr>
            <div className='actividad'>
                <img src={imgActBoxeo} className="img-act" alt="imagen boxeo"></img>
                <h3>Boxeo</h3>
                <p className='text'>Clases de boxeo mixto, competitivo y recreativo.</p>
                <h5>Profesores a cargo: </h5>
                <p className='prof'>Pablo "Perro" Dhorta <Link className="insta" to='https://www.instagram.com/perrodhorta/' target="blank">@perrodhorta</Link></p>
                <p className='prof'>Lucas Suarez <Link className="insta" to='https://www.instagram.com/magnaboxing/' target="blank">@magnaboxing</Link></p>
            </div>
            <hr></hr>
            <div className='actividad'>
                <img src={imgActKick} className="img-act" alt="imagen kick y thai"></img>
                <h3>Kick & Thai</h3>
                <p className='text'>El kickboxing es un grupo de deportes de combate de pie y una forma de boxeo, basados en patadas y puñetazos. El combate se desarrolla en un ring de boxeo, normalmente con guantes de boxeo, protectores bucales, pantalones cortos y pies descalzos para favorecer el uso de patadas.</p>
                <h5>Profesores a cargo: </h5>
                <p className='prof'>Nico Ruiperez <Link className="insta" to='https://www.instagram.com/ruiperez.nico/' target="blank">@ruiperez.nico</Link></p>
                <p className='prof'>Brian Battaglia <Link className="insta" to='https://www.instagram.com/brian.battaglia/' target="blank">@brian.battaglia</Link></p>
            </div>
            <hr></hr>
            <div className='actividadFin'>
                <img src={imgActEscuelita} className="img-act" alt="imagen escuelita"></img>
                <h3>Escuelita</h3>

                <p>MISION: La escuela de artes marciales es la propuesta infantil que ofrece la Academia Magna para comenzar con el desarrollo y la transmisión de las artes marciales y deportes de combate a la población de Villa Devoto, Caseros y alrededores.</p>
                <p>VISION: Buscamos transmitir los beneficios de las artes marciales, tanto físicos como cognitivos y actitudinales a los más pequeños, para que puedan forjar carácter, confianza y autocontrol dentro de un ambiente seguro.</p>
                <p>VALORES: Nuestros valores principales son el respeto, el compañerismo y la disciplina.</p>

                <h4>Profesores a cargo: </h4>
                <p className='prof'>Lucas Suarez <Link className="insta" to='https://www.instagram.com/magnaboxing/' target="blank">@magnaboxing</Link></p>
                <p className='prof'>Agustin Oliva <Link className="insta" to='https://www.instagram.com/agustinolivabjj/' target="blank">@agustinolivabjj</Link></p>
                <p className='prof'>Leandro Lefosse <Link className="insta" to='https://www.instagram.com/lean_lefosse/' target="blank">@lean_lefosse</Link></p>

            </div>

        </div>
    )
}

export default Actividades