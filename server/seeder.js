/* eslint-env node */
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import cafes from './data/cafes.js';
import User from './models/user.js';
import Cafe from './models/cafe.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await User.deleteMany();
        await Cafe.deleteMany();

        const createdUsers = await User.insertMany(users);
        console.log('使用者資料匯入成功');

        const createdCafes = await Cafe.insertMany(cafes);
        console.log('咖啡廳資料匯入成功');

        process.exit();
    } catch (error) {
        console.error(`錯誤: ${error}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await User.deleteMany();
        await Cafe.deleteMany();

        console.log('資料已清空');
        process.exit();
    } catch (error) {
        console.error(`錯誤: ${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
