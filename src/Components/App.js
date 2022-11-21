import * as React from 'react'
import {
  Routes,
  Route,
} from "react-router-dom"
import {
  ThemeProvider, 
  createTheme
} from '@mui/material/styles'
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <Routes>
      <Route path='pushcart' element={
        <>
          <Header/>
          <Home/>
        </>
      }/>
      <Route path='pushcart/login' element={<Login/>}/>
      <Route path='pushcart/register' element={<Register/>}/>
      <Route path='pushcart/products' element={
        <>
          <Header/>
          <Products/>
        </>
      }/>
      <Route path='pushcart/cart' element={
        <>
          <Header/>
          <Cart/>
        </>
      }/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
