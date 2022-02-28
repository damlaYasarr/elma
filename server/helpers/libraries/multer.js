const multer= require("multer");


const imageStorage = multer.diskStorage({
    destination: 'image',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '.' + file.mimetype.split('/')[1])
    }
})

const photoUpload = multer({
    
    storage: imageStorage,
    limits: {
        fileSize: 1000000 //1mb
    },
    fileFilter(req, file, cb) {
        cb(undefined, true)
    }
})
 module.exports={photoUpload};