import React, { useState } from 'react';
import arrowSort from '../../images/icons/arrowSort.svg'
import CustomCheckbox from '../CustomCheckbox';
import './style.css'
import { sortValues } from '../../data';



const SortProducts = () => {

    const [value, setValue] = useState('Featured')
    const [visibility, setVisibility] = useState(false)
    const handleCheckboxClick = (name) => setValue(name);
    const sorterVisibility = () => setVisibility(!visibility)

    return (
        <div className='sort'>
            <div className="sort__value" onClick={sorterVisibility}>
                <p className='sort__text'>Sort by</p>
                <p className='sort__text-value'> {value}</p>
                <img src={arrowSort} alt="arrow" />
            </div>
            {visibility? (
                <div className="sort__variables">
                {/* <p className="sort__variables-title" onClick={sorterVisibility}>Sort by</p> */}
                <div className="sort__variables-list">
                    {sortValues.map((value, id) => (
                        <CustomCheckbox
                            children={value.name}
                            key={id}
                            setValue={handleCheckboxClick}
                        />
                    ))}
                </div>
            </div> 
            ) : ('')}
           
        </div>
    )
}
export default SortProducts;
