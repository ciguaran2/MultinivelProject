import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext.jsx"

function Navbar(){
    const {isAuthenticated, logout, user} = useAuth();

    return (
        <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
            <Link to ={
                isAuthenticated ? "/" : "/login"
            }>
           <h1 className="text-2xl font-bold ">Multinivel</h1>
           </Link>
            <ul className="flex gap-x-2">
                {isAuthenticated ? (
                <>
                    <li>
                        Bienvenido: {user.email}
                    </li>

                    {/* <li>
                        <Link to = '/add-product'>Agregar Producto</Link>
                    </li> */}

                    <li>
                        <Link to = '/login' onClick={()=>{logout();}}>Cerrar sesión</Link>
                    </li>
                
                </>
                ) : (
                <>
                    <li>
                        <Link to = '/login' className="bg-indigo-500 px-4 py-1 rounded-sm">Iniciar sesión</Link>
                    </li>

                    <li>
                        <Link to = '/register' className="bg-indigo-500 px-4 py-1 rounded-sm">Registrarse</Link>
                    </li>
                
                </>
                )}


            </ul>
        </nav>
    )
}

export default Navbar