
import Nav from './Components/Nav';
import Home from './Components/Home';
import Category from './Components/Category';
import "bootstrap/dist/css/bootstrap.css";
import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
//Navigate --> By default when the page loads it will navigate to certain URL//
import Electronics from './Components/Electronics';
import Jewelery from './Components/Jewelery';
import MensWearing from './Components/Menswearing';
import Womenswearing from './Components/Womenswearing';
import ProductDetails from './Components/ProductDetails';
import Pagenotfound from './Components/Pagenotfound';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/category" element={<Category/>}>
              {/* By default it willl navigate to Electronics url  */}
            <Route path="" element={<Navigate to="electronics"/>}/>

            <Route path="electronics" element={<Electronics/>}/>
            <Route path="jewelery" element={<Jewelery/>}/>
            <Route path="men's clothing" element={<MensWearing/>}/>
            <Route path="women's clothing" element={<Womenswearing/>}/>
          </Route>
          <Route path='/productDetails/:id'element={<ProductDetails/>}/>
          <Route path="*" element={<Pagenotfound/>}/>
        </Routes>
        </BrowserRouter>
    </div> 
  );
}

export default App;
