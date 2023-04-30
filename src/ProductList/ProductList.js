import "./ProductList.css";
import SingleProduct from "./SingleProduct";

import image1 from './kate-1.jpg';
import image2 from './kate-2.jpg';
import image3 from './kate-3.jpg';
import image4 from './kate-4.jpg';

const ProductList = () => {
  return (
    <div className="ProductListx">
      <h1 className="text-center my-5">ProductList</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <SingleProduct source={image1}/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <SingleProduct  source={image2}/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <SingleProduct source={image3}/>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <SingleProduct source={image4}/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductList;
