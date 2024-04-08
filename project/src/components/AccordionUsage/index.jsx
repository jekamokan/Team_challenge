import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './style.css'
import { useState } from 'react';
import Arrow from '../Arrow';

const sizeValue = [];
for (let i = 4.5; i <= 14; i += 0.5) {
    sizeValue.push(i);
}

const AccordionUsage = (props) => {
    const {setAppliedList} = props
    const [activeSize, setActiveSize] = useState(null);// state for size

    const handleSize = (value) => {
        setActiveSize(value === activeSize ? null : value)
        setAppliedList(prevList => prevList.includes(value) ? prevList : [...prevList, value]);
    };//function for size

    return (
        <div>
            <Accordion sx={{ boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<Arrow/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ padding: 0 }}
                >
                    Size
                </AccordionSummary>
                <AccordionDetails sx={{padding: 0}}>
                    <ul className='accordion-list'>
                        {sizeValue.map(value => (
                            <li
                                key={value}
                                className={value === activeSize ? 'accordion-itemactive' : 'accordion-item'}
                                onClick={() => handleSize(value)}
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
                <AccordionDetails>
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
                    Best For
                </AccordionSummary>
                <AccordionDetails>
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
                    Colour
                </AccordionSummary>
                <AccordionDetails>
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
                <AccordionDetails>
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
                <AccordionDetails>
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
                <AccordionDetails>
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
                <AccordionDetails>
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
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default AccordionUsage