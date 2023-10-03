import React, { useState, useEffect } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Shop from './pages/ShopPage';
import Sale from './pages/SalePage';
import ProductDetails from './pages/ProductsDetail'; 
import data from './data.json';
import { GlobalProvider } from './components/GlobalContext';
import Cart from './pages/CartPage';
import WishList from './pages/WishList';
import Login from './pages/Login';
import './assets/styles/style.scss';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <GlobalProvider>
          {!isLoggedIn ? (
            <Routes>
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          ) : (
            <>
              <Header />
              <div className='content'>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/shop/all" element={<Shop />} />
                  <Route path="/sale/all" element={<Sale />} />
                  <Route path="/sale/:category" element={<Sale />} />
                  <Route path="/shop/:category" element={<Shop />} />
                  <Route
                    path="/shop/:category/:type"
                    element={<Shop />}
                  />
                  <Route
                    path="/sale/:category/:type"
                    element={<Sale />}
                  />
                  <Route
                    path="/products/:productId"
                    element={
                      <ProductDetails
                        product={
                          data.products.find((product) =>
                            product.id.toString() ===
                            window.location.pathname.split('/').pop()
                          )
                        }
                      />
                    }
                  />
                  <Route path='/wishlist' element={<WishList/>} />
                  <Route path='/cart' element={<Cart/>} />
                </Routes>
              </div>
              <Footer />
            </>
          )}
        </GlobalProvider>
      </Router>
    </div>
  );
}

export default App;
