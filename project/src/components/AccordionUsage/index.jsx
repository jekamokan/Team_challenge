import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { useState } from 'react';
import Arrow from '../Arrow';
import CustomCheckbox from '../CustomCheckbox'
import './style.css'
import { bestForData, discountData, sizeValue } from '../../data';




const AccordionUsage = (props) => {
    const { setAppliedList } = props
    const [activeSize, setActiveSize] = useState(null);// state for size

    const handleFilters = (value) => {
        setActiveSize(value === activeSize ? null : value)
        setAppliedList(prevList => prevList.includes(value) ? prevList : [...prevList, value]);
    };//function for size
    // const handleDiscount = (value) => {
    //     setAppliedList(prevList => prevList.includes(value) ? prevList : [...prevList, value])
    // };//function for discount

    return (
        <>
        <div className='accordion'>
            <Accordion sx={{ boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<Arrow />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ padding: 0 }}
                >
                    Size
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 0, marginTop: '16px' }}>
                    <ul className='accordion-list'>
                        {sizeValue.map(value => (
                            <li
                                key={value}
                                className={value === activeSize ? 'accordion-itemactive' : 'accordion-item'}
                                onClick={() => handleFilters(value)}
                            >
                                {value}
                            </li>
                        )
                        )}
                    </ul>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{
                '& .css-1j37bbt-MuiPaper-root-MuiAccordion-root::before': {
                    height: 0,
                },
                boxShadow: 'none',
                border: 'none'
            }}
            >
                <AccordionSummary
                    expandIcon={<Arrow />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{ padding: 0 }}
                >
                    Discount
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 0, marginTop: '16px' }}>
                    <div className='accordion-options'>
                        {discountData.map(el => (
                            <CustomCheckbox
                                children={el.name}
                                key={el.name}
                                setValue={value => handleFilters(value)}
                            />
                        ))}
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ border: 'none', boxShadow: 'none', }}>
                <AccordionSummary
                    expandIcon={<Arrow />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    sx={{ padding: 0 }}
                >
                    Best For
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 0, marginTop: '16px' }}>
                    <div className='accordion-options'>
                        {bestForData.map(el => (
                            <CustomCheckbox
                                children={el.name}
                                key={el.name}
                                setValue={value => handleFilters(value)}
                            />
                        ))}
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ border: 'none', boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<Arrow />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    sx={{ padding: 0 }}
                >
                    Colour
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 0, marginTop: '16px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ border: 'none', boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<Arrow />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    sx={{ padding: 0 }}
                >
                    Collection
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 0, marginTop: '16px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ border: 'none', boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<Arrow />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    sx={{ padding: 0 }}
                >
                    Features
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 0, marginTop: '16px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ border: 'none', boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<Arrow />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    sx={{ padding: 0 }}
                >
                    Model
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 0, marginTop: '16px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ border: 'none', boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<Arrow />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    sx={{ padding: 0 }}
                >
                    Price
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 0, marginTop: '16px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{ border: 'none', boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<Arrow />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    sx={{ padding: 0 }}
                >
                    Brand
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 0, marginTop: '16px' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
        </div>
        <button className='accordion-btn'>Apply</button>
        </>
    )
}

export default AccordionUsage