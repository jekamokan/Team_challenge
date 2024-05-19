import React from 'react'
import './style.css'
import trash from '../../images/icons/trash.jpg'
import towel from '../../images/icons/towel.jpg'

const Ecological = () => {
    return (
        <div className="ecological">
            <div className="ecological__body">
                <div className="ecological__img">
                    <img src={trash} alt="eco"  />
                </div>
                <h4 className="ecological__title">Let's make it more ecological!</h4>
                <p className="ecological__text">Bring items that are not used in everyday life and receive a 15% discount on any collection</p>
                <a href="#" className="ecological__link">Discover more</a>
            </div>
            <div className="ecological__body">
                <div className="ecological__img">
                    <img src={towel} alt="eco" />
                </div>
                <h4 className="ecological__title">Sweltering summer</h4>
                <p className="ecological__text">Clothes made of pure linen are an invariable hit of any summer! The new collection is already waiting for you.</p>
                <a href="#" className="ecological__link">Discover more</a>
            </div>
        </div>
    )
}

export default Ecological