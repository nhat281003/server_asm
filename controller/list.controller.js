// const { name } = require('ejs');
const db = require('../model/danhsach.model');
var fs = require ('fs');


//danhsachsp
exports.listSp = async (req, res, next) => {
     var listSanpham = await db.spModel.find().populate('type');
     res.send(listSanpham);
}


//add san pham 
exports.addSp = async (req, res, next) => {

    let list_TL = await db.tlModel.find();

    if(req.method =='POST'){

        //tạo đối tượng model để gán dữ liệu
        let objSP = new db.spModel();
        objSP.name = req.body.name;
        objSP.price = req.body.price;
        objSP.des = req.body.des;
        objSP.id_theloai = req.body.type; // them id the loai
        //ghi vào CSDL
        try{
            let new_sp = await objSP.save();
            console.log(new_sp);
            msg = 'Lưu thành công';
        } catch(error){
            msg = 'Error'+ error.message(); 
            console.log(error);
        }
    }

    res.send(list_TL);


}
//deletesanpham
exports.deleteSP =async (req,res,next) =>{
    let idsp = req.params.idsp
    try {
       await db.spModel.findByIdAndDelete({_id: idsp}); 
    } catch (error) {
        
    }

}

//editsanpham
exports.editSP = async (req, res, next) =>{

    let list_TL = await db.tlModel.find();
    console.log(list_TL);
    // load thong tin san pham
    let idsp = req.params.idsp;
    let objSP = await db.spModel.findById(idsp);
    
    if(req.method =='POST'){
        //kiểm tra hợp lệ dữ liệu

        //tạo đối tượng model để gán dữ liệu
        let objSP = new db.spModel();
        objSP.name = req.body.name;
        objSP.price = req.body.price;
        objSP.des = req.body.des;
        objSP.id_theloai = req.body.type; // them id the loai
        objSP._id = idsp;
        //ghi vào CSDL
        try{
            // let new_sp = await objSP.save();
            // console.log(new_sp);
            await db.spModel.findByIdAndUpdate({_id: idsp}, objSP);
    
        } catch(error){
            msg = 'Error'+ error.message(); 
            console.log(error);
        }
    }

    res.send({ list_TL, objSP})
}



//user
exports.getusser = async (req, res, next) => {
    var listuser = await db.userModel.find();
    res.send(listuser);
}

//thelpai
exports.listTl = async (req, res, next) => {
    var listTheloai = await db.tlModel.find();
    res.send(listTheloai);
}


//login
exports.userPost = async (req, res, next) => {

    var { name, pass } = req.query;

    var user = await db.userModel.find({name, pass});
    if(user.length == 0){
        res.send('token:sjhafjhasfjhfdjklfaskjnnnaem');
        
    } else {
        res.send(user);
    }
 
}