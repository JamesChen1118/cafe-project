import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cafeRoutes from './routes/cafe.js';
import connectDB from './config/db.js';

dotenv.config();

const app = express();

app.use(express.json());

// 連接資料庫
connectDB();

// 設定路由
app.use('/api/cafes', cafeRoutes);

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
