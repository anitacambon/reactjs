import CarMobJu from './img/CarMobJu.jpg'
import CarMobAguss from './img/CarMobAguss.jpg'
import CarMobboxeo from './img/CarMobboxeo.jpg'
import CarMobzazaNogi from './img/CarMobzazaNogi.jpg'
import CarMobKick from './img/CarMobKick.jpeg'

const CarouselMobile = () => {
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
                        <img src={CarMobJu} className="d-block w-100" alt="imagen ju"></img>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src={CarMobAguss} className="d-block w-100" alt="imagen aguss"></img>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src={CarMobboxeo} className="d-block w-100" alt="imagen boxeo"></img>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src={CarMobzazaNogi} className="d-block w-100" alt="imagen zaza"></img>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <img src={CarMobKick} className="d-block w-100" alt="imagen kick"></img>
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

export default CarouselMobile