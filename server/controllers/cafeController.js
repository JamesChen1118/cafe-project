import Cafe from '../models/cafe.js';


export const getCafes = async (req, res) => {
    try {
        const cafes = await Cafe.find();
        res.status(200).json(cafes);
    } catch (error) {
        console.error("獲取咖啡館失敗:", error);
        res.status(500).json({ message: "獲取咖啡館資料失敗" });
    }
};


export default { getCafes };