import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import ContactUs from "./Components/Pages/ContactUs";
import Seervices from "./Components/Pages/Seervices";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar";
import PageNotFound from "./Components/Pages/PageNotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="jumbotron-fluid">
          <Navbar />
          <dir className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/Seervices" element={<Seervices />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </dir>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
