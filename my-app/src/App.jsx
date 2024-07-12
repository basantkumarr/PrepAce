import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Courses from "./components/Courses";
import Detail from "./components/Detail";
 
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/course" element={<Courses/>} />
        <Route path="/detail" element={<Detail/>} />
      </Routes>
       <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
