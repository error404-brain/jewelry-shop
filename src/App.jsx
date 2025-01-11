// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import BodyContent from './component/homecontent';
import Footer from './component/Footer';
import Products from './component/products';
import ProductDetail from './component/ProductDetail';

function App() {
  return (
    <Router>
      <Header />
      <hr />
      <Routes>
        <Route path="/" element={<BodyContent />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} /> {/* Trang chi tiết sản phẩm */}
      </Routes>
      <hr />
      <Footer />
    </Router>
  );
}

export default App;
