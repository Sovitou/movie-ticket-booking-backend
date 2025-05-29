import express from "express"
import route from "./routes/routes.js"
import cors from "cors"
import dotenv from "env"
const app = express();
const port = 3000;
app.use(express.json());
app.use("/api/v1",route)
app.use(cors())
app.use(dotenv())
app.listen(port,()=>{
    console.log("working on ")
})

