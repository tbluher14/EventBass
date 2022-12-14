import { useHistory } from "react-router-dom";
// import logo from "../assets/logo.jpeg"
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import './footer.css'

const Footer = () => {
    const history = useHistory()
    return (
        <div className="footer">
        <div className="footer__container">
            <div className="footer__left">
            <div className="footer__left__logo">
                {/* <img src={} alt
                ="logo" className='footer_logo' /> */}
            </div>
            <div className="footer__left__text">
                <p>© 2022 eventBass, Inc. All rights reserved</p>
            </div>
            </div>
            <div className="footer__right">
            <div className="footer__right__links">
                <ul className="footer__right__ul">
                <li className="footer_li">
                    <a href="#" className="footer_a" onClick={() => history.push('/about')}>
                        About Me
                        </a>
                </li>
                <li className="footer_li">
                    <a href="https://github.com/tbluher14/bestBnB" className="footer_a" target="_blank">
                    <img className='footer-github' src={github} alt="logo"></img>
                        GitHub
                     </a>
                </li>
                <li className="footer_li">
                    <a href="https://www.linkedin.com/in/tom-bluher-172321115/"  className="footer_a" target="_blank">
                    <img className='footer-linkedin' src={linkedin} alt='logo'></img>
                        LinkedIn
                    </a>
                </li>

            </ul>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Footer;
