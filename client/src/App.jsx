import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import ProductFormPage from './pages/ProductFormPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import { ProductProvider } from './context/ProductsContext.jsx'
import {LeadProvider} from './context/LeadsContext.jsx'
import { ArtisanProvider } from './context/ArtisansContext.jsx'
import Navbar from './components/Navbar.jsx'
import LeadsPage from './pages/LeadsPage.jsx'
import LeadFormPage from './pages/LeadFormPage.jsx'
import ArtisanFormPage from './pages/ArtisanFormPage.jsx'
import ArtisansPage from './pages/ArtisansPage.jsx'


function App(){

    return (
        

     <AuthProvider>
        <ProductProvider>
        <LeadProvider>
        <ArtisanProvider>
        <BrowserRouter>
            <Navbar/>
                <main className='container mx-auto px-10'>
                    <Routes>
                        <Route path='/' element={<HomePage/>} />
                        <Route path='/login' element={<LoginPage/>}/>
                        <Route path='/register' element={<RegisterPage/>}/>
                    
                        <Route element={<ProtectedRoute/>}>
                            <Route path='/products' element={<ProductsPage />}/>
                            <Route path='/add-product' element={<ProductFormPage />}/>
                            <Route path='/products/:id' element={<ProductFormPage />}/>
                            <Route path='/profile' element={<ProfilePage />}/>
                            <Route path='/leads' element={<LeadsPage/>}/>
                            <Route path='/add-lead' element={<LeadFormPage/>}/>
                            <Route path='/leads/:id' element={<LeadFormPage/>}/>
                            <Route path='/artisans' element={<ArtisansPage/>}/>
                            <Route path='/add-artisan' element={<ArtisanFormPage/>}/>
                            <Route path='/artisans/:id' element={<ArtisanFormPage/>}/>
                            
                    </Route>    
                    </Routes>
                </main>
        </BrowserRouter>
        </ArtisanProvider>
        </LeadProvider>
        </ProductProvider>
     </AuthProvider>

        

    )
}

export default App
