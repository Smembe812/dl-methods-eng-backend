const multer = require('multer');
// const cloudinary = require('cloudinary')
const cloudinaryStorage = require("multer-storage-cloudinary");

module.exports = ({cloudinary}) =>{

    const storage = cloudinaryStorage({
        cloudinary: cloudinary,
        folder: "temp",
        allowedFormats: ["jpg", "png"]
    });



    // const storage = multer.diskStorage({
    //     destination: (req, file, cb) => {
    //             cb(null, destinationDirectory)
    //     },
    //     filename: (req, file, cb) => {
    //         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))

    //     }
    // })

    function receiveUploadedFile(req, res){
        return new Promise((resolve, reject) => {
            const upload = multer({ storage: storage}).single('file');
                
            upload(req, res, (err) => {
                if (err) {
                    reject(err)
                }
                resolve(req.file)
            });
        })
    }

    
    return async function (req, res, next) {
        try {
            const file = await receiveUploadedFile(req, res)
            console.warn(file)
            req.file = file
            return next()
        } catch (error) {
            return next(error)
        }
    }
}