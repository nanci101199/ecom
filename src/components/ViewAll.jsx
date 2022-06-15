import React, { useState, useEffect } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import axios from 'axios'
import { servepratham } from '../config/AppConfig'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link, useLocation, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function valuetext(value) {
    return `${value}`;
}
// /user/category/product/1?page=1
///user/sorting/trending-product/most-popular?page=1
function ViewAll({ Viewall }) {

    const param = useParams()
    console.log(param.type)

   

    const location = useLocation()
    
    const viewall =() =>{
        axios.get(`${servepratham.apidata}user/sorting/${param.type}/${age}`)
        .then((response) => {
            setAlldatashown(response?.data?.data.data)
            console.log(response.data.data)
            console.log(alldatashown)
            
        })
    }

    const [alldatashown, setAlldatashown] = useState([])
    useEffect(() => {
       viewall()

    }, [])


    const [expanded, setExpanded] = React.useState(false);
    const [expandedaccordian, setExpandedaccordian] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const handleChangeaccordian = (panel) => (event, isExpanded) => {
        setExpandedaccordian(isExpanded ? panel : false);
        setValue(panel)
    };

    const [value, setValue] = useState(1);
    const handleclick = (ele) => {
        setValue(ele)

    }

    const [age, setAge] = React.useState('most-popular');
   
    const sorting = [
        { sort: "New Arrivals",
        method:"new-arrivals"
        }, 
        { 
            sort: "Most Popular" ,
        method:"most-popular"
    },
         {
             sort: "Price(low to high)" ,
         method:"price-low-to-high"
        
        }, 
         { 
            sort :"Price(high to low)",
         method:'price-high-to-low'
        },
        ]
    const [payment, setPayment] = React.useState(['Rs ₹', 0, " - ", 'Rs ₹', 100]);

    const handleprice = (event, newValue) => {
        setPayment(newValue);

    };
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    const Changeevent = (event) => {
        setAge(event.target.value);
    };

    return (
        // typeof alldatashown !== undefined &&
        <>
            <div>
                <div className='bg-secondary text-center py-5'>
                    <div className='pt-3 text-black fs-3 fw-bold text-uppercase'>{param.type}</div>
                    <div className='d-flex pb-3 justify-content-center' role="presentation" onClick={handleClick}>
                        <Breadcrumbs className='justify-content-center' aria-label="breadcrumb">
                            <Link to='/'>HOME </Link>
                            <Typography className='text-uppercase' color="text.primary">{param.type}</Typography>
                        </Breadcrumbs>
                    </div>
                </div>
                <div className='d-flex justify-content-between py-3'>
                    <div className='my-auto'><small>Showing 1 - 15 out of 19 Products</small></div>
                    <div>
                        <Box sx={{ minWidth: 300 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">sort</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Age"
                                    onChange={Changeevent}
                                >
                                    {
                                        sorting.map((sort) => (
                                            <MenuItem  value={sort.method}>{sort.sort}</MenuItem>
                                        ))
                                    }

                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                </div>
                <div className='row mx-3'>
                    <div className='col-lg-3 col-md-4 col-4 border'>
                        <div className='my-3'>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        CATEGORIES
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <div>
                                            {
                                                Viewall.map((view) => (
                                                    <Accordion expanded={expandedaccordian === `${view.id}`} onChange={handleChangeaccordian(`${view.id}`)}>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel1bh-content"
                                                            id="panel1bh-header"
                                                        >
                                                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                                                <small>  {view.name} </small>
                                                            </Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography>
                                                                {Viewall?.map((data) => (
                                                                    data.id == value ?
                                                                        data.childrens.map((childdata) => (
                                                                            <Accordion expanded={expandedaccordian === `${view.id}`} onChange={handleChangeaccordian(`${view.id}`)}>
                                                                                <AccordionSummary
                                                                                    expandIcon={<ExpandMoreIcon />}
                                                                                    aria-controls="panel1bh-content"
                                                                                    id="panel1bh-header"
                                                                                >
                                                                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                                                                        <small> {childdata.name} </small>
                                                                                    </Typography>
                                                                                </AccordionSummary>
                                                                            </Accordion>
                                                                        )) : ""))}
                                                            </Typography>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                ))
                                            }

                                        </div>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <div className='my-3'>
                            <Box >
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography>
                                            Price
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <Slider
                                                getAriaLabel={() => 'Price'}
                                                value={payment}
                                                onChange={handleprice}
                                                valueLabelDisplay="auto"
                                                getAriaValueText={valuetext}
                                            />
                                        </Typography>
                                        <div className='d-flex justify-content-between'>
                                            <div> <button>{payment}</button> </div>
                                            <div> <button>Filter</button> </div>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>

                        </div>
                        <div >
                            <Typography>
                                Size
                            </Typography>
                            <div className='row'>
                                <div className='col-lg-2 col-3  border text-black m-2 '> <span><small> X </small></span></div>
                                <div className='col-lg-2 col-3  border text-black m-2'> <span ><small> XL </small></span></div>
                                <div className='col-lg-2 col-3  border text-black m-2'> <span ><small> XLL </small></span></div>
                                <div className='col-lg-2 col-3  border text-black m-2'> <span ><small> M </small></span></div>
                                <div className='col-lg-2 col-3  border text-black m-2'> <span ><small> L </small></span></div>
                                <div className='col-lg-2 col-3  border text-black m-2'> <span ><small> S </small></span></div>
                                <div className='col-lg-2 col-3  border text-black m-2'> <span ><small> XXXL </small></span></div>
                                <div className='col-lg-2 col-3  border text-black m-2'> <span ><small> XXL </small></span></div>
                                <div className='col-lg-2 col-3  border text-black m-2'> <span ><small> XS </small></span></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-8 my-3'>
                        <div className='row'>
                            {
                                alldatashown.map((view) => (
                                    <>
                                        <div className='col-lg-4 col-md-6 col-sm-6 col-12' style={{ minHeight: "400px" }}>
                                            <div className="card" >
                                                <img src={view.ImageSrc} style={{ height: "300px" }} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <div className='text'>{view.product_name}</div>
                                                    <div className='justify-content-between'> <span> USD${view.offer_price} </span> <span className='text-decoration-line-through text-danger'>USD${view.price}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ViewAll