import mongoose from "mongoose";

export const connectDB = async() =>{
    try {
        await mongoose.connect('mongodb://ciguaran:Matilde2019@ac-s4b1a1v-shard-00-00.fyhqtrf.mongodb.net:27017,ac-s4b1a1v-shard-00-01.fyhqtrf.mongodb.net:27017,ac-s4b1a1v-shard-00-02.fyhqtrf.mongodb.net:27017/?replicaSet=atlas-k8o492-shard-0&ssl=true&authSource=admin')
        console.log(">>> DB is connected")
    } catch (error) {
        console.log(error)
    }
}
