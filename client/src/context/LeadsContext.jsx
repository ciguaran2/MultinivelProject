import { createContext, useContext, useState, useEffect } from "react";
import { createLeadRequest, getLeadsRequest, deleteLeadRequest, getLeadRequest, updateLeadRequest} from '../api/leads.js'

const LeadContext = createContext();

export const useLeads = () =>{
    const context = useContext(LeadContext);

    if(!context){
        throw new Error("UseLeads must be used within a ProductProvider");
    }
    return context;
}


export function LeadProvider({children}){
    const [leads, setLeads] = useState([]);
    const [errors, setErrors] = useState([]);

    
    const getLeads = async () => {
        try {
            const res = await getLeadsRequest();
            setLeads(res.data);
        } catch (error) {
            console.error(error)
        }
    }


    const createLead = async(lead) =>{
        const res = await createLeadRequest(lead)
        console.log(res);
    };

    const deleteLead = async(id) =>{
        try {
            const res = await deleteLeadRequest(id)
            if (res.status ==204) setLeads(leads.filter(lead => lead._id != id))
        } catch (error) {
            console.log(error)
        }
    }


    const getLead = async (id) => {
        try {
            const res = await getLeadRequest(id);
            return res.data
        } catch (error) {
            console.error(error)
        }
    }


    const updateLead = async (id, lead) => {
        try {
            await updateLeadRequest(id, lead)
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
        <LeadContext.Provider value={{leads, createLead, getLeads, deleteLead, getLead, updateLead,errors,}}>
            {children}
        </LeadContext.Provider>
    );
}