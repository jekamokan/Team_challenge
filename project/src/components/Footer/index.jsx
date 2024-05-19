import './style.css'
import {  Link } from 'react-router-dom'
import novaPost from '../../images/icons/nova-post.png'
import meestPost from '../../images/icons/meest-post.jpg'
import payU from '../../images/icons/payU.png'
import mastercard from '../../images/icons/mastercard.png'
import visa from '../../images/icons/visa.png'
import applePay from '../../images/icons/apple-pay.png'
import Container from '../Container'

const Footer = () => {
    const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    return (
        <footer className='footer'>
            <Container>
                <div className="footer__wrapper">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a className="footer__link" href="#">ASSISTANCE AND INFORMATION</a>
                        </li>
                        <li className="footer__item">
                            <Link 
                            to={'/about'}
                            onClick={()=> toTop()}
                            >About Us</Link>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#">Store rules</a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#">Conditions of return</a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#">Claim</a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#">Cooperation</a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#">FAQ</a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#">Contacts</a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#">Corporate Social Responsibility</a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#">Privacy Policy</a>
                        </li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a className="footer__link" href="#">DELIVERY</a>
                        </li>
                        <li className="footer__item">
                            <a className="footer__link" href="#">Nova Poshta</a>
                        </li>
                        <li className="footer__item footer__item-meest">
                            <a className="footer__link" href="#">Courier Meest POST</a>
                        </li>
                        <li className="footer__item-img">
                            <a className="footer__link" href="#">
                                <img className='footer__img-box' src={novaPost} alt="nova-poshta" />
                            </a>
                            <a className="footer__link" href="#">
                                <img className='footer__img-box' src={meestPost} alt="meest-post" />
                            </a>
                        </li>
                    </ul>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a className="footer__link" href="#">PAYMENT</a>
                        </li>
                        <li className="footer__item-img">
                            <a className="footer__link" href="#">
                                <img className='footer__img-box' src={payU} alt="nova-poshta" />
                            </a>
                            <a className="footer__link" href="#">
                                <img className='footer__img-box' src={mastercard} alt="nova-poshta" />
                            </a>
                        </li>
                        <li className="footer__item-img footer__item-imgPay">
                            <a className="footer__link" href="#">
                                <img className='footer__img-box' src={visa} alt="nova-poshta" />
                            </a>
                            <a className="footer__link" href="#">
                                <img className='footer__img-box' src={applePay} alt="nova-poshta" />
                            </a>
                        </li>
                    </ul>

                </div>
                <p className="footer__follow">FOLLOW US</p>
            </Container>
        </footer>
    )
}

export default Footer