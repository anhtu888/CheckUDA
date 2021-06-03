// business.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Products = new Schema({
    tenSanPham: { type: String },
    giaCa: { type: Number },
    nguoiChamSoc: { type: String },
    nguoiBanSp:{ type: String },
    baoQuan:{ type: String },
    noiTrong:{ type: String },
    ngayGieoTrong:{ type: Date, default: Date.now },
    ngayThuHoach:{ type: Date, default: Date.now},
    donVi:{ type: String },
    hinhAnh:{ type:String }
}, {
    collection: 'products'
});

module.exports = mongoose.model('Products', Products);