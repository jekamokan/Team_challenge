import heart from '../../images/icons/heart.svg'
import stars from '../../images/icons/stars.svg'
import cart from '../../images/icons/cart-add.svg'

const Card = ({ name, price, image, options, colors, feedback }) => {
    return (
        <div className='card'>
            <div className="card__top">
                <div className="card__options">
                    <ul>
                        {options.map(option => (
                            <li key={option}>{option}</li>
                        ))}
                    </ul>
                    <img src={heart} alt="heart" />
                </div>
                <img src={image} alt="name" />
                <div>{price}</div>
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
                <p>{colors}</p>
            </div>
        </div>
    )
}

export default Card