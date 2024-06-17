import { Outlet } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import './index.css'
import Footer from "./components/navigation/Footer";
import { Provider } from "react-redux";
import { store } from "./app/store";
const App = () => {
  return (
    <Provider store={store}>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </Provider>
  );
};

export default App;