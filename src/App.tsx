import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import "antd/dist/reset.css";
import './index.css';      
import ProductsList from './pages/ProductsList';
import ProductDetails from './pages/ProductDetails';
import Signup from './pages/authentication/Signup';
import Login from './pages/authentication/Login';
import Profile from './pages/Profile';
import EmailConfirmation from './pages/authentication/Emailconfirmation';
import ForgetPassword from './pages/authentication/Forgetpassword';
import ResetPassword from './pages/authentication/Resetpassword';


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
          <Route path="/Profile" element={<Profile />} /> 
          <Route path="/EmailConfirmation" element={<EmailConfirmation />} /> 
          <Route path="/ForgetPassword" element={<ForgetPassword />} /> 
          <Route path="/ResetPassword" element={<ResetPassword />} /> 

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
