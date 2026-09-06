import express from "express";
import inventoryRoutes from "./routes/inventory.routes.js";
import cors from "cors";

const app = express();

// Global Middlewares
app.use(cors());
app.use(express.json());

// Health Check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "StockFlow API is running",
  });
});

// Routes
app.use("/api/inventory", inventoryRoutes);

export default app;