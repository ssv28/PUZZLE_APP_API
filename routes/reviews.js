let express = require('express');
let router = express.Router();

let ReviewController = require("../Controller/Review")


//CREATE DATA
router.post('/create', ReviewController.ReviewCreate);


//ALL DATA FIND
router.get('/find', ReviewController.FindData);


// //FIND ONE
router.get('/findid/:id', ReviewController.FindId);


//DELETE DATA
router.delete('/delete/:id', ReviewController.ReviewDelete);


//UPDATE DATA
router.patch('/update/:id', ReviewController.ReviewUpdate);


module.exports = router;
