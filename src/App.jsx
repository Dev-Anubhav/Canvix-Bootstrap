import './App.css';
import Navbar from "./Navbar";
import Home from "./Home";
import Ourservice from "./ourservices";
import Aboutus from './Aboutus';
import Projects from "./Projects";
import SinglePro from "./singleproduct"
import Footer from "./footer";
import { Routes,Route,BrowserRouter } from 'react-router-dom';

const App=()=>{

  return(
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>

<Route path="/" element={<Home />} />
<Route path='/About' element={<Aboutus />}/>
<Route path="/Projects" element={<Projects />} />
<Route path="/SinglePro/:id" element={<SinglePro />} />

    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
