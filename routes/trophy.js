let express = require('express');
let router = express.Router();

let TrophyController = require("../Controller/Trophy")
let UserController = require("../Controller/User")


const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
})

const upload = multer({ storage: storage })


//CREATE DATA
router.post('/create', upload.array("icon", 10), UserController.secure, TrophyController.TrophyCreate);


//ALL DATA FIND
router.get('/find', UserController.secure, TrophyController.FindData);


// //FIND ONE
router.get('/findid/:id', UserController.secure, TrophyController.FindId);


//DELETE DATA
router.delete('/delete/:id', UserController.secure, TrophyController.TrophyDelete);


//UPDATE DATA
router.patch('/update/:id',upload.array("icon", 10), UserController.secure, TrophyController.TrophyUpdate);


module.exports = router;
