import dotenv from "dotenv"

//this making it consistent we have converted this module format require('dotenv').config({path: './env'})

import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


connectDB()
.then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server is running at port : ${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });