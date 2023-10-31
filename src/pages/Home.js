import CARcaserosGi from './img/CARcaserosGi.jpg'
import CARdevotoGi from './img/CARdevotoGi.jpg'
import CARstrikingCaseros from './img/CARstrikingCaseros.jpg'
import CARstrikingDevoto from './img/CARstrikingDevoto.jpg'
import './home.css'

const Home = () => {
    return (
        <div >
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-caption d-none d-md-block">
                    <h1 className="carousel-caption d-none d-md-block">
                        Academia MAGNA
                    </h1>
                    <p>Centro de Entrenamiento de Artes Marciales y Deportes de Combate</p>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="4000">
                        <img src={CARcaserosGi} className="d-block w-100" alt="imagen caseros"></img>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src={CARdevotoGi} className="d-block w-100" alt="imagen devoto"></img>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src={CARstrikingCaseros} className="d-block w-100" alt="striking caseros"></img>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src={CARstrikingDevoto} className="d-block w-100" alt="striking caseros"></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Home