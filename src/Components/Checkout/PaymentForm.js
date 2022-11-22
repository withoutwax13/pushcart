import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function PaymentForm({handler}) {
    const [formData, change_formData] = React.useState({
        CC_NAME: "",
        CC_NUM: "",
        CC_EXP: "",
        CC_CVV: ""
    })
    const handleFormInputChange = (dataField, data) => {
        change_formData(prevState=>({
          ...prevState,
          [dataField]: data
        }))
      }
    React.useEffect(()=>handler(formData), [formData])
    return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            name="CC_NAME"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            onChange={e=>handleFormInputChange(e.target.name, e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            name="CC_NUM"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={e=>handleFormInputChange(e.target.name, e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            name="CC_EXP"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            onChange={e=>handleFormInputChange(e.target.name, e.target.value)}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            name="CC_CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            onChange={e=>handleFormInputChange(e.target.name, e.target.value)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}