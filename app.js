import express from "express"
import route from "./routes/routes.js"
import cors from "cors"
const app = express();
const port = 3000;
app.use(express.json());
app.use("/api/v1",route)
app.use(cors())
app.listen(port,()=>{
    console.log("working on ")
})

