import CarouselDesktop from '../components/CarouselDesktop/CarouselDesktop'
import CarouselMobile from '../components/CarouselMobile/CarouselMobile'
import './css/HomeStyle.css'

const Home = () => {
    return (
        <div className='Body'>
            <div className='Leyenda'>
                Centro de Entrenamiento de Artes Marciales y Deportes de Combate
            </div>

            <div className='CarouselDesktop'>
                <CarouselDesktop />
            </div>
            <div className='CarouselMobile'>
                <CarouselMobile />
            </div>
        </div>
    )

}

export default Home   