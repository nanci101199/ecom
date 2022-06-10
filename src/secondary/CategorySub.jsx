import * as React from 'react';
import { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {Link} from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { images } from '../components/Home/API/ImagesApi'
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


export default function CategorySub({ params }) {

  const navigate = useNavigate()

  const location = useLocation();
  const demo = location?.state.item
  const [myimages, setMyImages] = useState(images)
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handlesubmit = (ele) => {
    const data = ele
    myimages.map((elem) => (
       elem.id===ele ? "true" : "false"
    )) 
    navigate(`/Showitems/${ele}`, {state:ele})
    
  }

  return (
    <>
      <div className='px-4'>
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">
              Home
            </Link>
            <Link
              to='#'
            >
              {location.state.id} 
            </Link>
          </Breadcrumbs>
        </div>
        <div>
        <div>
          <div className='bg-info py-2'>
            <div className='fw-bold fs-5 mx-3'> {location.state.id} / {
                demo.map((elem) => (
                 <span className='text-secondary'> {elem.items}</span>
                ))
              } <span className='text-secondary'> Products </span></div>

            <div className=' d-flex mx-5 w-auto justify-content-start bg-light py-2 px-3'>
              {
                demo.map((ele) => (
                  ele.title == location.state.id ?
                    ele.type.map((hello) => (
                      <div className=' m-1  p-1  mx-1'><button className=' btn btn-secondary'>{hello.type1}</button></div>
                    )) : ""
                ))
              }
            </div>
          </div>
        </div>
        <div>
          <div className='row'>
            <div className='col-3'>
              <div className='mx-4 my-2'>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>Top Type</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Women Type" />
                        <FormControlLabel control={<Checkbox />} label="Camisole" />
                        <FormControlLabel control={<Checkbox />} label="Blouse" />
                        <FormControlLabel control={<Checkbox />} label="Tunic" />
                        <FormControlLabel control={<Checkbox />} label="Tee" />
                        <FormControlLabel control={<Checkbox />} label="SweatSHirt" />
                      </FormGroup>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                    <Typography>Bottom Type</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Track Shorts" />
                        <FormControlLabel control={<Checkbox />} label="Biker Shorts" />
                        <FormControlLabel control={<Checkbox />} label="Skirt" />
                        <FormControlLabel control={<Checkbox />} label="Shorts" />
                        <FormControlLabel control={<Checkbox />} label="Pants" />
                        <FormControlLabel control={<Checkbox />} label="SweatSHirt" />
                      </FormGroup>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                  <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                    <Typography>Material</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                  <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Women Type" />
                        <FormControlLabel control={<Checkbox />} label="Camisole" />
                        <FormControlLabel control={<Checkbox />} label="Blouse" />
                        <FormControlLabel control={<Checkbox />} label="Tunic" />
                        <FormControlLabel control={<Checkbox />} label="Tee" />
                        <FormControlLabel control={<Checkbox />} label="SweatSHirt" />
                      </FormGroup>
                  </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                  <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                    <Typography>Style</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                  <FormGroup>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Women Type" />
                        <FormControlLabel control={<Checkbox />} label="Camisole" />
                        <FormControlLabel control={<Checkbox />} label="Blouse" />
                        <FormControlLabel control={<Checkbox />} label="Tunic" />
                        <FormControlLabel control={<Checkbox />} label="Tee" />
                        <FormControlLabel control={<Checkbox />} label="SweatSHirt" />
                      </FormGroup>
                  </AccordionDetails>
                </Accordion>
              </div>
             <div> <img src="https://img.ltwebstatic.com/images3_acp/2022/05/19/16529409528cacda1ba12db4542c6fa9c2e6cbfa43.webp" className='m-auto' style={{width:"85%", }} alt="" /></div>
            </div>
            <div className='col-9'>
              <div className='row'>
                {
                  myimages.map((img) => (
                    <div className='col-lg-3 my-3 col-md-6 col-12'>
                      <div> <img src={img.images} className="m-auto" style={{ width: "80%" }} alt="" /></div>
                      <div className='bg-light'><div>{img.tagline}</div>
                        <div> {img.price}
                         <div className='text-danger'> {img.discount} off
                        </div>
                        </div>
                        <div><button className='btn btn-primary' onClick={() => {handlesubmit(img.id)}}>Show Item Details</button></div></div>
                    </div>
                  ))

                }
              </div>
            </div>

          </div>
        </div>
        </div>
      </div>
    </>
  );
}