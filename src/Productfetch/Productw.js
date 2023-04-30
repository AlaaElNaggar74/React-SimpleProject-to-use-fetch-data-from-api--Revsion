
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import SiProductFetch from "./SiProductFetch";
const Productw = () => {
  let para=useParams();
  let [productiw,setproductiw]=useState({});
  let url="https://fakestoreapi.com/products"
  useEffect(() => {
    fetch(`${url}/${para.productid}`).then((res)=> res.json()).then((data)=> setproductiw(data));
  }, []);

  console.log(para);
  return (
    // <div>
    //   <h1>Product Number :{para.productid} --**-- Product KeyName :{para.keyname}</h1>
    //   <h1>{productiw.title} </h1>
    //   <img src={productiw.image} alt="erorr" />
    //   {/* <h1>Count : {productiw.rating.count} </h1> */}
    //   <h1>Count : {productiw.category} </h1>
    //   <h1>Price : {productiw.price} </h1>
      
    // </div>
  <div className="detailsx">
    <SiProductFetch prod={productiw} showButton={false}/>
  </div>
    
    

  );
}

export default Productw;
