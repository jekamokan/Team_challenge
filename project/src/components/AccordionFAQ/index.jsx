import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionFaqArrow from '../AccordionFaqArrow'
import './style.css'

const AccordionFAQ = () => {
    return (
        <div>
            <Accordion className='accordion-item'>
                <AccordionSummary
                    className='accordion-title'
                    expandIcon={<AccordionFaqArrow />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <p className='accordion-titleText'>What are the delivery terms?</p>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion className='accordion-item'>
                <AccordionSummary
                    className='accordion-title'
                    expandIcon={<AccordionFaqArrow />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <p className='accordion-titleText'>How can I return or exchange an item?</p>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion className='accordion-item'>
                <AccordionSummary
                    className='accordion-title'
                    expandIcon={<AccordionFaqArrow />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                >
                    <p className='accordion-titleText'>Can I cancel or modify my order?</p>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion className='accordion-item'>
                <AccordionSummary
                    className='accordion-title'
                    expandIcon={<AccordionFaqArrow />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                >
                    <p className='accordion-titleText'>Do you offer international shipping?</p>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion className='accordion-item'>
                <AccordionSummary
                    className='accordion-title'
                    expandIcon={<AccordionFaqArrow />}
                    aria-controls="panel5-content"
                    id="panel5-header"
                >
                    <p className='accordion-titleText'>Can I track my order?</p>
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default AccordionFAQ