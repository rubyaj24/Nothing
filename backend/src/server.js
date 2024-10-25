import express from "express";

const app = express();

// app.use(cors({origin: 'http://localhost:3000', credentials: true}));

app.listen(5000, () => {
  console.log("Server is running ");
});
