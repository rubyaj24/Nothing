import express from "express";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
console.log(process.env.MONGO_URL);

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running....");
});

// app.use(cors({origin: 'http://localhost:3000', credentials: true}));

app.listen(PORT, () => {connectDB();
  console.log("Server is running on port http://localhost:${PORT}");
});
