import React, { useEffect, useState } from "react";
import { obtenerProductos } from "../api/fakestore";
import ProductCard from "./ProductCard";

type Producto = {
    id: number;
    title: string;
    image: string;
    price: number;
};

const ProductList: React.FC = () => {

    const [productos, setProductos] = useState<Producto[]>([]);
    const [busqueda, setBusqueda] = useState("");

    const productosFiltrados = productos.filter((producto) =>
        producto.title.toLowerCase().includes(busqueda.toLowerCase())
    );

    useEffect(() => {
        obtenerProductos().then((data) => setProductos(data));
    }, [busqueda]);

    return (
        <div className="flex flex-col items-center">
            <input
                type="text"
                placeholder="Buscar productos..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="border-2 p-2 rounded w-[200px] sm:min-w-[500px] border-black mb-4"
            />
            {productos.length === 0 ? (
                <div className="w-full h-full pt-10">
                    <p className="text-center text-gray-500 pt-6 text-xl">Cargando productos...</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-10">
                    {productosFiltrados.map((producto) => (
                        <div key={producto.id}>
                            <ProductCard producto={producto} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductList;