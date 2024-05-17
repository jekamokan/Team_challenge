import React from 'react'
import { Link } from 'react-router-dom'
import AccordionFaq from '../../images/icons/accordionFaq.svg'
import './style.css'

const ForBoth = () => {
    return (
        <div className='forboth'>
            <div className="forboth__man">
                <div className="forboth__wrapper">
                    <Link className='forboth__link'>
                        For man
                        <img src={AccordionFaq} alt="arrow" />
                    </Link>
                </div>
            </div>
            <div className="forboth__woman">
                <div className="forboth__wrapper">
                    <Link className='forboth__link'>
                        For women
                        <img src={AccordionFaq} alt="arrow" />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default ForBoth