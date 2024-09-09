let express = require('express');
let router = express.Router();

let PuzzleController = require("../Controller/Puzzle")


//CREATE DATA
router.post('/create', PuzzleController.PuzzleCreate);


//ALL DATA FIND
router.get('/find', PuzzleController.FindData);


// //FIND ONE
router.get('/findid/:id', PuzzleController.FindId);


//DELETE DATA
router.delete('/delete/:id', PuzzleController.PuzzleDelete);


//UPDATE DATA
router.patch('/update/:id', PuzzleController.PuzzleUpdate);


module.exports = router;
