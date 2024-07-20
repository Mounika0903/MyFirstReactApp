import './App.css';

import Menu from './Components/Menu';
import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Components/Home';
import VehicleList from './Components/VehicleList';
import { Route,Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Menu/>
      <Routes>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/vehiclelist" element={<VehicleList/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;



