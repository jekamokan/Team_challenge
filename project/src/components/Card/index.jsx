import heart from '../../images/icons/heart.svg'
import stars from '../../images/icons/stars.svg'
import cart from '../../images/icons/cart-add.svg'
import './style.css'

const Card = ({ name, price, image, options, article, feedback }) => {
    return (
        <div className='card'>
            <div className="card__top">
                <div className="card__options">
                    <ul className='card__list'>
                        {options.map(option => (
                            <li
                                key={option}
                                className='card__item'
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                    <img className='card__heart' src={heart} alt="heart" />
                </div>
                <img className='card__img' src={image} alt="name" />
                <div className='card__price'>
                    <span className="card__price-old">₴{price[0].oldPrice}</span>
                    <span className="card__price-new">₴{price[1].newPrice}</span>
                </div>
            </div>
            <div className="card__bottom">
                <div className="card__feedback">
                    <img src={stars} alt="stars" />
                    <p>{feedback}</p>
                </div>
                <div className="card__bottom-name">
                    <p className="card__name">{name}</p>
                    <img src={cart} alt="cart" />
                </div>
                <p className='card__colors'>{article}</p>
            </div>
        </div>
    )
}

export default Card