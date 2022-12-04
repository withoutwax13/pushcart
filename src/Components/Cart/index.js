import { connect } from 'react-redux';

import {Grid, Container} from '@mui/material'
import AuxWrapper from "./AuxWrapper";
import ItemList from './ItemList';

import {updateCart} from '../../Actions/index'

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';


function Cart(props) {
    let cart = props.cart
    let updateCart = props.updateCart

    const [value, setValue] = React.useState(0);
    
    return (
        <Container style={{paddingTop: '20px'}}>
            <Grid sm={12} sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
                <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="CHECKOUT" icon={<FavoriteIcon />}fullWidth={true} color='secondary' variant="contained" size="large" style={{borderRadius: '50px', marginTop: '15px', marginBottom: '15px'}}/>
                </BottomNavigation>
            </Box>
            </Grid>
            <Grid container
                sx={{
                    width: '100%',
                    height: '90vh'
                }}>
                <Grid item md={8} sm={12}>
                    <ItemList cart={cart} updateCart={updateCart}/>
                </Grid>
                <Grid item md={4} sm={12} sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
                    <AuxWrapper cart={cart}/>
                </Grid>
            </Grid>
            
        </Container>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, {updateCart})(Cart);