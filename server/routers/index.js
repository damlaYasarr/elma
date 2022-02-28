const express=require("express");
const user=require("./User");
const category=require("./category")
const questions=require('./questions')
const router=express.Router();

router.use("/user",user);
router.use("/category", category)
router.use("/questions", questions)
//each router should be here

module.exports=router;