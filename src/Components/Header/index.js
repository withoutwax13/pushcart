import './styles.css'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import ViewStreamOutlinedIcon from '@mui/icons-material/ViewStreamOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Badge from '@mui/material/Badge';
import { useEffect, useState } from 'react';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';

import * as React from 'react'; 
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { logoutCurrentUser } from '../../Actions';



const Header = ({user, cart, logoutCurrentUser}) => {
    console.log(user)
    const categories = [
        {id: 0, categLabel: "Tops", categGroup: "Women", imgFile: "crop-top.png"},
        {id: 1, categLabel: "Bottoms", categGroup: "Women", imgFile: "skirt.png"},
        {id: 2, categLabel: "Dresses", categGroup: "Women", imgFile: "dress.png"},
        {id: 3, categLabel: "Bags", categGroup: "Women", imgFile: "fbags.png"},
        {id: 4, categLabel: "Shoes", categGroup: "Women", imgFile: "fshoes.png"},
        {id: 5, categLabel: "Accessories", categGroup: "Women", imgFile: "jewelry.png"},
        {id: 6, categLabel: "Tops", categGroup: "Men", imgFile: "shirt.png"},
        {id: 7, categLabel: "Bottoms", categGroup: "Men", imgFile: "shorts.png"},
        {id: 8, categLabel: "Formal Wear", categGroup: "Men", imgFile: "suit.png"},
        {id: 9, categLabel: "Bags", categGroup: "Men", imgFile: "mbag.png"},
        {id: 10, categLabel: "Shoes", categGroup: "Men", imgFile: "mshoes.png"},
        {id: 11, categLabel: "Accessories", categGroup: "Men", imgFile: "watch.png"},
        {id: 12, categLabel: "Tops", categGroup: "Kid", imgFile: "ktops.png"},
        {id: 13, categLabel: "Bottoms", categGroup: "Kid", imgFile: "kpants.png"},
        {id: 14, categLabel: "Bags", categGroup: "Kid", imgFile: "kbags.png"},
        {id: 15, categLabel: "Shoes", categGroup: "Kid", imgFile: "kshoes.png"},
        {id: 16, categLabel: "Baby Products", categGroup: "Kid", imgFile: "bproducts.png"},
        {id: 17, categLabel: "Toys", categGroup: "Kid", imgFile: "toys.png"},
        {id: 18, categLabel: "Home & Living", categGroup: "Home", imgFile: "h-entertainment.png"},
        {id: 19, categLabel: "Electronics", categGroup: "Home", imgFile: "h-oven.png"},
        {id: 20, categLabel: "Furniture", categGroup: "Home", imgFile: "h-chair.png"},
        {id: 21, categLabel: "Kitchenware", categGroup: "Home", imgFile: "h-kitchen.png"},
        {id: 22, categLabel: "Outdoor & Garden", categGroup: "Home", imgFile: "h-garden.png"},
    ]
    const [cartItems, setcartItems] = useState(0)
    useEffect(()=>setcartItems(cart.length), [cart])

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className="navbar navbar-expand-lg sticky-top">
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
                                        {categories.filter(category=>category.categGroup === "Women").map((category, i)=>{
                                            return (
                                                <li key={i}>
                                                    <img src={require(`../../Assets/images/${category.imgFile}`)}
                                                     width="50"/>
                                                    <Link to={`/pushcart/products`} state={{category}}><label className="form-check-label" for="flexCheckDefault">{category.categLabel}</label></Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                 <div className="col-megamenu">
                                 <div className="form-check pb-2">
                                     <h5 className="title">Men</h5>
                                     <ul className="list-unstyled">
                                        {categories.filter(category=>category.categGroup === "Men").map((category, i)=>{
                                            return (
                                                <li key={i}>
                                                    <img src={require(`../../Assets/images/${category.imgFile}`)}
                                                     width="50"/>
                                                    <Link to={`/pushcart/products`} state={{category}}><label className="form-check-label" for="flexCheckDefault">{category.categLabel}</label></Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                 <div className="col-megamenu">
                                 <div className="form-check pb-2">
                                     <h5 className="title">Kid</h5>
                                     <ul className="list-unstyled">
                                        {categories.filter(category=>category.categGroup === "Kid").map((category, i)=>{
                                            return (
                                                <li key={i}>
                                                    <img src={require(`../../Assets/images/${category.imgFile}`)}
                                                     width="50"/>
                                                    <Link to={`/pushcart/products`} state={{category}}><label className="form-check-label" for="flexCheckDefault">{category.categLabel}</label></Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                 <div className="col-megamenu">
                                 <div className="form-check pb-2">
                                     <h5 className="title">Home</h5>
                                     <ul className="list-unstyled">
                                        {categories.filter(category=>category.categGroup === "Home").map((category, i)=>{
                                            return (
                                                <li key={i}>
                                                    <img src={require(`../../Assets/images/${category.imgFile}`)}
                                                     width="50"/>
                                                    <Link to={`/pushcart/products`} state={{category}}><label className="form-check-label" for="flexCheckDefault">{category.categLabel}</label></Link>
                                                </li>
                                            )
                                        })}
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
                        className='text-center'
                    >
                        {/* <Typography variant='h5' className='nav-categories nav-link px-1'>{Object.keys(store.getState().user).length === 0 ? `Hi, User!` : `Hi, ${store.getState().user.first_name}`}</Typography> */}
                        <MenuItem><Link className='nav-categories nav-link px-1' to={user === null ? `/pushcart/login` : `/pushcart`} onClick={user !== null ? logoutCurrentUser : ()=>{}}>{user === null ? `Login/Register` : `Logout`}</Link></MenuItem>
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

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        user: state.user
    }
}

export default connect(mapStateToProps, {logoutCurrentUser})(Header)