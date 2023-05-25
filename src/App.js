import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home'
import Varkala from './components/varkala/Varkala'
import Abouts from './components/abouts/Abouts';
import Blogs from './components/blogs/Blogs';
import Fouter from './components/fouter/Fouter'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Varkala' element={<Varkala />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/about' element={<Abouts />} />
        </Routes>
        <Fouter />
      </Router>
    </>
  );
}

export default App;
