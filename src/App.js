import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Sale from './pages/Sale';
import ProductDetails from './pages/ProductsDetail'; 
import data from './data.json';

function App() {
  return (
    <div className="App">
      <Router>
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
              element={
                <Shop />
              }
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
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
