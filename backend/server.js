import express from "express"
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv"
import connectMongoDB from "./db/connec-mongodb.js";

dotenv.config()

const app = express();

console.log(process.env.MONGO_URI)

const PORT = process.env.PORT || 5000

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
    connectMongoDB();
})