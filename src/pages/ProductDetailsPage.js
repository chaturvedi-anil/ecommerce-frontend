import React from "react";

import Navbar from "../features/navbar/Navbar";
import ProductDeatils from "../features/productList/components/ProductDetails";

const ProductDetailsPage = () => {
  return (
    <div>
      <Navbar>
        <ProductDeatils />
      </Navbar>
    </div>
  );
};

export default ProductDetailsPage;
