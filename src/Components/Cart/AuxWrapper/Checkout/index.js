import {Box, Stack, Button, Grid, Typography, Divider} from '@mui/material'
import { useEffect, useState } from 'react';

import PhpIcon from '@mui/icons-material/Php';

import store from '../../../../store'

function Checkout({cartData}) {
    let [cart, setCart] = useState(store.getState().cart)
    useEffect(()=>setCart(store.getState().cart), [cartData])
    return (
        <Box
            sx={{
                backgroundColor: 'primary.containerNotWhite',
            }}
            style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', padding: '10% 10%'}}>
            <Stack spacing={2}>
                <Button fullWidth={true} color='secondary' variant="contained" size="large" style={{borderRadius: '50px'}}>
                    CONTINUE TO CHECKOUT
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
                        <Typography variant='h6'><PhpIcon fontSize='large'/> {cart.reduce((a,b)=>{return a + (b.price*b.cartPush)}, 0)}</Typography>
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    );
}

export default Checkout;