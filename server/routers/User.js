const { getUser, 
    register,
    forgotPasswordEmail,
    resetPassword,
    updatePersonalInfo,
    login,
    logout,
    changePassword,addPicture
}=require("../controllers/user");
const {photoUpload}=require('../helpers/libraries/multer')
const express = require("express");
const router=express.Router();


router.get("/get", getUser);
router.post("/add", register);
router.patch("/forgotpassword", forgotPasswordEmail)
router.patch("/password-reset/:userId/:token",resetPassword )
router.post("/update-personal-info", updatePersonalInfo)

//router.put("/upload",photoUpload.single('image'),addPicture)
router.post("/login", login)
router.get("/logout", logout)
router.post("/changePassword", changePassword)
module.exports = router;