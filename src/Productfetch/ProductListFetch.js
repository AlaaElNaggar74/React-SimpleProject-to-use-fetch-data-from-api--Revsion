import { useState, useEffect } from "react";
import SiProductFetch from "./SiProductFetch";
import "./prolistfetch.css";
const ProductListFetch = () => {
  let allprourl = "https://fakestoreapi.com/products";
  let allprodcategory = "https://fakestoreapi.com/products/categories";
  let [productfe, setProductfe] = useState([]);
  let [category, setcategory] = useState([]);

  let detallproduct = () => {
    fetch(allprourl)
      .then((res) => res.json())
      .then((data) => setProductfe(data));
  };

  let productcategory = () => {
    fetch(allprodcategory)
      .then((res) => res.json())
      .then((data) => setcategory(data));
  };
  let specifcategory = (cate) => {
    fetch(`https://fakestoreapi.com/products/category/${cate}`)
      .then((res) => res.json())
      .then((data) => setProductfe(data));
  };

  useEffect(() => {
    detallproduct();
    productcategory();
  }, []);

  let productarrlis = productfe.map((ele) => (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 sinpro" key={ele.id}>
      {" "}
      <SiProductFetch prod={ele} showButton={true} />{" "}
    </div>
  ));
  // ele.price >= 100 ?<div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 sinpro"> <SiProductFetch key={ele.id} prod={ele} showButton={true}/> </div> : null

  let categoryname = category.map((ele) => (
    <button
      key={ele}
      className="btn btn-danger me-2"
      onClick={() => {
        specifcategory(ele);
      }}
    >
      {ele}
    </button>
  ));

  return (
    <div className="proFetch py-5">
      <h1 className="text-center pb-5">Product Fetch</h1>
      <div className="text-center mb-5">
        <button
          className="btn btn-danger me-2 px-5"
          onClick={() => {
            detallproduct();
          }}
        >
          All
        </button>
        {categoryname}
      </div>
      <div className="container">
        <div className="row">{productarrlis}</div>
      </div>
    </div>
  );
};

export default ProductListFetch;
