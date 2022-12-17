import * as React from 'react';
import { Navigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {MenuItem, Select, InputLabel, FormControl} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import API from '../../API/index'
import validator from 'validator';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to={`/pushcart`}>
        PushCart.Com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Register() {
  const [first_name, setFirstName] = React.useState(``)
  const [last_name, setLastName] = React.useState(``)
  const [email_address, setEmailAddress] = React.useState(``)
  const [password, setPassword] = React.useState(``)
  const [password2, setPassword2] = React.useState(``)
  const [gender, setGender] = React.useState(``)
  const [month, setMonth] = React.useState(``)
  const [day, setDay] = React.useState(``)
  const [year, setYear] = React.useState(``)
  const [addressLine1, setAddressLine1] = React.useState(``)
  const [addressLine2, setAddressLine2] = React.useState(``)
  const [city, setCity] = React.useState(``)
  const [postalCode, setPostalCode] = React.useState(``)
  const [phoneNum, setPhoneNum] = React.useState(``)
  const [formValid, setFormValidity] = React.useState(false)
  const [userCreationSuccess, setUserCreationSuccess] = React.useState(false)
  
  const handleSubmit = () => {
    // if(formValid){
    //   API.post('customers', {
    //     first_name: first_name,
    //     last_name: last_name,
    //     gender: gender,
    //     birthdate: `${year}-${month < 10 ? `0${month}` : month}-${day}`,
    //     email_address: email_address,
    //     address_line_1: addressLine1,
    //     address_line_2: addressLine2,
    //     city: city,
    //     postal_code: postalCode,
    //     password: password,
    //     mobile_number: phoneNum
    //   }).then(response=>{
    //     console.log(response)
    //     setUserCreationSuccess(true)
    //   }).catch(err=>{
    //     console.log(err)
    //   })
    // }else{
    //   alert("Form input(s) not valid. Please retry.")
    //   setFirstName(``); 
    //   setLastName(``); 
    //   setEmailAddress(``); 
    //   setGender(``); 
    //   setMonth(``); 
    //   setDay(``); 
    //   setYear(``); 
    //   setAddressLine1(``); 
    //   setAddressLine2(``);
    //   setCity(``);
    //   setPostalCode(``);
    //   setPassword(``);
    //   setPassword2(``);
    //   setPhoneNum(``);
    // }
    API.post('customers', {
      first_name: first_name,
      last_name: last_name,
      gender: gender,
      birthdate: `${year}-${month < 10 ? `0${month}` : month}-${day}`,
      email_address: email_address,
      address_line_1: addressLine1,
      address_line_2: addressLine2,
      city: city,
      postal_code: postalCode,
      password: password,
      mobile_number: phoneNum
    }).then(response=>{
      console.log(response)
      setUserCreationSuccess(true)
    }).catch(err=>{
      console.log(err)
    })
  }

  // const validateForm = () => {
  //   if(!validator.isEmail(email_address)){ setFormValidity(false); return; }
  //   if(!validator.isEmpty(first_name) && !validator.isEmpty(last_name) && !validator.isEmpty(gender)){ setFormValidity(false); return; }
  //   if(!validator.isEmpty(month) && !validator.isEmpty(day) && !validator.isEmpty(year)){ setFormValidity(false); return; }
  //   if(!validator.isEmpty(addressLine2)){ setFormValidity(false); return; }
  //   if(!validator.isEmpty(city) && !validator.isEmpty(postalCode) && !validator.isEmpty(phoneNum)){ setFormValidity(false); return; }
  //   if(password !== password2){ setFormValidity(false); return; }
  //   setFormValidity(true);
  // }

  return userCreationSuccess === true ? <Navigate replace to="/pushcart/cart"/> : (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                sx={{paddingY: '8px',marginY: '0'}}
                  value={first_name}
                  onChange={e=>setFirstName(e.target.value)}
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                sx={{paddingY: '8px',marginY: '0'}}
                  value={last_name}
                  onChange={e=>setLastName(e.target.value)}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                sx={{paddingY: '8px',marginY: '0'}}
                  value={email_address}
                  onChange={e=>setEmailAddress(e.target.value)}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                sx={{paddingY: '8px',marginY: '0'}}
                  value={password}
                  onChange={e=>setPassword(e.target.value)}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                sx={{paddingY: '8px',marginY: '0'}}
                  value={password2}
                  onChange={e=>setPassword2(e.target.value)}
                  required
                  fullWidth
                  name="password"
                  label="Retype Password"
                  type="password"
                  id="password"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormControl required>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gender}
                    label="Gender"
                    onChange={e=>setGender(e.target.value)}
                    sx={{ minWidth: 100 }}
                  >
                    <MenuItem value={`Male`}>Male</MenuItem>
                    <MenuItem value={`Female`}>Female</MenuItem>
                    <MenuItem value={`Other`}>Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormControl required>
                  <InputLabel id="demo-simple-select-label">Month</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={month}
                    label="Month"
                    onChange={e=>setMonth(e.target.value)}
                    sx={{ minWidth: 100 }}
                  >
                    {[ ...Array(12).keys() ].map( i => i+1).map(v=>{
                      return <MenuItem key={v} value={v}>{v}</MenuItem>
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormControl required>
                  <InputLabel id="demo-simple-select-label">Day</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={day}
                    label="Day"
                    onChange={e=>setDay(e.target.value)}
                    sx={{ minWidth: 100 }}
                  >
                    {[ ...Array(31).keys() ].map( i => i+1).map(v=>{
                      return <MenuItem key={v} value={v}>{v}</MenuItem>
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={3}>
                <FormControl required>
                  <InputLabel id="demo-simple-select-label">Year</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={year}
                    label="Year"
                    onChange={e=>setYear(e.target.value)}
                    sx={{ minWidth: 100 }}
                  >
                    {[ ...Array(Number((new Date()).getFullYear()) - 1950-18).keys() ].map( i => 1950+i).map(v=>{
                      return <MenuItem key={v} value={v}>{v}</MenuItem>
                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                sx={{paddingY: '8px',marginY: '0'}}
                  required
                  fullWidth
                  name="addressLine1"
                  label="Address Line 1"
                  type="address"
                  id="addressLine1"
                  value={addressLine1}
                  onChange={E=>setAddressLine1(E.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                sx={{paddingY: '8px',marginY: '0'}}
                  required
                  fullWidth
                  name="addressLine2"
                  label="Address Line 2"
                  type="address"
                  id="addressLine2"
                  value={addressLine2}
                  onChange={E=>setAddressLine2(E.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                sx={{paddingY: '8px',marginY: '0'}}
                  required
                  fullWidth
                  name="city"
                  label="City"
                  type="address"
                  id="city"
                  value={city}
                  onChange={E=>setCity(E.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                sx={{paddingY: '8px',marginY: '0'}}
                  required
                  fullWidth
                  name="postalcode"
                  label="Postal Code"
                  type="number"
                  id="postalcode"
                  value={postalCode}
                  onChange={E=>setPostalCode(E.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                sx={{paddingY: '8px',marginY: '0'}}
                  required
                  fullWidth
                  name="PhoneNum"
                  label="Phone Number"
                  type="number"
                  id="PhoneNum"
                  value={phoneNum}
                  onChange={E=>setPhoneNum(E.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              onClick={()=>{
                // validateForm()
                handleSubmit()
              }}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={`/pushcart/login`} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
  );
}