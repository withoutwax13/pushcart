import { addToCart } from "../../../Actions"
import {connect} from 'react-redux'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add'; 
import { Badge, Grid, IconButton } from "@mui/material";
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
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

const ProductCard = (props) => {
    const {id, productImage1, productImage2, price, heading, stock} = props.data
    const [countValue, setCountValue] = useState(0)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
        props.addToCart(updatedData)
        setCountValue(0)
    }
    

    return (
        <div class="col-lg-3 col-sm-6 pb-3 d-flex flex-column align-items-center justify-content-center product-item my-3 border border dark">
            <div class="product">
                <img class="pic-1" src={require(`../../../Assets/images/${productImage1}`)}/>
                <img class="pic-2" src={require(`../../../Assets/images/${productImage2}`)}/>
                    <ul class="d-flex align-items-center justify-content-center list-unstyled icons">
                        <li onClick={handleOpen} class="icon-product"><span><img src={require(`../../../Assets/images/icon-cart.png`)}/></span></li>
                    </ul>
                    <div>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                
                            </Typography>
                            <Grid container>
                            <IconButton size='small' onClick={handleDecrement}>
                                <RemoveIcon fontSize="inherit"/>
                            </IconButton>
                            <input type='text' style={{borderWidth: '0.5px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', textAlign: 'center', width: '100px'}} sx={{width: 1/2}} value={countValue} onChange={handleChange}/>
                            <IconButton size='small' onClick={handleIncrement}>
                                <AddIcon fontSize="inherit"/>
                            </IconButton>
                        </Grid>
                            </Box>
                        </Modal>
                    </div>
            </div>
            <small class="tag bg-red">sale</small>
            <div class="title-product pt-4 pb-1">{heading}</div>
            <div class="d-flex align-content-center justify-content-center star">
                <span><img src={require("../../../Assets/images/icon-star.png")}/></span>
                <span><img src={require("../../../Assets/images/icon-star.png")}/></span>
                <span><img src={require("../../../Assets/images/icon-star.png")}/></span>
                <span><img src={require("../../../Assets/images/icon-star.png")}/></span>
                <span><img src={require("../../../Assets/images/icon-star.png")}/></span>
            </div>
            <h6 class="price">PHP {price}</h6>
            <Badge badgeContent={countValue} color="primary">
                <button class="buy-1 btn btn-sm" onClick={handleClickCartIcon}>Add to Cart</button>
            </Badge>
            
        </div>  
    )
}

export default connect(null, {addToCart})(ProductCard)