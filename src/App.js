import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from './components/navbar';
import Home from './views/home';
import Service from './views/services';
import Tours from './views/tours';
import ContactUs from './views/contactUs';
import Zanzibar from './views/zanzibarHome';
import Wildlife from './views/wildlifeHome';
import Mountain from './views/mountainHome';


function App() {
  return (
    <div className='dark:bg-black'>
<Routes>
  
    <Route exact path="/" element={<Home />}  />
    <Route path= "/Tours" element={<Tours/>} />
    <Route path= "/Services" element={<Service/>} />
    <Route path= "/contactUs" element={<ContactUs/>} />
    <Route path= "/zanzibar" element={<Zanzibar/>} />
    <Route path= "/wildlife" element={<Wildlife/>} />
    <Route path= "/mountain" element={<Mountain/>} />
</Routes>

     
    </div>
  
  );
}

export default App;
