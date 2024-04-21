import facebook from '../../images/icons/facebook.png'
import instagram from '../../images/icons/instagram.png'
import pinterest from '../../images/icons/pinterest.png'
import tiktok from '../../images/icons/tiktok.png'
import twitter from '../../images/icons/twitter.png'
import youtube from '../../images/icons/youtube.png'
import './style.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__info'>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                </ul>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                </ul>
            </div>
            <div className='footer__social'>
                <p className="footer__social-text">Follow us</p>
                <div className="footer__social-networks">
                    <a className='footer__social-link' href="#">
                        <img src={facebook} alt="facebook" />
                    </a>
                    <a className='footer__social-link' href="#">
                        <img src={instagram} alt="instagram" />
                    </a>
                    <a className='footer__social-link' href="#">
                        <img src={twitter} alt="twitter" />
                    </a>
                    <a className='footer__social-link' href="#">
                        <img src={pinterest} alt="pinterest" />
                    </a>
                    <a className='footer__social-link' href="#">
                        <img src={tiktok} alt="tiktok" />
                    </a>
                    <a className='footer__social-link' href="#">
                        <img src={youtube} alt="youtube" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer