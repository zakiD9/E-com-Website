import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import "antd/dist/reset.css";
import './index.css';      
import ProductsList from './pages/ProductsList';
import ProductDetails from './pages/ProductDetails';


function App() {
  return (
    <BrowserRouter>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductsList" element={<ProductsList />} /> 
          <Route path="/Product" element={<ProductDetails />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
