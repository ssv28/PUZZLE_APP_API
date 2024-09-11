let express = require('express');
let router = express.Router();

let PuzzleController = require("../Controller/Puzzle")
let UserController = require("../Controller/User")



//CREATE DATA
router.post('/create', UserController.secure, PuzzleController.PuzzleCreate);


//ALL DATA FIND
router.get('/find', UserController.secure, PuzzleController.FindData);


// //FIND ONE
router.get('/findid/:id', UserController.secure, PuzzleController.FindId);


//DELETE DATA
router.delete('/delete/:id', UserController.secure, PuzzleController.PuzzleDelete);


//UPDATE DATA
router.patch('/update/:id', UserController.secure, PuzzleController.PuzzleUpdate);


module.exports = router;
