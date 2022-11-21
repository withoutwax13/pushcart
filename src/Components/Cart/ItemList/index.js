import {Box, Container, Stack, Typography, Divider} from '@mui/material'
import Item from './Item';

const fakeUser = {address: "145 Tonyo St., Tondo, Manila, Philippines 1012"}

function ItemList({cart, updateCart}) {
    const displayItems = () => {
        if(cart.length != 0){
            return cart.map((item)=><Container key={item.id}><Item id={item.id}/><Divider variant="middle" /></Container>)
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
            <Stack spacing={1}>
                <Box
                    sx={{
                        width: '100%',
                        height: '10%',
                        padding: '20px',
                        backgroundColor: 'primary.contrastText',
                        boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px'
                    }}>
                    <Typography variant='h5'>Shipping Address: {fakeUser.address}</Typography>
                </Box>
                {displayItems()}
            </Stack>
        </Box>
    );
}

export default ItemList;