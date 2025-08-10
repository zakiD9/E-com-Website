import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import "antd/dist/reset.css";
import './index.css';      


function App() {
  return (
    <BrowserRouter>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
