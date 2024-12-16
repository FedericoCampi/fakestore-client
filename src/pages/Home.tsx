import React from "react";
import ProductList from "../components/ProductList";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-300 flex justify-center">
      <div className="p-6 max-w-[1000px]">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-4">Fakestore api</h1>
          <ProductList />
        </div>
      </div>
    </div>

  );
};

export default Home;