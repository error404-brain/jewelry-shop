import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import BodyContent from './component/homecontent';
import Footer from './component/Footer';
import Products from './component/products';

function App() {
  return (
    <Router>
      <Header />
      <hr />
      
      <hr />
      <Routes>
        <Route path="/" element={<BodyContent />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <hr />
      <Footer />
    </Router>
  );
}

export default App;
