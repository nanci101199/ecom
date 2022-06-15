import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { styled, alpha } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link, Navigate, useNavigate } from 'react-router-dom'
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
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



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

    const navigate = useNavigate()
    const [value, setValue] = useState();
    const handleclick = (ele) => {
        setValue(ele.id)
        console.log(ele)
        navigate(`/viewcategory/${ele.id}/${ele.name}`)
    }

    const logOut = () => {
        sessionStorage.clear()
    }



    return (
        <>
            <div className='' style={{ width: "99%" }}>
                <div className=' row bg-light ' >
                    <div className='d-lg-none d-flex m-auto px-5 col-4' data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"> <MenuIcon fontSize='large' /> </div>
                    <div className=' col-lg-2 col-4 fs-1 fw-bold text-center m-auto'> <Link to='/'> SHEIN </Link> </div>
                    <div className=' col-lg-7 col-4 m-auto my-2 justify-content-center d-lg-flex d-none' style={{ flexWrap: "nowrap", overflow: "scroll" }}>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value} style={{}}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <div className=' d-flex justify-content-center' style={{ flexWrap:"nowrap", overflow:"scroll"}}>
                                        <TabList aria-label="lab API tabs example">
                                            {headdata?.map((data) => (
                                                <Tab onClick={() => handleclick(data)} label={data.name} value={data.id} />
                                            ))}

                                        </TabList>
                                    </div>
                                </Box>
                                <div className='d-flex w-auto justify-content-center' style={{ flexWrap: "nowrap", overflow: "scroll" }}>
                                    {headdata?.map((data) => (
                                        data.id == value ?
                                            data.childrens.map((childdata) => (
                                                <TabPanel value={value}> <small>{childdata.name} </small></TabPanel>
                                            )) : ""))}
                                </div>
                            </TabContext>
                        </Box>
                    </div>

                    <div className='col-lg-3 col-4 text-end  m-auto d-flex justify-content-lg-end justify-content-center ' style={{ alignItems: "center" }}>
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
                               

                                {acccesstoken !== null ?
                                <>
                                 <MenuItem key='Accounts' onClick={handleCloseUserMenu}> <Typography textAlign="center"> <Link to='/account'> Account</Link></Typography>  </MenuItem> 
                                 <MenuItem key='Wishlist' onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center"> <Link to='/wishlist'> Wishlist </Link> </Typography>
                                </MenuItem>
                                <MenuItem key='chat' onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center"> <Link to='/chat'> My Chat </Link> </Typography>
                                </MenuItem>
                                <MenuItem key='chat' onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center"> <Link to='/addtocart'> My Cart </Link> </Typography>
                                </MenuItem>
                                <MenuItem key='chat' onClick={logOut}>
                                    <Typography textAlign="center"> LogOut </Typography>
                                </MenuItem>
                                 </>
                                 :
                                 <MenuItem key='login' onClick={handleCloseUserMenu}>
                                 <Typography textAlign="center"> <Link to='/login'> Login </Link></Typography>
                                </MenuItem>
                                }

                            </Menu>
                        </Box>


                        <div className='mx-1'><Link to='/addtocart'> <LocalMallIcon /> </Link></div>
                        <div className='mx-1'> <Link to='/wishlist'> <FavoriteBorderIcon /></Link></div>
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
                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <div className='justify-content-center'  >
                                        <TabList aria-label="lab API tabs example">
                                            {headdata?.map((data) => (
                                                <Tab onClick={() => handleclick(data)} label={data.name} value={data.id} />
                                            ))}

                                        </TabList>
                                    </div>
                                </Box>
                                <div className=' w-auto ' style={{ flexWrap: "nowrap", overflow: "scroll" }}>
                                    {headdata?.map((data) => (
                                        data.id == value ?
                                            data.childrens.map((childdata) => (
                                                <div class="card my-2">
                                                    <div class="card-body d-flex justify-content-between">
                                                        <div className=' p-1' value={value}> <small>{childdata.name} </small></div>
                                                        <div><ArrowForwardIosIcon/></div>
                                                    </div>
                                                </div>

                                            )) : ""))}
                                    
                                </div>
                            </TabContext>
                        </Box>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header