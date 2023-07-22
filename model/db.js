const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/data_1').
then(() => console.log('đã kết nối vs mongo db')).catch((err) =>{
    console.log('lỗi kết nối');
    console.log(err);
});
module.exports = {mongoose};