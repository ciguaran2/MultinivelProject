import { createContext, useContext, useState, useEffect } from "react";
import { createArtisanRequest, getArtisansRequest, deleteArtisanRequest, getArtisanRequest, updateArtisanRequest} from '../api/artisans.js'

const ArtisanContext = createContext();

export const useArtisans = () =>{
    const context = useContext(ArtisanContext);

    if(!context){
        throw new Error("UseArtisans must be used within a ProductProvider");
    }
    return context;
}


export function ArtisanProvider({children}){
    const [artisans, setArtisans] = useState([]);
    const [errors, setErrors] = useState([]);

    
    const getArtisans = async () => {
        try {
            const res = await getArtisansRequest();
            setArtisans(res.data);
        } catch (error) {
            console.error(error)
        }
    }


    const createArtisan = async(artisan) =>{
        const res = await createArtisanRequest(artisan)
        console.log(res)
    };

    const deleteArtisan = async(id) =>{
        try {
            const res = await deleteArtisanRequest(id)
            if (res.status ==204) setArtisans(artisans.filter(artisan => artisan._id != id))
        } catch (error) {
            console.log(error)
        }
    }


    const getArtisan = async (id) => {
        try {
            const res = await getArtisanRequest(id);
            return res.data
        } catch (error) {
            console.error(error)
        }
    }


    const updateArtisan = async (id, artisan) => {
        try {
            await updateArtisanRequest(id, artisan)
        } catch (error) {
            console.error(error)            
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
        <ArtisanContext.Provider value={{artisans, createArtisan, getArtisans, deleteArtisan, getArtisan, updateArtisan,errors,}}>
            {children}
        </ArtisanContext.Provider>
    );
}