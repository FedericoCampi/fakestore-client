import axios from "axios";

const API_URL: string = import.meta.env.VITE_API_URL || "https://fakestoreapi.co"

export const obtenerProductos = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

export const obtenerProductoPorId = async (id: string) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data;
};