// import './App.css';
import Nav from "./NavbarComponent/Nav";
import Sliderr from "./Slider/Sliderr";
import ProductList from "./ProductList/ProductList";
import ProductListFetch from "./Productfetch/ProductListFetch";
import { Routes, Route } from "react-router-dom";
import About from "./About/About";
import ProductDietals from "./Productfetch/ProductDietals";
import Productw from './Productfetch/Productw'
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Sliderr />
              <ProductList />
              <ProductListFetch />
            </>
          }
        />
        <Route path="about" element={<>
        <About/>
        </>} />
        <Route path="details" element={<>
        <ProductDietals/>
        </>} />
        <Route path="details/:detailid" element={<>
        <ProductDietals/>
        </>} />
        <Route path="details/:detailid/:key" element={<>
        <ProductDietals/>
        </>} />
      
        <Route path="product" element={<>
        <Productw/>
        </>} />
  
        <Route path="product/:productid" element={<>
        <Productw/>
        </>} />
  
        <Route path="product/:productid/:keyname" element={<>
        <Productw/>
        </>} />
  
      </Routes>
    </div>
  );
}

export default App;
