import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./context/AuthContext.jsx"

function ProtectedRoute(){
    const { loading, isAuthenticated } = useAuth()
    console.log("Estoy en ProtectedRoute: y loading es: " + loading + " y isAuthenticated es: " + isAuthenticated)
    if(loading) return <h1>Loading...</h1>

    if(!loading && !isAuthenticated) return <Navigate to='/login' replace />
    return <Outlet />
}

export default ProtectedRoute;