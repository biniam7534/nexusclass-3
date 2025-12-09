
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URL)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch(err => console.log("MongoDB Connection Error:", err));

app.get("/items", (req, res) => {
    res.send("welcome to note app");
});

app.listen(PORT, () => {
    console.log(`note app is running on the port ${PORT}`);
});

