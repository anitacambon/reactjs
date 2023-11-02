import CarouselDesktop from '../components/CarouselDesktop/CarouselDesktop'
import CarouselMobile from '../components/CarouselMobile/CarouselMobile'
import './css/HomeStyle.css'

const Home = () => {
    return (
        <div>
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