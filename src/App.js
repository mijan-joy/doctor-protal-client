import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/Home/About';
import Appointment from './Pages/Home/Appointment';
import Home from './Pages/Home/Home';
import Reviews from './Pages/Home/Reviews';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
  <Navbar></Navbar>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/appointment" element={<Appointment />}></Route>
    <Route path="/reviews" element={<Reviews />}></Route>
    <Route path="/login" element={<Login />}></Route>
  </Routes>
    </div>
  );
}

export default App;
