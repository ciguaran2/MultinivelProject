import { useArtisans } from "../context/ArtisansContext.jsx";
import { Link } from "react-router-dom";

function ArtisanCard({ artisan }){
    const { deleteArtisan } = useArtisans();

    return (
        <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            <header className="flex justify-between">
            <h1 className="text-2xl font-bold">{artisan.cedula_artesano}</h1>
            <div className="flex gap-x-2 items-center">
                <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md" onClick={() =>{
                    deleteArtisan(artisan._id);
                }}>Eliminar</button>
                <Link to={`/artisans/${artisan._id}`}
                className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md">Editar</Link>
            </div>
            </header>
            <p className="text-slate-300">{artisan.nombres}</p>
            <h1>{artisan.cedula_lider}</h1>
            <h1>{artisan.apellidos}</h1>
            <h1>{artisan.comunidad}</h1>
            <h1>{artisan.celular}</h1>
        </div>
    );
}

export default ArtisanCard;