var express = require('express');
const { route } = require('.');
var router = express.Router();
var controller = require('../controller/list.controller');

router.get('/danhsach', controller.listSp);
router.get('/theloai', controller.listTl);
router.get('/user', controller.getusser);
router.post('/login', controller.userPost);
//add 
router.get('/add', controller.addSp);
router.post('/add', controller.addSp);

//delete
router.delete('/delete/:idsp', controller.deleteSP);

// edit
router.put('/edit/:idsp', controller.editSP);


module.exports = router;
