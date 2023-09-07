import { createContext, useContext, useState, useEffect } from "react";
import { createProductRequest, getProductsRequest, deleteProductRequest, getProductRequest, updateProductRequest} from '../api/products.js'

const ProductContext = createContext();


export const useProducts = () =>{
    const context = useContext(ProductContext);

    if(!context){
        throw new Error("UseProducts must be used within a ProductProvider");
    }
    return context;
}

export function ProductProvider({children}){
    const [products, setProducts] = useState([]);
    const [errors, setErrors] = useState([]);

    const getProducts = async () => {
        try {
            const res = await getProductsRequest();
            setProducts(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    const createProduct = async(product) =>{
        const res = await createProductRequest(product)
        console.log(res)
    };

    const deleteProduct = async(id) =>{
        try {
            const res = await deleteProductRequest(id)
            if (res.status ==204) setProducts(products.filter(product => product._id != id))
        } catch (error) {
            console.log(error)
        }
    }

    const getProduct = async (id) => {
        try {
            const res = await getProductRequest(id);
            return res.data
        } catch (error) {
            console.error(error)
        }
    }

    const updateProduct = async (id, product) => {
        try {
            await updateProductRequest(id, product)
        } catch (error) {
            console.error(error)            
        }
    }

    //para verificar si se ha ingresado la info correcta en el form
    const verifyCreationProduct = async (product) => {
        try {
            const res = await createProductRequest(product)
            console.log(res)
            setProducts(res.data)
        } catch (error) {
            if(Array.isArray(error.response.data)){
              return setErrors(error.response.data)
            }
            setErrors([error.response.data.message])
        }

    }

    useEffect(()=> {
        if(errors.length>0){
            const timer = setTimeout(()=>{
                setErrors([])
            }, 5000)
            return() => clearTimeout(timer)
        }
    }, [errors])

    return (
        <ProductContext.Provider value={{products, verifyCreationProduct, createProduct, getProducts, deleteProduct, getProduct, updateProduct,errors,}}>
            {children}
        </ProductContext.Provider>
    );
}