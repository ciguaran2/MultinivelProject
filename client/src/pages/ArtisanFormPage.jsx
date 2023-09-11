import '../custom.css';
import {useForm} from 'react-hook-form'
import { useArtisans } from '../context/ArtisansContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {getLeadsRequest} from '../api/leads'


function ArtisanFormPage(){

     const [leads, setLeads] = useState([]);
     const [text, setText] = useState("");     
     const [suggestions, setSuggestions] = useState([])
   
     useEffect(()=>{
         const getLeads = async () => {
             try {
                 const res = await getLeadsRequest();
                 console.log(res)
                 setLeads(res.data);
             } catch (error) {
                 console.error(error)
             }
         }
         getLeads();
     },[]);

     const onSuggestHandler = (text)=>{
        setText(text)
        setSuggestions([])
        console.log("imprimiendooo onSuggestHandler: "+ text)
        document.getElementById('final_lider').value = text
        document.getElementById('final_lider').focus()
        document.getElementById('final_lider').readOnly = true;
        console.log("finallll: "+ document.getElementById('final_lider').value)
     }

    const onChangeHandler = (text) =>{
         let matches =[]
         if (text.length>0){
             matches = leads.filter(lead =>{
                 const regex = new RegExp(`${text}`,"gi");
                 return lead.cedula.match(regex) || lead.fullname.match(regex)
             })
         }
         setSuggestions(matches)
         setText(text)
    }

    const {register, handleSubmit, setValue,  formState: { errors }} = useForm();
    const {createArtisan, getArtisan, updateArtisan} = useArtisans();
    const {errors: registerErrors} = useArtisans();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=>{
        async function loadArtisan(){
            if(params.id){
                const artisan = await getArtisan(params.id);
                console.log(artisan)
                setValue('cedula_lider', artisan.cedula_lider)
                setValue('cedula_artesano', artisan.cedula_artesano)
                setValue('nombres', artisan.nombres)
                setValue('apellidos', artisan.apellidos)
                setValue('comunidad', artisan.comunidad)
                setValue('celular', artisan.celular)
            }
        }
        loadArtisan()
    },[])

    const onSubmit = handleSubmit((data) =>{
        if (params.id){
            updateArtisan(params.id, data)
        }else{
            createArtisan(data);
        }
        navigate('/artisans')
    });

    return (
            
        <div>
            <div className='bg-zinc-600 max-w-md w-full p-6 rounded-md'>
                <label htmlFor="name">Buscar el Lider:</label> 
                
                
                <input type="text" id= "input_cc_lider" placeholder="Ingrese cedula o nombre del Lider"
                   
                   onChange={e=> onChangeHandler(e.target.value)}
                    value={text}
                    className='w-full bg-zinc-500 text-white px-4 py-2 rounded-md my-2' autoFocus 
                        
                />  
                {suggestions && suggestions.map((suggestion, i )=>
                    <div key= {i} className='suggestion col-m-12 justify-content-md-center'
                        onClick= {()=>onSuggestHandler(suggestion.cedula)} > {suggestion.cedula} {suggestion.fullname} 
                    </div>
                  )}
                    
            </div>
            <br></br>
            <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>
            
                {registerErrors.map((error, i) => (
                    <div className='bg-red-500 p-2 text-white my-2' key={i}>
                        {error}
                    </div>
                ))}

                <form onSubmit={onSubmit}>

                     <label htmlFor="name">Cedula del Lider</label>
                    <input type="text" placeholder="Cedula del Lider" id="final_lider"
                        {...register("cedula_lider", { required: true })}
                        value={text}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' autoFocus />
                    {errors.cedula_lider && (<p className='text-red-500'>Cedula del Lider es requerido</p>
                    )}
                    
                    <label htmlFor="name">Cedula del Artesano</label>
                    <input type="text" placeholder="Cedula del Artesano"
                        {...register("cedula_artesano", { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' autoFocus />
                    {errors.cedula_artesano && (<p className='text-red-500'>Cedula del Artesano es requerido</p>
                    )}

                    <label htmlFor="name">Nombres</label>
                    <input type="text" placeholder="Nombres"
                        {...register("nombres", { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' autoFocus />
                    {errors.nombres && (<p className='text-red-500'>Nombre es requerido</p>
                    )}

                    <label htmlFor="name">Apellidos</label>
                    <input type="text" placeholder="Apellidos"
                        {...register("apellidos", { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        autoFocus />

                    {errors.apellidos && (<p className='text-red-500'>Apellido es requerido</p>
                    )}


                    <label htmlFor="name">Comunidad</label>
                    <input type="text" placeholder="Comunidad"
                        {...register("comunidad", { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' autoFocus />
                    {errors.comunidad && (<p className='text-red-500'>Comunidad es requerida</p>
                    )}

                    <label className='px-4 py-2 rounded-md my-2' htmlFor="name">Celular:</label>
                    <input type="text" placeholder="Celular"
                        {...register('celular', { required: true })}
                        className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                        autoFocus />

                    {errors.celular && (<p className='text-red-500'>Celular es requerido</p>
                    )}

                    <div>
                        <button className='bg-indigo-500 px-3 py-2 rounded-md'>Guardar</button>
                    </div>

                </form>

            </div>
         </div>
            
    )

}

export default ArtisanFormPage