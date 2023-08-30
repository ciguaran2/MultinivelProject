import mongoose from "mongoose";

const artisanSchema = new mongoose.Schema({
    cedula_lider:{
        type: String,
        required: true
    },
    cedula_artesano:{
        type: String,
        required: true
    },
    nombres:{
        type: String,
        required: true
    },
    apellidos:{
        type: String,
        required: true
    },
    comunidad:{
        type: String,
        required: true
    },
    celular:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

export default mongoose.model("Artisan", artisanSchema)