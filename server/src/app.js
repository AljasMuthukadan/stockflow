import express from "express";
import inventoryRoutes from "./routes/inventory.routes.js";
import cors from "cors";
import ledgerRoutes from "./routes/ledger.routes.js"

const app = express();

// Global Middlewares
app.use(cors({
  origin: "http://localhost:5173", // Replace with your frontend URL
}));
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
app.use("/ledger", ledgerRoutes);

export default app;