import CarMobJu from './img/CarMobJu.jpg'
import CarMobAguss from './img/CarMobAguss.jpg'
import CarMobboxeo from './img/CarMobboxeo.jpg'
import CarMobzazaNogi from './img/CarMobzazaNogi.jpg'
import CarMobKick from './img/CarMobKick.jpeg'
import CarMobEscuelita from './img/CarMobEscuelita.jpeg'
import './CarouselMobile.css'

const CarouselMobile = () => {
    return (
        <div >
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" >
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="3000">
                        <img src={CarMobJu} className="d-block w-100 mx-auto" alt="imagen ju"></img>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={CarMobEscuelita} className="d-block w-100" alt="imagen escuelita"></img>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={CarMobAguss} className="d-block w-100" alt="imagen aguss"></img>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={CarMobboxeo} className="d-block w-100" alt="imagen boxeo"></img>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={CarMobzazaNogi} className="d-block w-100" alt="imagen zaza"></img>
                    </div>
                    <div className="carousel-item" data-bs-interval="3000">
                        <img src={CarMobKick} className="d-block w-100" alt="imagen kick"></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplay" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplay" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default CarouselMobile