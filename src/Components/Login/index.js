import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {Link, Navigate} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';
import {login} from '../../Actions'
import { Password } from '@mui/icons-material';

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

function Login({login, user}) {
  
  const [email_address, setemail] = React.useState("")
  const [pw, setpw] = React.useState("")

  return user !== null ? <Navigate replace to="/pushcart/cart"/> : (
    
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url('${require("../../Assets/images/sign_in.png")}')`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                sx={{paddingY: '10px',marginY: '5px'}}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
               value={email_address}
               onChange={e=>setemail(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                sx={{
                    paddingY: '10px',
                    marginY: '5px'
                }}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={pw}
               onChange={e=>setpw(e.target.value)}
              />
              <Button
                onClick={()=>{
                  if(email_address !== "" && Password !== ""){
                    login({email_address: email_address, password: pw})
                  }
                }}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link to={`/pushcart/register`} variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {login})(Login)