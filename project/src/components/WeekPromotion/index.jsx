import { Link } from 'react-router-dom'
import {bestSellersData} from '../../data'
import Card from '../Card'
import './style.css'

const WeekPromotion = () => {
    const cardsData = bestSellersData.slice(0, 4);

    const cards = cardsData.map((cardData, index) => (
        <Card
            key={index}
            name={cardData.name}
            price={cardData.price}
            image={cardData.image}
            options={cardData.options}
            article={cardData.article}
            feedback={cardData.feedback}
        />
    ));

    return (
        <div className='promotion'>
            <div className="promotion__head">
                <h2 className="promotion__title">Week promotion</h2>
                <Link className='promotion__link'>View all</Link>
            </div>
            <div className="promotion__body">
                {cards}
            </div>
        </div>
    )
}

export default WeekPromotion