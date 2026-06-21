import express from "express";
import notesRouter from "./routes/notesroute.js"
import {connectDB} from "./config/db.js"
import dotenv from "dotenv"
import RateLimiter from "./middleware/ratelimiter.js"
import cors from "cors"
dotenv.config({path: "./src/.env"})

const app = express();
const port = process.env.PORT || 5001

// middleware
app.use(cors({origin: "http://localhost:5173"}))
app.use(express.json()) // this middleware help parse json bodies: req.body
app.use(RateLimiter)
// simple custom middleware
// app.use((req, res, next)) => {
//     console.log("req method is $(req.method) and req URL is $(req.url)");
//     next();

// }
app.use("/api/notes", notesRouter)

connectDB().then(() => {
app.listen(port, () => {
    console.log("server started on port:", port)
})
})