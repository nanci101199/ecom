import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { Button } from '../components/Home/API/ButtonApi'
import { images } from '../components/Home/API/ImagesApi'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function Sharebybutton() {


  const [value, setValue] = useState(0);
  const [buttonapi, setButtonapi] = useState(Button)
  const [image, setImage] = useState(images)

  const handleapi = () => { }

  const handleChange = (event, newValue) => {
    setValue(newValue);

  };

  return (
    <div>
      <div>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" className={{ display: "flex", justifyContent: "center" }}>
              <Tab label="Category" {...a11yProps(0)} />
              <Tab label="Occasion"  {...a11yProps(1)} />
              <Tab label="Style" {...a11yProps(2)} />
              <Tab label="Element" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className='row d-flex '>
              <div className='col-12  row flex-nowrap overflow-scroll'>
                {buttonapi.map((ele) => (
                  <div className='row flex-nowrap overflow-scroll absscroll my-2 mx-3' >
                    {buttonapi.map((btn) => (
                      <div className='w-auto text-center flex-nowrap'> <button className='btn rounded-pill ' style={{ backgroundColor: `${btn.colorcode}` }}> {btn.category} </button></div>))}
                  </div>))}
              </div>
            </div>
            <div className='row'>
              {image.map((img) =>(
                img.title=='Categories' &&
                  <div className='col-4' style={{width:"auto", margin:"auto"}}>
                  <img src={img.images} alt="happy"  style={{height:"400px", marginTop:"20px"}}/>
                  <div className='text-center '><div><ThumbUpOutlinedIcon/></div> <div> Price: {img.price}</div> </div>
                  <div className='text-center my-2'><button className='btn btn-primary '>More Details</button></div>
                </div> 

                
                ))}
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className='row d-flex  '>
              <div className='col-12  row flex-nowrap overflow-scroll'>
                {buttonapi.map((ele) => (
                  <div className='row flex-nowrap overflow-scroll absscroll my-2 mx-5' >
                    {buttonapi.map((btn) => (
                      <div className='w-auto text-center flex-nowrap'> <button className='btn rounded-pill ' style={{ backgroundColor: `${btn.colorcode}` }}> {btn.Occasion} </button></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className='row'>
              {image.map((img) =>(
                img.title=='Occasion' &&
                  <div className='col-4' style={{width:"auto", margin:"auto"}}>
                  <img src={img.images} alt="happy" style={{height:"400px", marginTop:"20px"}}/>
                  <div className='text-center '><div><ThumbUpOutlinedIcon/></div> <div> Price: {img.price}</div> </div>
                  <div className='text-center my-2'><button className='btn btn-primary '>More Details</button></div>
                </div> 

                
                  ))}
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className='row d-flex  '>
              <div className='col-12  row flex-nowrap overflow-scroll'>
                {buttonapi.map((ele) => (
                  <div className='row flex-nowrap overflow-scroll absscroll my-2 mx-5' >
                    {buttonapi.map((btn) => (
                      <div className='w-auto text-center flex-nowrap'> <button className='btn rounded-pill ' style={{ backgroundColor: `${btn.colorcode}` }}> {btn.category}  </button></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className='row'>
              {image.map((img) =>(
                img.title=='style' &&
                  <div className='col-4' style={{width:"auto", margin:"auto"}}>
                  <img src={img.images} alt="happy" style={{height:"400px", marginTop:"20px"}}/>
                  <div className='text-center '><div><ThumbUpOutlinedIcon/></div> <div> Price: {img.price}</div> </div>
                  <div className='text-center my-2'><button className='btn btn-primary '>More Details</button></div>
                </div> 

                ))}
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className='row d-flex '>
              <div className='col-12  row flex-nowrap overflow-scroll'>
                {buttonapi.map((ele) => (
                  <div className='row flex-nowrap overflow-scroll absscroll my-2 mx-5' >
                    {buttonapi.map((btn) => (
                      <div className='w-auto text-center flex-nowrap'> <button className='btn rounded-pill ' style={{ backgroundColor: `${btn.colorcode}` }}> {btn.Occasion} </button></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className='row'>
              {image.map((img) =>(
                img.title=='Element' &&
                  <div className='col-4' style={{width:"auto", margin:"auto"}}>
                  <img src={img.images} alt="happy" style={{height:"400px", marginTop:"20px"}}/>
                  <div className='text-center '><div><ThumbUpOutlinedIcon/></div> <div> Price: {img.price}</div> </div>
                  <div className='text-center my-2'><button className='btn btn-primary '>More Details</button></div>
                </div>            
                  ))}
            </div>
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}
