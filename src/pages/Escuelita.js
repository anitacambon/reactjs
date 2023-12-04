import imgActEscuelita from './img/imgActEscuelita.jpg'
import imgEscBJJ from './img/imgEscBJJ.jpg'
import imgEscBOX from './img/imgEscBOX.jpg'
import imgEscPrep from './img/imgEscPrep.jpg'
import imgEscTKD from './img/imgEscTKD.jpeg'
import { Link } from "react-router-dom"
import './css/Escuelita.css'

const Escuelita = () => {
    return (
        <div className='Body'>
            <div>
                <h1 className="greetingActividades">
                    Escuelita
                </h1>
            </div>
            <div className='actividad'>
                <h3>¿De qué consta la escuelita?</h3>
                <div><img src={imgActEscuelita} className="img-act" alt="imagen jiu jitsu"></img><p className='text'>Iniciación deportiva orientada a las artes marciales</p>
                    <p className='text'>Boxeo infantil sin contacto</p>
                    <p className='text'>Brazilian Jiu Jitsu infantil</p>
                    <p className='text'>Taekwondo ITF</p></div>
            </div>

            <hr></hr>

            <div className='actividad'>
                <h3>Iniciación Deportiva orientada a las Artes Marciales</h3>
                <div><img src={imgEscPrep} className="img-act" alt="imagen jiu jitsu"></img><h4>Para niños y niñas de 5 a 8 años</h4>
                    <p className='text'>Los alumnos de iniciación deportiva tienen clase los lunes, miércoles y viernes en la sede Villa Devoto (CABA). Cada día con uno de los tres profesores de la escuelita.</p>
                    <p className='text'>El objetivo de la clase no está en la enseñanza de las técnicas propias del arte marcial en el que se especializa el profesor, sino en el desarrollo de las habilidades motoras necesarias para que en un futuro las específicas sean más fáciles de incorporar.
                        La estrategia de enseñanza que predomina en las clases es la de llevar todos los contenidos a un entorno lúdico.
                        Se hace foco específicamente en que los niños incorporen hábitos de orden, atención, respeto hacia el prójimo y el compañerismo.</p></div>
            </div>

            <hr></hr>

            <div className='actividad'>
                <h3>Boxeo Infantil sin Contacto</h3>
                <div><img src={imgEscBOX} className="img-act" alt="imagen jiu jitsu"></img><h4>Para niños y niñas de 8 a 12 años</h4>
                    <p className='text'>El boxeo infantil sin contacto (BISC) es una nueva modalidad de enseñanza de boxeo. Lejos de la "vieja escuela" del mismo, donde los niños desde pequeños son alentados a boxear entre ellos. Ésta se destaca por el cuidado de los mismos: evitando que reciban golpes en la cabeza y cuidando sus manos de las secuelas que pueden dejar el exceso de golpeo a la bolsa.</p>
                    <p className='text'>Las clases buscan desarrollar la técnica y táctica propia del boxeo a través de diversas herramientas y estrategias planteadas por el profesor.</p>
                    <h5>Profesor a cargo: </h5>
                    <p className='prof'>Lucas Suarez <Link className="insta" to='https://www.instagram.com/magnaboxing/' target="blank">@magnaboxing</Link></p></div>
            </div>

            <hr></hr>

            <div className='actividad'>
                <h3>Brazilian Jiu Jitsu infantil</h3>
                <div><img src={imgEscBJJ} className="img-act" alt="imagen jiu jitsu"></img><h4>Para niños y niñas de 8 a 12 años</h4>
                    <p className='text'>El jiu jitsu brasilero, popularmente conocido como el "arte suave" es un arte marcial en auge: se caracteriza por el dominio de los rivales sin la necesidad de golpes, a través de palancas, derribos y sumisiones.</p>
                    <p className='text'>Muy similar al judo, pero con un componente más activo a la hora de la lucha en el suelo. Trae consigo los beneficios de las artes marciales y graduaciones de cinturones con todo lo que eso conlleva. Promoviendo la autosuperación en los que lo practican.</p>
                    <h5>Profesores a cargo: </h5>
                    <p className='prof'>Agustin Oliva <Link className="insta" to='https://www.instagram.com/agustinolivabjj/' target="blank">@agustinolivabjj</Link></p>
                    <p className='prof'>Leandro Lefosse <Link className="insta" to='https://www.instagram.com/lean_lefosse/' target="blank">@lean_lefosse</Link></p></div>
            </div>

            <hr></hr>

            <div className='actividad'>
                <h3>Taekwondo ITF</h3>
                <div><img src={imgEscTKD} className="img-act" alt="imagen jiu jitsu"></img><h4>Para niños y niñas de 8 a 12 años</h4>
                <p className='text'>La práctica del taekwondo estimula la elasticidad, la fuerza, la coordinación y la resistencia. También mejora los reflejos, aumenta la resistencia cardiovascular y potencia el conocimiento del cuerpo.</p>
                <p className='text'>En el caso de los niños, los conduce a que ellos no desarrollen conductas violentas sino todo lo contrario, les enseña disciplina, les fomenta el autocontrol y los ayuda a valorar la importancia de la inofensividad y el respeto mutuo.</p>
                <h5>Profesores a cargo: </h5>
                <p className='prof'>Felix Perez Sanches <Link className="insta" to='https://www.instagram.com/fpsanchezz/' target="blank">@fpsanchezz</Link></p></div>
            </div>

            <hr></hr>

            <div className='actividad'>
                <h3>¿Qué necesito para la práctica?</h3>
                <div className='text-esc'>
                    <p>• Es fundamental para la actividad física que los niños asistan con su botella de agua y ropa cómoda.</p>
                    <p>• Al practicar sobre el tatami, el cual no puede ser pisado con calzado, no es necesario traer zapatillas deportivas.</p>
                    <p>• Es obligatorio traer ojotas para moverse fuera del tatami y no perder tiempo en atarse los cordones.</p>
                    <p>• En el caso de las clases de Jiu Jitsu, la práctica del mismo es con kimono, el cual puede no estar en los primeros meses pero será obligatorio a la hora de la graduación.</p>
                    <p>• La misma regla aplica para las clases de taekwondo y su dobok.</p>
                    <p>• Para las clases de boxeo no es obligatorio tener guantes propios, pero es la opción más higiénica. En el caso de comprar guantes se recomienda que sean de adultos pero con pocas onzas (entre 8 y 10). Distinto es el caso de las vendas para las muñecas, las cuales son obligatorias ya que la ausencia de las mismas pueden devenir en una lesión.</p>
                </div>
            </div>
        </div>
    )
}

export default Escuelita