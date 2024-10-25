import express from "express";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.MONGO_URL);

const app = express();

app.get("/", (req, res) => {
  res.send("API is running....");
});

// app.use(cors({origin: 'http://localhost:3000', credentials: true}));

app.listen(5000, () => {connectDB();
  console.log("Server is running on port http://localhost:5000");
});
