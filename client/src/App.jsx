import { Outlet } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import './index.css'
import Footer from "./components/navigation/Footer";
const App = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
};

export default App;