import mongoose from "mongoose"
import dns from "node:dns"
import dotenv from "dotenv"

dns.setServers(["1.1.1.1", "8.8.8.8"])

dotenv.config({path: "./src/.env"})
export const connectDB = async() => {
    try { 
        await mongoose.connect(process.env.MONGO_URI)
        console.log ("MongoDB connected successfully")
    } catch (error) {
        console.error("Error connecting to mongoDB", error)
        process.exit(1)
    }
}

