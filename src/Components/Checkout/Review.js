import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

import {connect} from 'react-redux'

function Review(props) {
    let cart = props.cart
    const payments = [
        { name: 'Card type', detail: 'Visa' },
        { name: 'Card holder', detail: props.handler.paymentInfo.CC_NAME },
        { name: 'Card number', detail: props.handler.paymentInfo.CC_NUM.split('').map((letter, index)=> index < props.handler.paymentInfo.CC_NUM.length - 4 ? `X` : letter) },
        { name: 'Expiry date', detail: props.handler.paymentInfo.CC_EXP },
      ];
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {cart.map((product) => (
          <ListItem key={product.product_name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.product_name} secondary={`PHP ${(Math.round((product.price)* 100) / 100).toFixed(2)} x ${product.cartPush}`} />
            <Typography variant="body2">PHP {(Math.round((product.price * product.cartPush)* 100) / 100).toFixed(2)}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            PHP {(Math.round(cart.reduce((a,b)=>a + (b.price * b.cartPush), 0) * 100)/100).toFixed(2)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{props.handler.addressInfo.name}</Typography>
          <Typography gutterBottom>{props.handler.addressInfo.address}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Review)