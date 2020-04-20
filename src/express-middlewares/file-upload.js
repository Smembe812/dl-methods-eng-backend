const multer = require('multer');
const cloudinaryStorage = require("multer-storage-cloudinary");

module.exports = ({cloudinary}) =>{

    const storage = cloudinaryStorage({
        cloudinary: cloudinary,
        allowedFormats: ["jpg", "png"]
    });

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

            req.file = file
            return next()
        } catch (error) {
            return next(error)
        }
    }
}