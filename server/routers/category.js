

const express = require("express");
const { addCategories,searchServe,getTemizlik,getdiger
    ,getdgn, getNakliyat,
    getSaglk,
    getTadilat,
    getTamir,
    getOzelders
} = require("../controllers/categories");
const router=express.Router();

router.post("/categoryAdd", addCategories)
router.get("/searchServe", searchServe)
router.get("/getTemizlik", getTemizlik)
router.get("/getdugun", getdgn)
router.get("/getnakliyat", getNakliyat)
router.get("/getsaglk", getSaglk)
router.get("/gettadilat", getTadilat)
router.get("/gettamir", getTamir)
router.get("/getOzelders", getOzelders)
module.exports=router;