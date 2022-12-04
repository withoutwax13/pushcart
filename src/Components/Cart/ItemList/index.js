import {Box, Container, Stack, Typography, Divider} from '@mui/material'
import Item from './Item';
import store from '../../../store'
import { useEffect, useState } from 'react';

function ItemList({cart, updateCart}) {
    const [user, setUser] = useState(store.getState().user)
    useEffect(()=>{
        setUser(store.getState().user)
    }, [user])
    const displayItems = () => {
        if(cart.length != 0){
            console.log("cart", cart)
            return cart.map((item)=><Container key={item.product_id}><Item id={item.product_id}/><Divider variant="middle" /></Container>)
        }else{
            return <Typography variant='h5' alignSelf='center'>No items in the cart.</Typography>
        }
    }
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                backgroundColor: 'primary.containerNotWhite',
            }}
            style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
            <Stack spacing={3}>
                <Box
                    sx={{
                        width: '100%',
                        height: '10%',
                        padding: '20px',
                        backgroundColor: 'primary.contrastText',
                        boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px'
                    }}>
                    <Typography variant='h5'>{user === null ? `Login to Set Default Shipping Address` : `Default Shipping Address: ${user.address_line_1} ${user.address_line_1}, ${user.city}, Philippines ${user.postal_code}`}</Typography>
                </Box>
                {displayItems()}
            </Stack>
        </Box>
    );
}

export default ItemList;