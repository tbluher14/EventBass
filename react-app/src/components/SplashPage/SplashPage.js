import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import splashImage from '../../components/assets/splashimage.jpeg'
import Footer from './footer'

// import github from '../components/github.png'
// import linkedin from '../components/linkedin.png'
import './SplashPage.css'
//

const SplashPage = () => {

    const history = useHistory()
    return (
        <div className="splash-page-container">
            <div className='splash-page-button-image-container'>

                <img src={splashImage}
                alt="splash"
                className='splash-image'
                />
                <div className='splash-page-button'>
                    <button
                    className='all-events-button'
                    onClick={() => history.push('/all-events')}
                    >
                        Find Your Next Event
                    </button>
                </div>
            </div>
            <div className='homepage-bottom-container'>
                <div className='homepage-bottom-links'>
                    <div className='homepage-links-tom'>
                        <Footer />

                    </div>
                </div>
            </div>
        </div>
    )
}


export default SplashPage
