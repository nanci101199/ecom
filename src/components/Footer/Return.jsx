import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Return() {
  return (
    <>
    <div className='container'>
        <div className='text-center fw-bold fs-1 my-2'>Return Policy</div>
        <div className='text-secondary my-2'> We hope you love what you've ordered! But just in case you're not 100% satisfied, we've made the return process super easy.</div>
        <div className='fw-bold fs-4 my-4'>
        How long do I have to make a return?
        </div>
        <div className='my-2'>
        We gladly accept returns within 30 days of receipt for most items in new condition.(The return timeframe for Belgium is 45 days from the date of purchase.)
        </div>
        <div className='my-3 fs-4 mb-5 fw-bold'>
        How do I make a return?
        </div>
        <div className='mt-3'>
          <div className='my-4'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Return from France, Germany, Italy, Netherlands, Poland, Spain, Sweden, Portugal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio itaque fugiat commodi distinctio magni maiores impedit natus labore aspernatur iure soluta pariatur velit odio, rerum minus! Voluptatibus velit fuga harum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio itaque fugiat commodi distinctio magni maiores impedit natus labore aspernatur iure soluta pariatur velit odio, rerum minus! Voluptatibus velit fuga harum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio itaque fugiat commodi distinctio magni maiores impedit natus labore aspernatur iure soluta pariatur velit odio, rerum minus! Voluptatibus velit fuga harum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio itaque fugiat commodi distinctio magni maiores impedit natus labore aspernatur iure soluta pariatur velit odio, rerum minus! Voluptatibus velit fuga harum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className='my-4'>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Return from Belgium</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio itaque fugiat commodi distinctio magni maiores impedit natus labore aspernatur iure soluta pariatur velit odio, rerum minus! Voluptatibus velit fuga harum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio itaque fugiat commodi distinctio magni maiores impedit natus labore aspernatur iure soluta pariatur velit odio, rerum minus! Voluptatibus velit fuga harum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio itaque fugiat commodi distinctio magni maiores impedit natus labore aspernatur iure soluta pariatur velit odio, rerum minus! Voluptatibus velit fuga harum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio itaque fugiat commodi distinctio magni maiores impedit natus labore aspernatur iure soluta pariatur velit odio, rerum minus! Voluptatibus velit fuga harum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className='my-4'>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography> Return from Austria，Denmark，Greece，Luxembourg</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio itaque fugiat commodi distinctio magni maiores impedit natus labore aspernatur iure soluta pariatur velit odio, rerum minus! Voluptatibus velit fuga harum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio itaque fugiat commodi distinctio magni maiores impedit natus labore aspernatur iure soluta pariatur velit odio, rerum minus! Voluptatibus velit fuga harum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio itaque fugiat commodi distinctio magni maiores impedit natus labore aspernatur iure soluta pariatur velit odio, rerum minus! Voluptatibus velit fuga harum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio itaque fugiat commodi distinctio magni maiores impedit natus labore aspernatur iure soluta pariatur velit odio, rerum minus! Voluptatibus velit fuga harum.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
    <div className='text-center my-3'>
        <button className='btn btn-primary rounded'>Start Return</button>
    </div>
    </div>
    </>
  )
}

export default Return