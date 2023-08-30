import {useForm} from 'react-hook-form'
import { useLeads } from '../context/LeadsContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';

function LeadFormPage(){
    const {register, handleSubmit, setValue,  formState: { errors }} = useForm();
    const {createLead, getLead, updateLead} = useLeads();
    const {errors: registerErrors} = useLeads();
    const navigate = useNavigate();
    const params = useParams();

    const onChangeHandler = () =>{
        var input1 = document.getElementById("input1");
        var input2 = document.getElementById("input2");
        var fullname = document.getElementById("fullnameInput");
        document.getElementById('fullnameInput').value = input1.value + " " + input2.value;
        fullname.value = input1.value + " " + input2.value;
   }

   const Clicking = () =>{
    document.getElementById('fullnameInput').value = input1.value
}

    useEffect(()=>{
        async function loadLead(){
            if(params.id){
                const lead = await getLead(params.id);
                console.log(lead)
                setValue('cedula', lead.cedula)
                setValue('nombres', lead.nombres)
                setValue('apellidos', lead.apellidos)
                setValue('comunidad', lead.comunidad)
                setValue('celular', lead.celular)
                setValue('fullname', lead.fullname)
            }
        }
        loadLead()
    },[])

    const onSubmit = handleSubmit((data) =>{
        if (params.id){            
            updateLead(params.id, data)
        }else{
            createLead(data);
        }
        navigate('/leads')
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
                
                <label htmlFor="name">Cedula del Lider</label>
                
                <input type="text" placeholder="Cedula del Lider"
                {...register("cedula", {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' autoFocus
                
                />
                {
                 errors.cedula && (<p className='text-red-500'>Cedula es requerido</p>
                )}

                
                <label htmlFor="name">Nombres</label>
                
                <input type="text" placeholder="Nombres" id="input1"
                onInputCapture={e=> onChangeHandler()}
                {...register("nombres", {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' autoFocus
                
                />
                {
                 errors.nombres && (<p className='text-red-500'>Nombre es requerido</p>
                )}

                <label htmlFor="name">Apellidos</label>
                <input type="text" placeholder="Apellidos" id="input2"
                onInputCapture={e=> onChangeHandler()}
                {...register("apellidos", {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                autoFocus
                />

                 {
                 errors.apellidos && (<p className='text-red-500'>Apellido es requerido</p>
                )}

            
                <label htmlFor="name">Comunidad</label>
                <input type="text" placeholder="Comunidad"
                {...register("comunidad", {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2' autoFocus
                
                />
                {
                 errors.comunidad && (<p className='text-red-500'>Comunidad es requerida</p>
                )}
                
                <label className='px-4 py-2 rounded-md my-2' htmlFor="name">Celular:</label>
                <input type="text" placeholder="Celular"
                {...register('celular', {required: true})}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                autoFocus
                />

                {
                 errors.celular && (<p className='text-red-500'>Celular es requerido</p>
                )}

                <label className='px-4 py-2 rounded-md my-2'htmlFor="name">Fullname:</label>
                <input type="text" placeholder="Fullname" id="fullnameInput"
                {...register('fullname')}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                autoFocus
                />

            <div>
            <button className='bg-indigo-500 px-3 py-2 rounded-md'
            onClick={e=> Clicking()}>Guardar</button>
            </div>
            
            </form>

        </div>
    )

}

export default LeadFormPage