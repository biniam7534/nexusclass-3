import express from "express";
import dotenv from "dotenv";

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000;

app.use(express.json())
app.get("/items" ,(req, res) => {res.json({message: "fetching all items" });

});
app.listen(PORT, ()=>{
    console.log(`running of the port ${PORT}`)
})