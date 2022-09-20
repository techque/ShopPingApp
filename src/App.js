import { useReducer } from 'react';

import { Routes, Route } from 'react-router-dom';

import PrimaryHeader from './component/header/primary-header/PrimaryHeader';
import PrimaryFooter from './component/footer/primary-footer/PrimaryFooter';
import SecondaryFooter from './component/footer/secondary-footer/SecondaryFooter';

import Home from './page/home/Home';
import Products from './page/products/Products';
import Product from './page/product/Product';
import CartDetails from './page/cart-details/CartDetails';
import Orders from './page/orders/Orders';
import PageNotFound from './page/page-not-found/PageNotFound';
import Registration from './page/registration/Registration';

import { Cart } from './context/Context';
import { Login } from './context/Context';

import { CartReducer, initialCart } from './reducer/CartReducer';
import { LoginReducer, initialLogin } from './reducer/LoginReducer';

export default function App() {

  const [cart, dispatchCart] = useReducer(CartReducer, initialCart);
  const [login, dispatchLogin] = useReducer(LoginReducer, initialLogin);

  return (
    <>
      <Login.Provider value={{ login: login, dispatchLogin: dispatchLogin }}>
        <Cart.Provider value={{ cart: cart, dispatchCart: dispatchCart }}>
          <PrimaryHeader />
          <div style={{ marginTop: '5rem' }}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/products' element={<Products /> } />
              <Route path='/product/:productId' element={<Product /> } />
              <Route path='/cart-details' element={<CartDetails /> } />
              <Route path='/orders' element={<Orders /> } />
              <Route path='/registration' element={<Registration /> } />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </div>
          <PrimaryFooter />
          <SecondaryFooter />
        </Cart.Provider>
      </Login.Provider>
    </>
  );

}