import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      process.env.VITE_HOSTINGER_IP,
    ],
    credentials: true,
    // methods: ["GET", "POST"],
    // allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//API route

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Chaicode server" });
});

const PORT = 4000;

app.listen(PORT, () =>
  console.log(`Server is running ay ${PORT} at http://localhost:${PORT}`)
);
