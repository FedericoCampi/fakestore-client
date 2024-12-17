import axios from "axios";

const API_URL: string = import.meta.env.VITE_API_URL || "https://fakestoreapi.com"

export const obtenerProductos = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const obtenerProductoPorId = async (id: string) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data;
};

export const realizarCompra = async (producto: { id: number; title: string; price: number }) => {
  const response = await axios.post(`${API_URL}/purchases`, {
    productId: producto.id,
    quantity: 1, // Cantidad por defecto, puedes ajustarla
    totalPrice: producto.price,
    name: producto.title,
  });
  return response.data;
};