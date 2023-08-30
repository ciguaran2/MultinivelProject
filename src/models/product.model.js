import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    lenght:{
        type: String,
        required: true
    },
    height:{
        type: String,
        required: true
    },
    width:{
        type: String,
        required: false
    }
},{
    timestamps: true
})

export default mongoose.model("Product", productSchema)