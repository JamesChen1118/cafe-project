import Cafe from '../models/cafe.js';
import jwt from 'jsonwebtoken';

// 獲取所有咖啡廳
export const getCafes = async (req, res) => {
    try {
        console.log("Fetching cafes from database...");
        const cafes = await Cafe.find({}).lean();
        console.log(`Found ${cafes.length} cafes`);

        if (!cafes || cafes.length === 0) {
            console.log("No cafes found in database");
            return res.status(404).json({ message: "No cafes found" });
        }

        res.json(cafes);
    } catch (error) {
        console.error("Error in getCafes:", error);
        res.status(500).json({
            message: "Server error while fetching cafes",
            error: error.message
        });
    }
};

// 獲取單一咖啡廳
export const getCafeById = async (req, res) => {
    try {
        const cafe = await Cafe.findById(req.params.id);
        if (cafe) {
            res.json(cafe);
        } else {
            res.status(404).json({ message: '找不到該咖啡廳' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};