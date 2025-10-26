import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/customer/Home';
import "antd/dist/reset.css";
import './index.css';      
import ProductsList from './pages/customer/ProductsList';
import ProductDetails from './pages/customer/ProductDetails';
import Signup from './pages/customer/authentication/Signup';
import Login from './pages/customer/authentication/Login';
import Profile from './pages/customer/Profile';
import EmailConfirmation from './pages/customer/authentication/Emailconfirmation';
import ForgetPassword from './pages/customer/authentication/Forgetpassword';
import ResetPassword from './pages/customer/authentication/Resetpassword';
import NotFound from './pages/Notfound';
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import ProductManagementSection from './components/pages/admin/sections/productmanagement/ProductManagementSection';
import OrdersSection from './components/pages/admin/sections/orders/OrdersSection';
import ReviewsSection from './components/pages/admin/sections/reviews/ReviewsSection';
import AddNewProductSection from './components/pages/admin/sections/productmanagement/Allproducts/addnewproduct/AddNewProductSection';


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
          <Route path="/AdminLogin" element={<AdminLogin />} /> 
            <Route path="/admin" element={<AdminDashboard />}>
              <Route path="dashboard" element={<div>dashboard</div>} />
              <Route path="product-management" element={<ProductManagementSection />} />
              <Route path="orders" element={<OrdersSection />} />
              <Route path="reviews" element={<ReviewsSection />} />
              <Route path="customers" element={<div>customers</div>} />
              <Route path="settings" element={<div>settings</div>} />
              <Route path="product-management/add" element={<AddNewProductSection />} />
            </Route>
          <Route path="/Profile" element={<Profile />} /> 
          <Route path="/EmailConfirmation" element={<EmailConfirmation />} /> 
          <Route path="/ForgetPassword" element={<ForgetPassword />} /> 
          <Route path="/ResetPassword" element={<ResetPassword />} /> 
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
