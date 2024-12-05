/* eslint-env node */
import connectDB from "./config/db.js";
import cafes from "./data/cafes.js";
import Cafe from "./models/cafe.js";
import dotenv from "dotenv";

dotenv.config();

connectDB();

const importData = async () => {
    try {
        // 清除現有的咖啡廳資料
        await Cafe.deleteMany();
        console.log("已清除既有的咖啡廳資料");

        // 匯入新的咖啡廳資料
        await Cafe.insertMany(cafes);
        console.log("咖啡廳資料匯入成功");

        process.exit();
    } catch (error) {
        console.error(`錯誤: ${error}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Cafe.deleteMany();
        console.log("咖啡廳資料已全部刪除");

        process.exit();
    } catch (error) {
        console.error(`錯誤: ${error}`);
        process.exit(1);
    }
};

// 根據命令列參數決定要執行的操作
if (process.argv[2] === "-d") {
    destroyData();
} else {
    importData();
}
