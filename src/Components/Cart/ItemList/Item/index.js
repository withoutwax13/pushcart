import {Container, Stack, Grid, Box, Typography, Button, Tooltip, IconButton, Divider, TextField} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'; 
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import PhpIcon from '@mui/icons-material/Php';
import { useEffect, useState } from 'react';

import {connect} from 'react-redux'
import {updateCart, removeFromCart} from '../../../../Actions/index'
import store from '../../../../store'

function Item({id, updateCart, removeFromCart}) {

    let cart = store.getState().cart
    
    let [itemData, setItemData] = useState(cart.filter(e=>e.product_id === id)[0])
    
    var { image, product_name, price, stock, cartPush } = itemData
    
    const [cartItemCount, setItemCount] = useState(cartPush)
    
    useEffect(()=>{setItemData(cart.filter(e=>e.product_id === id)[0])})
    const updatePushCartData = () => {
        let nData = {...itemData, cartPush: cartItemCount}
        updateCart(id, nData)
    }

    const handleRemoveCart = () => {
        removeFromCart(id)
    }

    const handleIncrement = () => {
        setItemCount(prevState=> prevState < stock ? prevState + 1 : stock)
        let nData = {...itemData, cartPush: cartItemCount < stock ? cartItemCount + 1 : stock}
        updateCart(id, nData)
    } 
    const handleDecrement = () => {
        setItemCount(prevState=>{
            if(prevState === 1){
                handleRemoveCart()
            }else{
                return prevState-1
            }
        })
        let nData = {...itemData, cartPush: cartItemCount - 1}
        updateCart(id, nData)
    } 

    const LoadImage = ({src, classNameStr}) => {
        // const [loaded, setLoaded] = useState(false);
        let img_src = null
        try{
            img_src = require(`../../../../Assets/images/${src}`)
        }catch{
            img_src = 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-collection-4_large.png?format=jpg&quality=90&v=1530129177' 
        }
        return (
          <img className={classNameStr} src={img_src} width='70px'/>
        );
    }

    return (
        <Container>
            <Stack spacing={2}>
                <Grid container>
                    <Grid item md={2} justifyContent='flex-start' sx={{paddingTop: '5px', paddingBottom: '5px'}}>
                        <Box>
                            <LoadImage src={image}/>
                        </Box> 
                    </Grid>
                    <Grid item md={7} sx={{paddingTop: '5px', paddingBottom: '5px'}}>
                        {<Typography variant='h6'  style={{fontWeight: '800'}}>{product_name}</Typography>}
                    </Grid>
                    <Grid item md={3} justifyContent='flex-end' sx={{paddingTop: '5px', paddingBottom: '5px'}}>
                        <Typography variant='h6' style={{fontWeight: '800'}}><PhpIcon fontSize='large'/>{` ${(Math.round(price*100)/100).toFixed(2)}`}</Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Tooltip title='Remove '>
                            <Button sx={{color: 'primary'}} onClick={handleRemoveCart}><DeleteOutlineRoundedIcon/></Button>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <Grid container>
                            <IconButton size='small' onClick={handleDecrement}>
                                <RemoveIcon fontSize="inherit"/>
                            </IconButton>
                            {/* <TextField 
                                disabled
                                type='text' 
                                style={{borderWidth: '0.5px', borderTop: 'none', borderLeft: 'none', borderRight: 'none', textAlign: 'center', width: '100px'}} 
                                sx={{width: 1/2}} 
                                value={cartItemCount}
                            /> */}
                            <Typography
                                style={{borderTop: 'none', borderLeft: 'none', borderRight: 'none', textAlign: 'center', width: '100px'}}  
                                sx={{width: 1/2}} 
                                variant='h6'>
                                    {cartItemCount}
                            </Typography>
                            <IconButton size='small' onClick={handleIncrement}>
                                <AddIcon fontSize="inherit"/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider variant="inset" />
            </Stack>
        </Container>
    );
}

// const mapStateToProps = (state) => {
//     return {
//         cart: state.cart
//     }
// }

export default connect(null, {updateCart, removeFromCart})(Item);