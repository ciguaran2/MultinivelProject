import { useEffect } from "react"
import { useLeads } from "../context/LeadsContext"
import LeadCard from "../components/LeadCard.jsx";

function LeadsPage(){

    const {getLeads, leads} = useLeads();

    useEffect(()=>{
        getLeads()
    },[]);

    return (
        <div>
            <header className='text-2xl font-bold'>Lideres:</header>
                
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                    
                            
                    {leads.map((lead) => (
                        <LeadCard lead={lead} key={lead._id} />
                        ))
                    }
                </div>
        </div>
    );
}

export default LeadsPage