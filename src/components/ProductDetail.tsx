import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerProductoPorId } from "../api/fakestore";
import { useCart } from "../context/CartContext";

const ProductDetail: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const [producto, setProducto] = useState<any>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) {
      obtenerProductoPorId(id).then((data) => setProducto(data));
    }
  }, [id]);

  if (!producto) {
    return (
      <div className="w-screen h-screen bg-gray-300">
        <p className="p-10">Cargando...</p>
      </div>
    )
  }

  return (
    <div className="p-8 h-full sm:flex flex-col text-center border-x border-black">
      <h1 className="text-2xl font-bold pb-6">{producto.title}</h1>
      <div className="">
        <img
          src={producto.image}
          alt={producto.title}
          className="h-60 object-contain mx-auto"
        />
      </div>
      <div className=" py-6 px-4">
        <p className="text-gray-700">{producto.description}</p>
        <p className="text-gray-700 text-2xl py-2">${producto.price.toFixed(2)}</p>
        <button onClick={() => addToCart(producto)}
          className="bg-green-700 border hover:bg-green-500 cursor-pointer p-3 text-white rounded-md hover:text-black">
          Comprar ahora
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;