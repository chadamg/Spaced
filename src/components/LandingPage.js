import Navbar from './LandingPageComponents/navbar/Navbar';
import Carousel from './LandingPageComponents/carousel/Carousel';
import Body from './LandingPageComponents/body/Body';
import Footer from './LandingPageComponents/footer/index'


const LandingPage = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Carousel />
            </div>
            <div>
                <Body />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default LandingPage