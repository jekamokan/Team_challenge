import { useState } from 'react'
import arrowSort from '../../images/icons/arrowSort.svg'
import close from '../../images/icons/close.svg'
import AccordionUsage from '../AccordionUsage'
import closeWhite from '../../images/icons/closeWhite.svg'
import './style.css'



const Filter = () => {
    const [appliedList, setAppliedList] = useState([]);
    const [isVisible, setIsVisible] = useState(false)
    console.log(appliedList)

    const handleRemoveValue = (item) => {
        const updatedList = appliedList.filter(value => value != item)
        setAppliedList(updatedList)
    }

    const closeVariables = () => setIsVisible(!isVisible);
    const resetAppliedList = () => setAppliedList([])

    return (
        <div className="filter">
            <div className="filter__value" onClick={() => setIsVisible(!isVisible)}>
                <p className="filter__text">Filters</p>
                <img src={arrowSort} alt="cross" className="filter__clear-img"  />
            </div>
            {isVisible ? (
                <div className="filter__variables">
                    <div className="filter__variables-top">
                        <p className="filter__variables-title">Filters</p>
                        <div className="filter__variables-reset">
                            <button className="filter__variables-clear" onClick={resetAppliedList}>Clear all</button>
                            <img src={close} alt="" className="filter__variables-close" onClick={closeVariables}/>
                        </div>
                    </div>
                    {appliedList.length > 0 && (
                        <div className="filter__applied">
                            <p className='filter__applied-text'>Applied Filters</p>
                            <ul className='filter__applied-list'>
                                {appliedList.map(item => (
                                    <li className='filter__applied-item' key={item}>
                                        {item}
                                        <img 
                                        src={closeWhite} 
                                        alt="cross"
                                        onClick={() => handleRemoveValue(item)} 
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <AccordionUsage
                        setAppliedList={setAppliedList}
                    />
                </div>

            ): ('')}
        </div>
    )
}

export default Filter