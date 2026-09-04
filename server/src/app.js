import express from "express"
import inventoryRoutes from "./routes/inventory.routes.js"
import cors from "cors"
const app = express();
app.use(cors());
// Global Middlewares
app.use(express.json());
app.get('/api/health', (req, res) => {
    res.status(200).json({
    success: true,
    message: "StockFlow API is running",
  });
})
// Routes Middlewares
app.use("/api/inventory", inventoryRoutes);

export default app;