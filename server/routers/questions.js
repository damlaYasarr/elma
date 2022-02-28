
const express = require("express");

const  { questionApartClean} =require('../controllers/modal-questions/temizlik')
const router=express.Router();

router.get("/apartmantemizli/:id",questionApartClean );

module.exports=router;