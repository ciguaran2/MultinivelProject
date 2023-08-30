import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
    cedula:{
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
    },
    fullname:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

export default mongoose.model("Lead", leadSchema);