import "./App.css";
import Fetch from "./Pages/Fetch";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Entertainment from "./Pages/Entertainment";
import ScrollBtn from "./components/ScrollBtn/ScrollBtn";
import NotFound from "./Pages/NotFound";
import Business from "./Pages/Business";
import General from "./Pages/General";

function App() {
  const scrollTop=()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <div className="App">
      <ScrollBtn scrollTop={scrollTop}/>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Fetch/>}/>
      <Route path='/general' element={<General/>}/>
      <Route path="/business" element={<Business/>}/>
      <Route path="/entertainment" element={<Entertainment/>}/>
      <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
