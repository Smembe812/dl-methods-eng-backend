const fs = require('fs');
const path = require('path');
const multer = require('multer');
const mkdirp = require('mkdirp');

const destinationDirectory = '/temp'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        mkdirp(destinationDirectory,(err) =>{
            if (err) {
                throw new Error(err)
            }
            else cb(null, destinationDirectory)
        });
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))

    }
})

function receiveUploadedFile(httpRequest){
    return new Promise((resolve, reject) => {
        const upload = multer({ storage: storage}).single('file');
            
        upload(httpRequest, res, (err) => {
            if (err) {
                reject(err)
            }

            const bitmap = fs.readFileSync(destinationDirectory + httpRequest.file.filename).toString('hex', 0, 4);
            
            if (!checkMagicNumbers(bitmap)) {
                fs.unlinkSync(destinationDirectory + httpRequest.file.filename);
                reject(new Error('File not valid'))
            }
            else{
                resolve(httpRequest)
            }

        });
    })
}

module.exports = async (req, res, next) => {
    try {
        await receiveUploadedFile(req)
        return next()
    } catch (error) {
        return next(error)
    }
}