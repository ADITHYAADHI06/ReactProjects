import React from "react";
import Products from "./Products";

const ProductList = (props) => {
  return props.productList.length>0 ?
   props.productList.map((product, i) => {
    return (
      <div>
        <Products products={product}
          increQuantity={props.increQuantity}
          decreQuantity={props.decreQuantity}
          Remove={props.Remove}
         key={i} index={i}></Products>
      </div>
    );
  })
  : (
    <h1 className="noItem">No items in cart..</h1>
  );
};

export default ProductList;
