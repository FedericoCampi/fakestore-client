import React from "react";
import ProductDetail from "../components/ProductDetail";

const ProductPage: React.FC = () => {
  return (
    <div className="bg-gray-300 min-w-screen min-h-screen flex justify-center">
      <div className="max-w-[800px]">
        <ProductDetail />
      </div>
    </div>
  );
};

export default ProductPage