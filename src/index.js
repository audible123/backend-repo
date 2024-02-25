import dotenv from "dotenv"

//this making it consistent we have converted this module format require('dotenv').config({path: './env'})

import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


connectDB()