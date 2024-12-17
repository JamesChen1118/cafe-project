import mongoose from 'mongoose';

const cafeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '咖啡廳名稱為必填'],
  },
  address: {
    type: String,
    required: [true, '地址為必填'],
  },
  phone: {
    type: String,
  },
  openingHours: {
    type: String,
  },
  description: {
    type: String,
  }
}, {
  timestamps: true
});

export default mongoose.model('Cafe', cafeSchema); 