import express from "express";
import dotenv from "dotenv";

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000;

app.use(express.json())
app.get("/items" ,(req, res) => {res.json({message: "fetching all items" });

});
app.post("/items", (req, res)=>{
    const data = req.body;
    res.json({messsage: "items created", item:data})
})

app.patch("/items/:id",(req, res)=> {
    const { id } = req.params;
    const data =req.body;
    res.json({message: `items ${id} updated`, updatedData: req.body})
})
app.delete("/items/:id", (req,res)=> {
    const {id} = req.params;
    res.json ({message: `items ${id} deleted`})
})

app.listen(PORT, ()=>{
    console.log(`running of the port ${PORT}`)
})