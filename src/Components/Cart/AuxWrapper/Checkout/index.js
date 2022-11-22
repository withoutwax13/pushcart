import {Box, Stack, Button, Grid, Typography, Divider} from '@mui/material'
import { useEffect, useState } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import store from '../../../../store'

import PhpIcon from '@mui/icons-material/Php';

function Checkout(props) {
    let cart = store.getState().cart
    return (
        <Box
            sx={{
                backgroundColor: 'primary.containerNotWhite',
            }}
            style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', padding: '10% 10%'}}>
            <Stack spacing={2}>
                <Button fullWidth={true} color='secondary' variant="contained" size="large" style={{borderRadius: '50px'}}>
                    <Link to={`/pushcart/checkout`} style={{color: 'inherit'}}>
                        CONTINUE TO CHECKOUT
                    </Link>
                </Button>
                <Grid container spacing={2}>
                    <Grid item md={7} xs={6} sm={6}>
                        <Typography variant='h6'>Subtotal ({cart.reduce((a,b)=>{return a + Number(b.cartPush)}, 0)})</Typography>
                    </Grid>
                    <Grid item md={5} xs={6} sm={6} justifyContent='flex-end'>
                        <Typography variant='h6' style={{opacity: '70%'}}><PhpIcon fontSize='large'/> {cart.reduce((a,b)=>{return a + (b.price*b.cartPush)}, 0)}</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item md={7} xs={6} sm={6}>
                        <Typography variant='h6'>Taxes</Typography>
                    </Grid>
                    <Grid item md={5} xs={6} sm={6}>
                        <Typography variant='h6' style={{opacity: '70%'}}>Calculated at Checkout</Typography>
                    </Grid>
                </Grid>
                <Divider variant="middle" />
                <Grid container spacing={2}>
                    <Grid item md={7} xs={6} sm={6}>
                        <Typography variant='h6'>Estimated Total</Typography>
                    </Grid>
                    <Grid item md={5} xs={6} sm={6}>
                        <Typography variant='h6'><PhpIcon fontSize='large'/> {(Math.round(cart.reduce((a,b)=>a + (b.price * b.cartPush), 0) * 100)/100).toFixed(2)}</Typography>
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps)(Checkout);