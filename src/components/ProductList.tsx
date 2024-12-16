import React, { useEffect, useState } from "react";
import { obtenerProductos } from "../api/fakestore";
import ProductCard from "./ProductCard";

const ProductList: React.FC = () => {
    const [productos, setProductos] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const productosFiltrados = productos.filter((producto: any) =>
        producto.title.toLowerCase().includes(busqueda.toLowerCase())
    );

    useEffect(() => {
        obtenerProductos().then((data) => setProductos(data));
    }, [busqueda]);

    return (
        <div>
            <input
                type="text"
                placeholder="Buscar productos..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="border-2 p-2 rounded border-black mb-4 w-full"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-10">
                {productosFiltrados.map((producto: any) => (
                    <ProductCard
                        key={producto.id}
                        id={producto.id}
                        title={producto.title}
                        image={producto.image}
                        price={producto.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;