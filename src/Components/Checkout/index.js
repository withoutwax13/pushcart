import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" to='/pushcart/cart'>
        PushCart.Com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step, additionalAttrib) {
  switch (step) {
    case 0:
        return <AddressForm handler={additionalAttrib}/>;
      case 1:
        return <PaymentForm handler={additionalAttrib}/>;
      case 2:
        return <Review handler={additionalAttrib}/>;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [addressInfo, setAddressInfo] = React.useState({})
  const [paymentInfo, setPaymentInfo] = React.useState({})

  var handleAddressInfo = (data) => {
    setAddressInfo(data)
  }

  var handlePaymentInfo = (data) => {
    setPaymentInfo(data)
  }

  var handler = [handleAddressInfo, handlePaymentInfo, {addressInfo: addressInfo, paymentInfo: paymentInfo}]

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Link to={`/pushcart/cart`} style={{color: 'black'}}>
          <Typography variant="h6" color="inherit" noWrap>
          <ArrowBackIosNewTwoToneIcon/>
            Back to Cart
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep, handler[activeStep])}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </>
  );
}