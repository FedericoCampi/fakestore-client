import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartHeader: React.FC = () => {
  const { cart, removeFromCart } = useCart();
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setShowModal(true)}
      onMouseLeave={() => setShowModal(false)}
    >
      {/* Ícono del Carrito */}
      <div className="relative cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 text-gray-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3h16.5l-1.5 13.5H5.25L3.75 3zm0 0L5.25 16.5m0 0h12.75m-12.75 0a1.5 1.5 0 101.5 1.5m10.5-1.5a1.5 1.5 0 101.5 1.5"
          />
        </svg>
        {/* Contador del carrito */}
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
            {cart.length}
          </span>
        )}
      </div>

      {/* Modal al pasar el mouse */}
      {showModal && (
        <div className="absolute right-0 top-10 bg-white border rounded shadow-lg w-80 p-4 z-10">
          <h2 className="text-lg font-bold mb-2">Carrito de Compras</h2>
          {cart.length === 0 ? (
            <p>El carrito está vacío.</p>
          ) : (
            <ul className="max-h-60 overflow-y-auto">
              {cart.map((product) => (
                <li
                  key={product.id}
                  className="flex justify-between items-center py-2 border-b"
                >
                  <div>
                    <p className="font-semibold text-sm">{product.title}</p>
                    <p className="text-gray-600 text-xs">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="text-red-500 text-xs hover:underline"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default CartHeader;