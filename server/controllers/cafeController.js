import Cafe from '../models/cafe.js';
import jwt from 'jsonwebtoken';

// 獲取所有咖啡廳
export const getCafes = async (req, res) => {
    try {
        console.log("Fetching cafes...");
        const cafes = await Cafe.find({});
        console.log(`Found ${cafes.length} cafes`);
        res.json(cafes);
    } catch (error) {
        console.error("Error in getCafes:", error);
        res.status(500).json({ message: error.message });
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