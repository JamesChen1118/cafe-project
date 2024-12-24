import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cafeRoutes from './routes/module/cafeRoutes.js';
import userRoutes from './routes/module/userRoutes.js'

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/cafes', cafeRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 6100;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
