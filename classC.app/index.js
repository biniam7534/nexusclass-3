import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// Connect MongoDB (ONLY ONCE)
connectDB();

app.get("/items", (req, res) => {
    res.send("welcome to note app");
});

app.listen(PORT, () => {
    console.log(`note app is running on the port ${PORT}`);
});

