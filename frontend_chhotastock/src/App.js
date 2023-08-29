import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import Heading  from "./Images/Heading.png";
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
      <img width={"100%"} src={Heading} alt='Heading'/>
      <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/product" element={<ProductPage   />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
