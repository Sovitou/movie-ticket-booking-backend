const express = require("express")

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.json({
        "status":"working fine"
    })
})
app.listen(port,()=>{
    console.log("working on ")
})

