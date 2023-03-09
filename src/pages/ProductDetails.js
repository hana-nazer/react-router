import React from "react";
import { useParams } from "react-router-dom";


function ProductDetailsPage() {
  const params = useParams();
  return (
    <>
      <h1>Product Details</h1>
      {params.productId}
    </>
  );
}

export default ProductDetailsPage;
