import { useLeads } from "../context/LeadsContext.jsx";
import { Link } from "react-router-dom";

function LeadCard({ lead }){
    const { deleteLead } = useLeads();

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <header className="flex justify-between">
            <h1 className="text-2xl font-bold">{lead.fullname}</h1>
            <div className="flex gap-x-2 items-center">
                <button className="bg-red-500 hover:bg-red-600 text-white px-1 py-1 rounded-md" onClick={() =>{
                    deleteLead(lead._id);
                }}>Eliminar</button>
                <Link to={`/leads/${lead._id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white px-1 py-1 rounded-md">Editar</Link>
            </div>
            </header>
            <p className="text-slate-300"> Cedula: {lead.cedula}</p>
            {/*<h1>Apellidos: {lead.apellidos}</h1>*/}
            <h1>Comunidad: {lead.comunidad}</h1>
            <h1>Telefono: {lead.celular}</h1>
            {/*<h1>{lead.fullname}</h1>*/}
        </div>
    );
}

export default LeadCard;
