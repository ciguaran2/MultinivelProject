import { useProducts } from "../context/ProductsContext";
import { Link } from "react-router-dom";

function ProductCard({ product }){
    const { deleteProduct } = useProducts();

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <header className="flex justify-between">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <div className="flex gap-x-2 items-center">
                <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md" onClick={() =>{
                    deleteProduct(product._id);
                }}>Eliminar</button>
                <Link to={`/products/${product._id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md">Editar</Link>
            </div>
            </header>
            {/*<p className="text-slate-300">{product.description}</p>*/}
            <h1>Price: {product.price}</h1>
            <h1>Ancho: {product.lenght}</h1>
            <h1>Alto: {product.height}</h1>
            <h1>Radio {product.width}</h1>
        </div>
    );
}

export default ProductCard;