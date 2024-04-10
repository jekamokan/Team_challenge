import AccordionFAQ from '../../components/AccordionFAQ'
import Container from '../../components/Container'
import testImg from '../../images/icons/testImg.png'
import './style.css'

const About = () => {
    return (
        <Container>
            <div className='about'>
                <div className="about__store">
                    <h2 className="about__store-title">About store</h2>
                    <div className="about__store-content">
                        <div className="about__img-block">
                            <img src={testImg} alt="test img" className="about__img" />
                        </div>
                        <div className="about__store-texts">
                            <p className="about__store-text">Our online store is a place where you can find high-quality clothing and footwear from well-known brands. We take pride in offering international shipping to make our products available to customers worldwide. </p>
                            <p className="about__store-text">Our team pays special attention to the quality of our products, so you can rest assured that every item you purchase from us meets the highest standards.</p>
                            <p className="about__store-text">Collaborating with renowned clothing and footwear brands allows us to offer a wide range of stylish and modern products for all our customers.</p>
                        </div>
                    </div>
                </div>
                <div className="about__faq">
                    <h2 className="about__store-title">FAQ</h2>
                    <div className='about__store-content'>
                        <div className='about__store-accordion'>
                            <AccordionFAQ />
                        </div>
                        <div className="about__img-faq">
                            <img src={testImg} alt="test img" className="about__img" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default About

