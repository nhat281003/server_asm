const { default: mongoose } = require('mongoose');
var db = require('./db');

const spSchema = new db.mongoose.Schema(
    {
        name: {type: String, require: true},
        price: {type: Number, require: true},
        des: {type: String, require: false},
        type: {type: db.mongoose.Schema.Types.ObjectId, ref:'tlModel'}
    },
    {
        collection: 'danh_sach'
    }
);


const tlSchema = new mongoose.Schema(
    {
        name:{type: String, require: true},
        des: {type:String, require: false}
    },
    {
        collection:'the_loai'
    }
);


const userSchema = new mongoose.Schema(
    {
        name:{type: String, require: true},
        pass: {type:String, require: true}
    },
    {
        collection:'user'
    }
);

let spModel = db.mongoose.model('spModel', spSchema);
let tlModel = db.mongoose.model('tlModel', tlSchema);
let userModel = db.mongoose.model('userModel', userSchema);
module.exports ={spModel, tlModel, userModel };