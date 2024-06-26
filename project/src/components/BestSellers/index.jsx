import { Link } from 'react-router-dom'
import {bestSellersData} from '../../data'
import Card from '../Card'
import './style.css'

const BestSellers = () => {
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
        <div className='bestsellers'>
            <div className="bestsellers__head">
                <h2 className="bestsellers__title">Best Sellers</h2>
                <Link className='bestsellers__link'>View all</Link>
            </div>
            <div className="bestsellers__body">
                {cards}
            </div>
        </div>
    )
}

export default BestSellers