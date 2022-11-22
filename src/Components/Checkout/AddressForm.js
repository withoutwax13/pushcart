import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function AddressForm(props) {
    // var { houseNum, street, brgy, city, province, postalCode } = props.address
    // var { firstName, lastName } = props.user
    var houseNum = '#123', street = 'Anywhere St', brgy = 'Brgy', city = 'Anywhere City', province = 'Camarines Sur', postalCode = 1120,
        firstName = "Juan", lastName = "Dela Cruz";
    React.useEffect(()=>props.handler({address: `${houseNum} ${street}, ${brgy}, ${city}, ${province}, Philippines ${postalCode}`, name: `${firstName} ${lastName}`}), [props])
  return (
    <React.Fragment>
      <Typography sx={{marginBottom: '30px'}} variant="h4" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant='h6'>
            <b>First Name:</b> {firstName}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant='h6'>
            <b>Last Name:</b> {lastName}
          </Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant='h6'>
                <b>Address:</b> {`${houseNum} ${street}, ${brgy}, ${city}, ${province}, Philippines ${postalCode}`}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}