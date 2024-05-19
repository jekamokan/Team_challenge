import AccordionFAQ from '../../components/AccordionFAQ'
import Container from '../../components/Container'
import about1 from '../../images/icons/about1.jpg'
import about3 from '../../images/icons/about3.jpg'
import './style.css'

const About = () => {
    return (
        <div className='about'>
            <Container>
                <div className="about__store">
                    <h2 className="about__store-title">About store</h2>
                    <div className="about__store-content">
                        <div className="about__img-block">
                            <img src={about1} alt="test img" className="about__img" />
                        </div>
                        <div className="about__store-texts">
                            <p className="about__store-text">Our online store is a place where you can find high-quality clothing and footwear from well-known brands. We take pride in offering international shipping to make our products available to customers worldwide. </p>
                            <p className="about__store-text">Our team pays special attention to the quality of our products, so you can rest assured that every item you purchase from us meets the highest standards.</p>
                            <p className="about__store-text">Collaborating with renowned clothing and footwear brands allows us to offer a wide range of stylish and modern products for all our customers.</p>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="about__bg"></div>
            <Container>
                <div className="about__faq">
                    <h2 className="about__store-title">FAQ</h2>
                    <div className='about__store-content'>
                        <div className='about__store-accordion'>
                            <AccordionFAQ />
                        </div>
                        <div className="about__img-faq">
                            <img src={about3} alt="test img" className="about__img" />
                        </div>
                    </div>
                </div>
            </Container>
            <div className="about__map">
                <iframe
                    title='address'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.282973129484!2d30.53232689504876!3d50.402559724934555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4f050dd7f7%3A0xc68e2dc2dc036eb4!2z0KHQstCw0LvRj9Cy0YHRjNC60LjQuSDQv9GA0L7QstGD0LvQvtC6LCAxNCwg0JrQuNGX0LIsINCj0LrRgNCw0ZfQvdCwLCAwMjAwMA!5e0!3m2!1suk!2sde!4v1716123820818!5m2!1suk!2sde"
                    width="100%"
                    height="550"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    )
}

export default About

