let express = require('express');
let router = express.Router();

let ReviewController = require("../Controller/Review")
let UserController = require("../Controller/User")


//CREATE DATA
router.post('/create', UserController.secure, ReviewController.ReviewCreate);


//ALL DATA FIND
router.get('/find', UserController.secure, ReviewController.FindData);


// //FIND ONE
router.get('/findid/:id', UserController.secure, ReviewController.FindId);


//DELETE DATA
router.delete('/delete/:id', UserController.secure, ReviewController.ReviewDelete);


//UPDATE DATA
router.patch('/update/:id', UserController.secure, ReviewController.ReviewUpdate);


module.exports = router;
