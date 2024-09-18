let TROPHY = require('../Models/trophy')
const bcrypt = require('bcrypt');

exports.TrophyCreate = async function (req, res, next) {
    try {

        console.log(req.files); 
        req.body.icon = req.files.map((el) => el.filename) 

        let TrophyCreate = await TROPHY.create(req.body)

        res.status(200).json({
            status: "Success",
            message: "Trophy Award Create SuccessFully!",
            data: TrophyCreate

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

        let TrophyData = await TROPHY.find().populate("earnedBy")

        res.status(200).json({
            status: "Success",
            message: "Trophy Award Found SuccessFully!",
            data: TrophyData

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

        let TrophyData = await TROPHY.findById(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Trophy Award Find SuccessFully!",
            data: TrophyData

        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.TrophyDelete = async function (req, res, next) {
    try {

        await TROPHY.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: "Success",
            message: "Trophy Award Delete SuccessFully!",
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.TrophyUpdate = async function (req, res, next) {
    try {

        console.log(req.files); 
        req.body.icon = req.files.map((el) => el.filename) 
        
        console.log(req.body);
        let TrophyUpdate = await TROPHY.findByIdAndUpdate(req.params.id, req.body, { new: true })

        console.log(TrophyUpdate);

        res.status(200).json({
            status: "Success",
            message: "Trophy Award Update SuccessFully!",
            data: TrophyUpdate
        })

    } catch (error) {
        res.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}
