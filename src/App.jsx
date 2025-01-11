// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import BodyContent from './component/homecontent';
import Footer from './component/Footer';
import Products from './component/products';  // Component hiển thị danh sách sản phẩm
import ProductDetail from './component/ProductDetail';
import Productswatches from './component/watchePage';  // Component cho sản phẩm đồng hồ

function App() {
  return (
    <Router>
      <Header />
      <hr />
      <Routes>
        <Route path="/" element={<BodyContent />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/products/category/6" element={<Productswatches />} /> {/* Sản phẩm đồng hồ */}
      </Routes>
      <hr />
      <Footer />
    </Router>
  );
}

export default App;
