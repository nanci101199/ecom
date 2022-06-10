import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { styled, alpha } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { women, kids, Men, Makeup, Home } from './Home/API/HeaderApi'
import './assets/style.css'
import TabContext from '@mui/lab/TabContext';
import { servepratham } from '../config/AppConfig';
import axios from 'axios';



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

function Header({ headdata }) {

    const [head_data, setHead_data] = useState(headdata)
    console.log(headdata)
    const acccesstoken = sessionStorage.getItem('accesstoken')

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    const [value, setValue] = useState(1);
    const handleclick = (ele) => {
        setValue(ele)
        console.log(value)
    }

 


    return (
        <>
            <div className='' style={{ width: "99%" }}>
                <div className=' row bg-light' >
                    <div className=' col-lg-2 col-12 fs-1 fw-bold text-center'> <Link to='/home'> SHEIN </Link> </div>
                    <div className=' col-7 m-auto my-2' style={{ flexWrap: "nowrap", overflow: "scroll" }}>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value} style={{}}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList aria-label="lab API tabs example">
                                        {headdata?.map((data) => (
                                            <Tab onClick={() => handleclick(data.id)} label={data.name} value={data.id} />
                                        ))}

                                    </TabList>
                                </Box>
                                <div className='d-flex w-auto' style={{ flexWrap: "nowrap", overflow: "scroll" }}>
                                    {headdata?.map((data) => (
                                        data.id == value ?
                                            data.childrens.map((childdata) => (
                                                <TabPanel value={value}> <small>{childdata.name} </small></TabPanel>
                                            )) : ""))}
                                </div>
                            </TabContext>
                        </Box>
                    </div>

                    <div className='col-lg-3 col-12 text-lg-end text-center my-auto d-flex justify-content-end mr-3'>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <div onClick={handleOpenUserMenu} className='mx-1'><PersonOutlineIcon /></div>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem key='login' onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center"> <Link to='/'> Login </Link></Typography>
                                </MenuItem>

                                {acccesstoken !== null ? <MenuItem key='Accounts' onClick={handleCloseUserMenu}> <Typography textAlign="center"> <Link to='/account'> Account</Link></Typography>  </MenuItem> : ""}


                                {acccesstoken !== null ? <MenuItem key='Wishlist' onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center"> <Link to='/wishlist'> Wishlist </Link> </Typography>
                                </MenuItem> : ""}

                                {acccesstoken !== null ? <MenuItem key='chat' onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center"> <Link to='/chat'> My Chat </Link> </Typography>
                                </MenuItem> : ""}
                                {acccesstoken !== null ? <MenuItem key='chat' onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center"> <Link to='/addtocart'> My Cart </Link> </Typography>
                                </MenuItem> : ""}

                            </Menu>
                        </Box>


                        <div className='mx-1'><LocalMallIcon /></div>
                        <div className='mx-1'> <Link to='/wishlist'> <FavoriteBorderIcon /></Link></div>
                        <div className='mx-1'><HeadsetMicIcon /></div>
                        <div className='mx-1'><LanguageIcon /></div>
                        <br />
                        <br />
                        <br />
                       <div>
                        {/* <Search>
                            <SearchIcon />
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}/>
                        </Search> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header