import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home'
import Varkala from './components/varkala/Varkala'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Varkala' element={<Varkala/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
