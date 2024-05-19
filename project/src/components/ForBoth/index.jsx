import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AccordionFaq from '../../images/icons/accordionFaq.svg'
import './style.css'

const ForBoth = () => {
    // const [manCategories, setManCategories] = useState(false)
    // const [womanCategories, setWomanCategories] = useState(false)

    // const chooseMan = () => {
    //     setManCategories(true)
    //     setWomanCategories(false)
    // }
    // const chooseWoman = () => {
    //     setWomanCategories(true)
    //     setManCategories(false)
    // }
    const [categories, setCategories] = useState({ man: false, woman: false });
    console.log(categories)
    const chooseCategory = (category) => {
        setCategories({
            man: category === 'man',
            woman: category === 'woman'
        });
    }
    return (
        <>
            <div className='forboth'>
                <div className="forboth__man">
                    <div className="forboth__wrapper">
                        <button
                            className='forboth__link'
                            onClick={() => chooseCategory('man')}
                        >
                            For man
                            <img src={AccordionFaq} alt="arrow" />
                        </button>
                    </div>
                </div>
                <div className="forboth__woman">
                    <div className="forboth__wrapper">
                        <button
                            className='forboth__link'
                            onClick={() => chooseCategory('woman')}
                        >
                            For women
                            <img src={AccordionFaq} alt="arrow" />
                        </button>
                    </div>
                </div>
            </div>
            {categories.man &&
                <div className="forboth__man-categories">
                    <div className="forboth__man-item t-shirts">
                        <Link
                            className='forboth__categories-link'
                        >
                            T-shirts
                            <img src={AccordionFaq} alt="arrow" />
                        </Link>
                    </div>
                    <div className="forboth__man-item trousers">
                        <Link
                            className='forboth__categories-link'
                        >
                            Trousers
                            <img src={AccordionFaq} alt="arrow" />
                        </Link>
                    </div>
                    <div className="forboth__man-item suits">
                        <Link
                            className='forboth__categories-link'
                        >
                            Suits
                            <img src={AccordionFaq} alt="arrow" />
                        </Link>
                    </div>
                    <div className="forboth__man-item outerwear" >
                        <Link
                            className='forboth__categories-link'
                        >
                            Outerwear
                            <img src={AccordionFaq} alt="arrow" />
                        </Link>
                    </div>
                    <div className="forboth__man-item shoes">
                        <Link
                            className='forboth__categories-link'
                        >
                            Shoes
                            <img src={AccordionFaq} alt="arrow" />
                        </Link>
                    </div>
                    <div className="forboth__man-item accessories">
                        <Link
                            className='forboth__categories-link'
                        >
                            Accessories
                            <img src={AccordionFaq} alt="arrow" />
                        </Link>
                    </div>
                </div>}
            {categories.woman &&
                <div className="forboth__woman-categories">
                    <div className="forboth__woman-item t-shirts">
                        <Link
                            className='forboth__categories-link'
                        >
                            T-shirts
                            <img src={AccordionFaq} alt="arrow" />
                        </Link>
                    </div>
                    <div className="forboth__woman-item trousers">
                        <Link
                            className='forboth__categories-link'
                        >
                            Trousers
                            <img src={AccordionFaq} alt="arrow" />
                        </Link>
                    </div>
                    <div className="forboth__woman-item suits">
                        <Link
                            className='forboth__categories-link'
                        >
                            Suits
                            <img src={AccordionFaq} alt="arrow" />
                        </Link>
                    </div>
                    <div className="forboth__woman-item outerwear" >
                        <Link
                            className='forboth__categories-link'
                        >
                            Outerwear
                            <img src={AccordionFaq} alt="arrow" />
                        </Link>
                    </div>
                    <div className="forboth__woman-item shoes">
                        <Link
                            className='forboth__categories-link'
                        >
                            Shoes
                            <img src={AccordionFaq} alt="arrow" />
                        </Link>
                    </div>
                    <div className="forboth__woman-item accessories">
                        <Link
                            className='forboth__categories-link'
                        >
                            Accessories
                            <img src={AccordionFaq} alt="arrow" />
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}

export default ForBoth