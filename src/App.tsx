import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import "antd/dist/reset.css";
import './index.css';      
import ProductsList from './pages/ProductsList';
import ProductDetails from './pages/ProductDetails';
import Signup from './pages/authentication/Signup';
import Login from './pages/authentication/Login';


function App() {
  return (
    <BrowserRouter>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductsList" element={<ProductsList />} /> 
          <Route path="/Product" element={<ProductDetails />} /> 
          <Route path="/Signup" element={<Signup />} /> 
          <Route path="/Login" element={<Login />} /> 

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
