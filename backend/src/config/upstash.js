
import {Ratelimit} from "@upstash/ratelimit"
import {Redis} from "@upstash/redis" 
import dotenv from "dotenv";

dotenv.config({path: "./src/.env"})

// create a rateLimiter that allows 10 requests per 20 seconds
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(30, "20 s")}
)

export default ratelimit;