import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import BodyContent from './BodyContent';
import Footer from './Footer';

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
