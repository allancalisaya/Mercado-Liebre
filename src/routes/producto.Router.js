 multer
/*const configMulter = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.join(__dirname, '../../public/img'));
    },
    filename: function(req, file, cb){
        //milanesa02111996.pdf
        cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
    }
})
const upload = multer({storage: configMulter}); */