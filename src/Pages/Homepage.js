import React from 'react'
import "./Homepage.scss"
import Footer from '../Components/Footer/Footer'
import Mission from '../Components/MissionSection/Mission'
import Offer from '../Components/OfferSection/Offer'
import Choose from '../Components/ChooseSection/Choose'
import Security from '../Components/SecuritySection/Security'
import Serve from '../Components/ServeSection/Serve'
import Banner from '../Components/BannerSection/Banner'

const Homepage = () => {
    return (
        <div className='homepage'>
            <Banner />
            <Mission />
            <Offer />
            <Serve />
            <Choose />
            <Security />
            <Footer></Footer>
        </div>
    )
}

export default Homepage