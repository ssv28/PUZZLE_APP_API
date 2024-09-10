let express = require('express');
let router = express.Router();

let TrophyController = require("../Controller/Trophy")


//CREATE DATA
router.post('/create', TrophyController.TrophyCreate);


//ALL DATA FIND
router.get('/find', TrophyController.FindData);


// //FIND ONE
router.get('/findid/:id', TrophyController.FindId);


//DELETE DATA
router.delete('/delete/:id', TrophyController.TrophyDelete);


//UPDATE DATA
router.patch('/update/:id', TrophyController.TrophyUpdate);


module.exports = router;
