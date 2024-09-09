let Puzzle = require('../Models/puzzle')
const bcrypt = require('bcrypt');

exports.PuzzleCreate = async function (req, res, next) {
    try {

        let PuzzleCreate = await Puzzle.create(req.body)

        res.status(200).json({
            status: "Success",
            message: "Puzzle Create SuccessFully!",
            data: PuzzleCreate

        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.FindData = async function (req, res, next) {
    try {

        let PuzzleData = await Puzzle.find().populate("userId")

        res.status(200).json({
            status: "Success",
            message: "Puzzle Found SuccessFully!",
            data: PuzzleData

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }

}

exports.FindId = async function (req, res, next) {
    try {

        let puzzleFind = await Puzzle.findById(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Puzzle Find SuccessFully!",
            data: puzzleFind

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.PuzzleDelete = async function (req, res, next) {
    try {

        await Puzzle.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Puzzle Delete SuccessFully!",
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.PuzzleUpdate = async function (req, res, next) {
    try {

        console.log(req.body);

        let PuzzleUpdate = await Puzzle.findByIdAndUpdate(req.params.id, req.body, { new: true })

        console.log(PuzzleUpdate);

        res.status(200).json({
            status: "Success",
            message: "Puzzle Update SuccessFully!",
            data: PuzzleUpdate
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}
