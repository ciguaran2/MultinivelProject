import { useEffect } from "react"
import { useProducts } from "../context/ProductsContext"
import ProductCard from "../components/ProductCard"

function ProductsPage(){

    const {getProducts, products} = useProducts();

    useEffect(()=>{
        getProducts()
    },[]);

    
    
    return (
        <div>
            <header className='text-2xl font-bold'>Productos:</header>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-1">
        {products.map((product) => (
            <ProductCard product={product} key={product._id} />
            ))
        }

</div>   
</div>   
    
    );
}


export default ProductsPage