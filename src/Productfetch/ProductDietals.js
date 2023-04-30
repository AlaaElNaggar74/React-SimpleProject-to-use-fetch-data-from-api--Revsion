
import { useParams } from "react-router-dom";


const ProductDietals = () => {
  let parax=useParams();
  console.log(parax)
  return (
    <div className="prDitails ">
      
      <div className="container">
        <div className=" bg-danger d-flex justify-content-center align-items-center pd ">
        <h1 className="bg-warning p-3  rounded-pill">Product Details </h1>
        </div>
      </div>

  
    </div>
  );
}

export default ProductDietals;

