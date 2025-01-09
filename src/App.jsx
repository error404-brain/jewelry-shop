import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import BodyContent from './component/homecontent';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <Header />
      <hr />
      
      <hr />
      <Routes>
        <Route path="/" element={<BodyContent />} />
      </Routes>
      <hr />
      <Footer />
    </Router>
  );
}

export default App;
