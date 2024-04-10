import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionFaqArrow from '../AccordionFaqArrow'
import './style.css'

const AccordionFAQ = () => {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<AccordionFaqArrow/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{fontSize: 20}}
                >
                    What are the delivery terms?
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<AccordionFaqArrow />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{fontSize: 20}}
                >
                    How can I return or exchange an item?
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<AccordionFaqArrow />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    sx={{fontSize: 20}}
                >
                    Can I cancel or modify my order?
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<AccordionFaqArrow />}
                    aria-controls="panel4-content"
                    id="panel4-header"
                    sx={{fontSize: 20}}
                >
                    Do you offer international shipping?
                </AccordionSummary>
                <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion >
                <AccordionSummary
                    expandIcon={<AccordionFaqArrow />}
                    aria-controls="panel5-content"
                    id="panel5-header"
                    sx={{fontSize: 20}}
                >
                    Can I track my order?
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