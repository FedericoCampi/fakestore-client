import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerProductoPorId, realizarCompra } from "../api/fakestore";
import { useCart } from "../context/CartContext";

type Producto = {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
};

const ProductDetail: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const [producto, setProducto] = useState<Producto | null>(null);
  const { addToCart } = useCart();

  const handlePurchase = async () => {
    try {
      if (producto) {
        await realizarCompra({
          id: producto.id,
          title: producto.title,
          price: producto.price,
        });
        console.log("Compra exitosa y guardada en db:");
        addToCart(producto);
      }
    } catch (error) {
      console.error("Error en la compra:", error);
    }
  };

  useEffect(() => {
    if (id) {
      obtenerProductoPorId(id).then((data) => setProducto(data));
    }
  }, [id]);

  if (!producto) {
    return (
      <div className="p-20">
        <p className="text-center text-gray-500 text-xl">Cargando...</p>
      </div>
    )
  }

  return (
    <div className="p-8 h-full sm:flex flex-col text-center shadow-md">
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
        <button onClick={handlePurchase}
          className="bg-green-700 border hover:bg-green-500 cursor-pointer p-3 text-white rounded-md hover:text-black">
          Comprar ahora
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;