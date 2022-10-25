import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import splashImage from '../components/assets/splashimage.jpeg'
import './SplashPage.css'


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
                        View All Events
                    </button>
                </div>
            </div>
        </div>
    )
}


export default SplashPage
