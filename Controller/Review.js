let REVIEW = require('../Models/review')
const bcrypt = require('bcrypt');

exports.ReviewCreate = async function (req, res, next) {
    try {

        let ReviewCreate = await REVIEW.create(req.body)

        res.status(200).json({
            status: "Success",
            message: "Review Create SuccessFully!",
            data: ReviewCreate

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

        let ReviewData = await REVIEW.find().populate("user").populate("puzzle")

        res.status(200).json({
            status: "Success",
            message: "Review Found SuccessFully!",
            data: ReviewData

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

        let ReviewData = await REVIEW.findById(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Review Find SuccessFully!",
            data: ReviewData

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.ReviewDelete = async function (req, res, next) {
    try {

        await REVIEW.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Review Delete SuccessFully!",
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.ReviewUpdate = async function (req, res, next) {
    try {

        console.log(req.body);

        let ReviewUpdate = await REVIEW.findByIdAndUpdate(req.params.id, req.body, { new: true })

        console.log(ReviewUpdate);

        res.status(200).json({
            status: "Success",
            message: "Review Update SuccessFully!",
            data: ReviewUpdate
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}
