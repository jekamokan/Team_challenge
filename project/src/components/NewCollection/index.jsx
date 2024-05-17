import { Link } from 'react-router-dom'
import {bestSellersData} from '../../data'
import Card from '../Card'
import './style.css'

const NewCollection = () => {
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
        <div className='collection'>
            <div className="collection__head">
                <h2 className="collection__title">New Collection</h2>
                <Link className='collection__link'>View all</Link>
            </div>
            <div className="collection__body">
                {cards}
            </div>
        </div>
    )
}

export default NewCollection