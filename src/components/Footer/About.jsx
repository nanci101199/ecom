import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {Link} from 'react-router-dom';


function handleClick(event) {
    event.preventDefault();
}

function About() {
    return (
        <>
            <div>
                <div role="presentation" onClick={handleClick}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <span underline="hover" color="inherit" href="/home">
                        <Link to='/home'>  Home </Link>
                        </span>
                        <span
                            underline="hover"
                            color="inherit"
                            href="/material-ui/getting-started/installation/"
                        >
                            <Link to='/about'>  About </Link>
                            
                        </span>
                    </Breadcrumbs>
                </div>
                <div className='bg-light  px-5 container'>
                    <div className='row p-5'>
                        <div className='col-lg-6'>
                            <div className='text-warning fs-1 fw-bold'>About Us</div>
                        </div>
                        <div className='col-lg-6 fs-5'>
                        SHEIN is a global fashion and lifestyle e-retailer committed to making the beauty of fashion accessible to all. We use on-demand manufacturing technology to connect suppliers to our agile supply chain, reducing inventory waste and enabling us to deliver a variety of affordable products to customers around the world. From our global offices, we reach customers in more than 150 countries. To learn more about SHEIN, visit <Link to='/'> eur.shein.com.</Link>
                        </div>
                    </div>
                    <div>
                        <div className='text-black fs-1 fw-bold'>SHEIN At-a-Glance</div>
                        <div className='row'>
                            <div className='col-lg-4 text-center'>
                                <img src="https://img.ltwebstatic.com/images3_acp/2022/01/29/16434239051679acc9e278b6cc07f37194d3c6d608.jpg" alt="" />
                                <div className='fs-3'>Nearly</div>
                                <div className='text-primary fs-1 fw-bolder'>10,000</div>
                                <div className='fs-3'>employees worldwide</div>
                            </div>
                            <div className='col-lg-4 text-center'>
                                <img src="https://img.ltwebstatic.com/images3_acp/2022/01/29/164342393768edb122b1f07b3c696954526500b67b.jpg" alt="" />
                                <div className='fs-3'></div>
                                <div className='text-primary fs-1 fw-bolder'>58%</div>
                                <div className='fs-3'>total female employees worldwide</div>
                            </div>
                            <div className='col-lg-4 text-center'>
                                <img src="https://img.ltwebstatic.com/images3_acp/2022/01/29/164342396248323e6c006f7f312395771023f3889b.jpg" alt="" />
                                <div className='fs-3'>selling to</div>
                                <div className='text-primary fs-1 fw-bolder'>150+</div>
                                <div className='fs-3'>countries</div>
                            </div>
                        </div>
                    </div>
                    <div className='row p-5'>
                        <div className='col-lg-6'>
                            <div className='text-warning fs-1 fw-bold'>Our Story</div>
                        </div>
                        <div className='col-lg-6 fs-5'>
                       <p>We believe that the beauty of fashion should be accessible to everyone, not just the privileged few. When the company was founded in 2012, we noticed that fashion companies had to choose between offering choice or reducing inventory pressure and waste. So, we set out to change that by leading the development of alternative processes and technologies to bring fashion into the future.
                        </p>
                        <p>
                        Our customers are at the core of our business model, driving our growth to a team of nearly 10,000 employees serving more than 150 countries within less than a decade. Our digital-first model meets customers where they are: on mobile devices, online and on social media. We have become one of the most popular shopping apps and continue to engage customers by providing multiple content streams directly within the SHEIN platform and delivering the best online shopping experience.
                        </p>
                        <img src="https://img.ltwebstatic.com/images3_acp/2022/01/28/164330393435fd4c2a9ce0c68d0a2c914a0dd9bcc6.jpg" alt="" />
                        </div> 
                    </div>
                    <div className='row p-5'>
                        <div className='col-lg-6'>
                            <div className='text-warning fs-1 fw-bold'>Making the Beauty of Fashion Accessible to All</div>
                        </div>
                        <div className='col-lg-6 fs-5'>
                        Consumers no longer follow a unified standard of what is considered "fashionable" or "beautiful". We believe that the clothes we wear reflect our personalities and we want to empower everyone to explore and express their individuality. To do this, SHEIN creates a wide range of options to fit any mood or occasion.
                        </div>
                        <div>
                            <img src="https://img.ltwebstatic.com/images3_acp/2022/01/29/164342649668a4ff37a0dffdba8aa2aa84e401c59e.png" alt="" />
                        </div>
                    </div>
                    <div className='row p-5'>
                        <div className='col-lg-6'>
                            <div className='text-warning fs-1 fw-bold'>Driving Technological Innovation</div>
                        </div>
                        <div className='col-lg-6 fs-5'>
                        <p> SHEIN’s mission is to serve as a leader in the industry and bring fashion into the modern era. We employ cutting-edge technologies and processes in our design and sourcing to stay well-informed of what is in-demand by consumers, produce goods in a timely manner and deliver the products quickly to anywhere in the world. By developing proprietary logistics and ecommerce technology, we are disrupting the fashion space and improving outcomes for manufacturers, suppliers and consumers.
                      </p>  
                      <p className='fw-bold'>Digitally Empowered Agile Supply Chain</p>
                      <p>To meet demand, we have built a fully digital supply chain that seamlessly and quickly delivers products to our customers worldwide. We use proprietary software to track sales and communicate with our factories in real time to order in small batches. Our digital supply chain is the core of our business model and empowers us to offer a wide range of on-trend styles without creating excessive inventory waste or making customers wait weeks for their orders to be fulfilled.</p>
                      <img src="https://img.ltwebstatic.com/images3_acp/2022/01/29/1643426545f9029b32071c57997b5db39e1fd6abfb.jpg" alt="" />
                      </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About