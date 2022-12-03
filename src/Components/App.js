import * as React from 'react'
import {connect} from 'react-redux'
import { getProductsByFilter, clearProducts, resetFilter } from '../Actions'

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
import Footer from './Footer';
import Checkout from './Checkout';
import Orders from './Orders';

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

function App({getProductsByFilter, clearProducts, resetFilter}) {
  React.useEffect(()=>{
    resetFilter()
    getProductsByFilter()
    return ()=>{
      clearProducts()
      resetFilter()
    }
  }, [store.getState().filter])
  console.log("persist store", store.getState())
  return (
    <ThemeProvider theme={theme}>
      <Routes>
      <Route path='pushcart' element={
        <>
          <Header/>
          <Home/>
          <Footer/>
        </>
      }/>
      <Route path='pushcart/login' element={ <Login/>}/>
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
      <Route path='pushcart/checkout' element={<Checkout/>}/>
      <Route path='pushcart/orders' element={
        <>
          <Header/>
          <Orders/>
          <Footer/>
        </>
      }/>
      </Routes>
    </ThemeProvider>
  );
}

export default connect(null, {getProductsByFilter, clearProducts, resetFilter})(App);
