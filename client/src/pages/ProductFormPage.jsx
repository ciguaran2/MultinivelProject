import {useForm} from 'react-hook-form'
import { useProducts } from '../context/ProductsContext.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';


function ProductFormPage(){
    const {register, handleSubmit, setValue,  formState: { errors }} = useForm();
    const {verifyCreationProduct, createProduct, getProduct, updateProduct} = useProducts();
    const {errors: registerErrors} = useProducts();
    const navigate = useNavigate();
    const params = useParams();

    

    useEffect(()=>{
        async function loadProduct(){
            if(params.id){
                const product = await getProduct(params.id);
                console.log(product)
                setValue('name', product.name)
                setValue('description', product.description)
                setValue('price', product.price)
                setValue('width', product.width)
                setValue('lenght', product.lenght)
                setValue('height', product.height)
            }
        }
        loadProduct()
    },[]) 

    const onSubmit = handleSubmit((data) =>{
        if (params.id){
            updateProduct(params.id, data)
        }else{
            createProduct(data);
        }
        navigate('/products')
    });
    return (
        <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>          
           
            {
                registerErrors.map((error, i) => (
                    <div className='bg-red-500 p-2 text-white my-2' key={i} >
                        {error}
                    </div>
                ))
            }

            <form onSubmit={onSubmit}>
                
                <label htmlFor="name">Nombre del producto</label>
                <input type="text" placeholder="Nombre producto"
                {...register("name", {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' autoFocus
                
                />
                {
                 errors.name && (<p className='text-red-500'>Nombre del Producto es requerido</p>
                )}

                <label htmlFor="name">Descripción del producto</label>
                <textarea rows="3" placeholder="Descripción del producto"
                {...register('description')}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'                
                ></textarea>

                <label htmlFor="name">Precio</label>
                <input type="text" placeholder="Precio"
                {...register("price", {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                autoFocus
                />

                 {
                 errors.price && (<p className='text-red-500'>El precio es requerido</p>
                )}

            <div className='bg-zinc-600 max-w-md w-full p-4 rounded-md'>
                <h1>Medidas del producto</h1>
                
                <label className='px-4 py-2 rounded-md my-2' htmlFor="name">Radio:</label>
                <input type="text" placeholder="Radio"
                {...register('width')}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                autoFocus
                />
                
                <label className='px-4 py-2 rounded-md my-2' htmlFor="name">Ancho:</label>
                <input type="text" placeholder="Ancho"
                {...register('lenght', {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                autoFocus
                />

                {
                 errors.lenght && (<p className='text-red-500'>Medida de ancho requerida</p>
                )}
                
                <label className='px-4 py-2 rounded-md my-2' htmlFor="name">Alto:</label>
                <input type="text" placeholder="Alto"
                {...register('height', {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                autoFocus
                />

                {
                 errors.height && (<p className='text-red-500'>Medida de altura requerida</p>
                )}
                
                
            </div>

            <div>
            <button className='bg-indigo-500 px-3 py-2 rounded-md'>Guardar</button>
            </div>
            
            </form>       

        </div>
        
    )
}

export default ProductFormPage