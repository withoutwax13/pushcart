import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { connect } from 'react-redux';

function AddressForm(props) {
  const user = props.user
    // var { houseNum, street, brgy, city, province, postalCode } = props.address
    // var { firstName, lastName } = props.user

    React.useEffect(()=>props.handler({address: `${user.address_line_1} ${user.address_line_1}, ${user.city}, Philippines ${user.postalCode}`, name: `${user.first_name} ${user.last_name}`}), [props])
  return (
    <React.Fragment>
      <Typography sx={{marginBottom: '30px'}} variant="h4" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6'>
            <b>First Name:</b> {user.first_name}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant='h6'>
            <b>Last Name:</b> {user.last_name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant='h6'>
                <b>Address:</b> {`${user.address_line_1}, ${user.address_line_2}, ${user.city}, Philippines ${user.postalCode}`}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(AddressForm)