import * as React from 'react'
import {
  ThemeProvider, 
  createTheme
} from '@mui/material/styles'
import 'bootstrap/dist/css/bootstrap.min.css';

import Route from '../Route'
import Cart from './Cart';
import Header from './Header';
import Home from './Home';
import Products from './Products';
import store from '../store';
import Login from './Login';
import Register from './Register';

const theme = createTheme({
  palette: {
    primary: {
      main: '#A33327',
      light: '#C7493A',
      dark: '#917164',
      contrastText: '#ffffff',
      containerNotWhite: "#FEFFFF"
    },
    secondary: {
      main: '#2B7A78',
    },
  },
  typography: {
    fontFamily: ['Nunito'],
    fontSize: 13
  }
});

function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <Route path='/pushcart/'>
        <Header/>
        <Home/>
      </Route>
      <Route path='/pushcart/login/'>
        <Login/>
      </Route>
      <Route path='/pushcart/register/'>
        <Register/>
      </Route>
      <Route path='/pushcart/products/'>
        <Header/>
        <Products/>
      </Route>
      <Route path='/pushcart/cart/'>
        <Header/>
        <Cart/>
      </Route>
    </ThemeProvider>
  );
}

export default App;
