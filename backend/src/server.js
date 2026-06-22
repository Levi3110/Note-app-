import express from "express";
import notesRouter from "./routes/notesroute.js"
import {connectDB} from "./config/db.js"
import dotenv from "dotenv"
import RateLimiter from "./middleware/ratelimiter.js"
import cors from "cors"
import path from "path"

dotenv.config({path: "./src/.env"})

const app = express();
const port = process.env.PORT || 5001
const __dirname = path.resolve()

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

app.use(express.static(path.join(__dirname, "../frontend/dist")))

app.get("*", (req,res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
})

connectDB().then(() => {
app.listen(port, () => {
    console.log("server started on port:", port)
})
})