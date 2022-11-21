import './styles.css'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Badge from '@mui/material/Badge';
import store from '../../store'
import { useEffect, useState } from 'react';
import { Container } from '@mui/system';
import { Typography, Button } from '@mui/material';

import * as React from 'react'; 
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import {Link} from 'react-router-dom'


const Header = () => {
    const [cartItems, setcartItems] = useState(0)
    useEffect(()=>setcartItems(store.getState().cart.length), [store.getState().cart.length])

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="navbar-brand" to={`/pushcart`}><h4>PushCart</h4></Link>
                <button 
                    className="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                </ul>
                <div className="d-flex nav-item navbar-nav mb-2 mb-lg-0">
                    <a className="nav-categories nav-link" id="basic-button" data-bs-toggle="dropdown">
                             <CategoryOutlinedIcon/> <span className='px-1'>SHOP</span>
                         </a>
                         <div className="dropdown-menu megamenu" role="menu">
                             <div className="row g-3">
                             <div className="col-lg-3 col-6">
                                 <div className="col-megamenu">
                                 <div className="form-check pb-2">
                                     <h5 className="title">Women</h5>
                                     <ul className="list-unstyled">
                                         <li>
                                             <img src={require(`../../Assets/images/crop-top.png`)} width="50"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Tops</label></a>
                                         </li>

                                         <li>
                                             <img src={require("../../Assets/images/skirt.png")} width="50"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Bottoms</label></a>
                                         </li>

                                         <li>
                                             <img src={require("../../Assets/images/dress.png")} width="50"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Dresses</label></a>
                                         </li>

                                         <li>
                                             <img src={require("../../Assets/images/fbags.png")} width="50"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Bags</label></a>
                                         </li>

                                         <li>
                                             <img src={require("../../Assets/images/fshoes.png")} width="50"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Shoes</label></a>
                                         </li>

                                         <li>
                                             <img src={require("../../Assets/images/jewelry.png")} width="50"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Accessories</label></a>
                                         </li>
                                     </ul>
                                 </div>
                                 </div>
                                
                                 </div>
                                
                                 <div className="col-lg-3 col-6">
                                 <div className="col-megamenu">
                                     <div className="form-check pb-2">
                                     <h5 className="title">Men</h5>
                                         <ul className="list-unstyled">
                                         <li>
                                             <img src={require("../../Assets/images/shirt.png")} width="50"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Tops</label></a>
                                         </li>

                                         <li>
                                             <img src={require("../../Assets/images/shorts.png")} width="50"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Bottoms</label></a>
                                         </li>

                                         <li>
                                             <img src={require("../../Assets/images/suit.png")} width="50"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Formal Wear</label></a>
                                         </li>

                                         <li>
                                             <img src={require("../../Assets/images/mbag.png")} width="50"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Bags</label></a>
                                         </li>

                                         <li>
                                             <img src={require("../../Assets/images/mshoes.png")} width="50"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Shoes</label></a>
                                         </li>

                                         <li>
                                             <img src={require("../../Assets/images/watch.png")} width="50"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Accessories</label></a>
                                         </li>
                                         </ul>
                                     </div>
                                     </div>
                                
                                 </div>
                                
                                 <div className="col-lg-3 col-6">
                                 <div className="col-megamenu">
                                     <div className="form-check">
                                     <h5 className="title">Kids</h5>
                                     <ul className="list-unstyled">
                                         <li>
                                             <img src={require("../../Assets/images/ktops.png")} width="50"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Tops</label></a>
                                         </li>

                                         <li>
                                             <img src={require("../../Assets/images/kpants.png")} width="50"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Bottoms</label></a>
                                         </li>

                                         <li>
                                             <img src={require("../../Assets/images/kbags.png")} width="50"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Bags</label></a>
                                         </li>

                                         <li>
                                             <img src={require("../../Assets/images/kshoes.png")} width="50"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Shoes</label></a>
                                         </li>

                                         <li>
                                             <img src={require("../../Assets/images/bproducts.png")} width="50"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Baby Products</label></a>
                                         </li>

                                         <li>
                                             <img src={require("../../Assets/images/toys.png")} width="50"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Toys</label></a>
                                         </li>
                                     </ul>
                                     </div>
                                 </div>
                                
                                 </div>
                                 <div className="col-lg-3 col-6">
                                 <div className="col-megamenu">
                                     <div className="form-check">
                                     <h5 className="title">Home</h5>
                                         <ul className="list-unstyled">
                                         <li>
                                             <img src={require("../../Assets/images/h-entertainment.png" )} width="60"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Home Entertainment</label></a>
                                         </li>

                                         <li>
                                             <img src={require("../../Assets/images/h-oven.png")} width="50"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Home & Living</label></a>
                                         </li>

                                         <li>
                                             <img src={require("../../Assets/images/h-pc.png")} width="50"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Electronics</label></a>
                                         </li>

                                         <li>
                                             <img src={require("../../Assets/images/h-chair.png")} width="50"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Furniture</label></a>
                                         </li>

                                         <li>
                                             <img src={require("../../Assets/images/h-kitchen.png")} width="50"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Kitchenware</label></a>
                                         </li>

                                         <li>
                                             <img src={require("../../Assets/images/h-garden.png")} width="50"/>
                                             <a href=""><label className="form-check-label" for="flexCheckDefault">Outdoor & Garden</label></a>
                                         </li>
                                         </ul>
                                     </div>
                                 </div>
                                
                                 </div>
                            
                             </div>
                            <Container className='text-center'><Link to={`/pushcart/products`}><Typography variant='h6'>See all</Typography><KeyboardDoubleArrowDownIcon/></Link></Container>
                         </div>
                    <Link to={`/orders`}  className='nav-categories nav-link px-1'>
                        <ViewStreamOutlinedIcon/> <span className='px-1'>ORDERS</span>
                    </Link>
                    <a className='nav-categories nav-link px-1'
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}>
                       <AccountCircleOutlinedIcon /><span className='px-1'>ACCOUNT</span>
                    </a>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem><Link className='nav-categories nav-link px-1' to={`/pushcart/setting`}>My Settings</Link></MenuItem>
                        <MenuItem><Link className='nav-categories nav-link px-1' to={`/pushcart/login`}>Login/Register</Link></MenuItem>
                    </Menu>
                    <Link to={`/pushcart/cart`} className='nav-categories nav-link px-1'>
                        <Badge badgeContent={cartItems} color="secondary">
                               <ShoppingCartOutlinedIcon/>
                           </Badge>
                           <span className='px-2'>CART</span>
                       </Link>
                </div>
                </div>
            </div>
            </nav>
    )
}

export default Header