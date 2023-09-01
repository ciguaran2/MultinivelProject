import express  from "express";
import morgan from 'morgan'
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import productsRoutes from './routes/products.routes.js'
import leadsRoutes from './routes/leads.routes.js'
import artisansRoutes from './routes/artisan.routes.js'
import cors from 'cors'

const app = express();

app.use(cors({
    origin: 'http://${windows.location.hostname}:5173',
    credentials: true
}))
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())

app.use ("/api",authRoutes)
app.use ("/api",productsRoutes)
app.use ("/api",leadsRoutes)
app.use ("/api",artisansRoutes)

export default app