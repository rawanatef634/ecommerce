import multer from "multer";

const storage = multer.diskStorage({
    filename: function(req, file, fallback) {
        callback(null, file.originalname)
    }
});

const upload = multer({storage});

export default upload
