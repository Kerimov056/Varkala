import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home'
import Varkala from './components/varkala/Varkala'
import Abouts from './components/abouts/Abouts';
import Blogs from './components/blogs/Blogs';
import Fouter from './components/fouter/Fouter'
import Contact from './components/contact/Contact';
import ToBasket from './components/ToBaskett/ToBasket';
// import ShopC from './components/content/ShopC';
import {ShopContextProvider} from './components/content/ShopC'

function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Varkala' element={<Varkala />} />
            <Route path='/blog' element={<Blogs />} />
            <Route path='/about' element={<Abouts />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/toBasket' element={<ToBasket />} />
          </Routes>
          <Fouter />
        </Router>
        </ShopContextProvider>
    </>
  );
}

export default App;
