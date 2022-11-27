import { addToCart } from "../../../Actions"
import {connect} from 'react-redux'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add'; 
import { Badge, Grid, IconButton } from "@mui/material";
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 250,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  py: 4,
  px: 4
};
const LoadImage = ({src, classNameStr}) => {
    // const [loaded, setLoaded] = useState(false);
    let img_src = null
    try{
        img_src = require(`../../../Assets/images/${src}`)
    }catch{
        img_src = 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-4_large.png?format=jpg&quality=90&v=1530129177' 
    }
    return (
      <img className={classNameStr} src={img_src}/>
    );
}
const ProductCard = (props) => {
    const tags = ["NEW", "HOT", "BEST BUY"]
    const {product_id, image, price, product_name, stock} = props.data
    const [countValue, setCountValue] = useState(0)
    const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    const handleIncrement = () => {
        setCountValue(prevState=> prevState < stock ? prevState + 1 : stock)
    } 
    const handleDecrement = () => {
        setCountValue(prevState=>{
            if(prevState === 0){
                return 0
            }else{
                return prevState-1
            }
        })
    } 
    const handleChange = (e) => {
        if(/[a-zA-Z]/.test(e.target.value)){
            setCountValue(1)
        }else if(e.target.value > stock){
            setCountValue(stock)
        }else if(Number(e.target.value) <= 0){
            setCountValue(1)
        }else{
            setCountValue(e.target.value)
        }
    }
    
    const handleClickCartIcon = () => {
        let updatedData = props.data
        updatedData.cartPush = countValue
        console.log("add", updatedData)
        props.addToCart(updatedData)
        setCountValue(0)
    }

    
    

    return (
        <div class="col-lg-3 col-sm-6 pb-3 d-flex flex-column align-items-center justify-content-center product-item my-3 border border dark">
            <div class="product">
                <LoadImage src={image} classNameStr="pic-1"/>
                <LoadImage src={image} classNameStr="pic-2"/>
                {/* <img class="pic-1" src={require(`../../../Assets/images/${image}`)}/>
                <img class="pic-2" src={require(`../../../Assets/images/${image}`)}/> */}
                    <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                        <li onClick={handleDecrement} class="icon-product"><span><RemoveCircleIcon/></span></li>
                        <li class="icon-product">
                            <span>
                                <Badge badgeContent={countValue} color="primary">
                                    <ShoppingCartRoundedIcon/>
                                </Badge>
                            </span>
                        </li>
                        <li onClick={handleIncrement} class="icon-product"><span><AddCircleIcon/></span></li>
                    </ul>
            </div>
            {/* <small class="tag bg-red">{tags[props.tag]}</small> */}
            <div class="title-product pt-4 pb-1">{product_name}</div>
            <div class="d-flex align-content-center justify-content-center star">
                <span><img src={require("../../../Assets/images/icon-star.png")}/></span>
                <span><img src={require("../../../Assets/images/icon-star.png")}/></span>
                <span><img src={require("../../../Assets/images/icon-star.png")}/></span>
                <span><img src={require("../../../Assets/images/icon-star.png")}/></span>
                <span><img src={require("../../../Assets/images/icon-star.png")}/></span>
            </div>
            <h6 class="price">PHP {(Math.round(price*100)/100).toFixed(2)}</h6>
            <Badge badgeContent={countValue} color="primary">
                <button class="buy-1 btn btn-sm" onClick={handleClickCartIcon}><Typography>Add to Cart</Typography></button>
            </Badge>
            
        </div>  
    )
}

export default connect(null, {addToCart})(ProductCard)