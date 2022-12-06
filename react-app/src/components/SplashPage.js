import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import splashImage from '../components/assets/splashimage.jpeg'

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
                        <Link to ='/about' className='homepage-about'>About</Link>
                    {/* <div className='homepage-first-last-name'>Meet the Dev: Tom Bluher</div> */}
                {/* <div>
                    <a href='https://github.com/tbluher14' target="_blank">
                    <img className='home-page-github' src={github}></img>
                    </a>
                    <a href='https://www.linkedin.com/in/tom-bluher-172321115/' target="_blank">
                    <img className='home-page-linkedin' src={linkedin}></img>
                    </a>
                </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SplashPage
