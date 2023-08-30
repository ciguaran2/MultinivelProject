import app from './App.js'
import {connectDB} from './db.js'

connectDB()
app.listen(3000)
console.log('Server on port', 3000)