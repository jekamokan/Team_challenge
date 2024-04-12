import { Link } from 'react-router-dom'
import {bestSellersData} from '../../data'
import Card from '../Card'
import './style.css'

const Sale = () => {
    const cardsData = bestSellersData.slice(0, 4);

    const cards = cardsData.map((cardData, index) => (
        <Card
            key={index}
            name={cardData.name}
            price={cardData.price}
            image={cardData.image}
            options={cardData.options}
            colors={cardData.colors}
            feedback={cardData.feedback}
        />
    ));

    return (
        <div className='sale'>
            <div className="sale__head">
                <h2 className="sale__title">Sale</h2>
                <Link className='sale__link'>View all</Link>
            </div>
            <div className="sale__body">
                {cards}
            </div>
        </div>
    )
}

export default Sale