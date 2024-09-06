// let User = require('../Models/users');
// const bcrypt = require('bcrypt');
// let jwt = require("jsonwebtoken")

// exports.secure = async function (req, res, next) {
//   try {

//     let token = req.headers.authorization
//     console.log(req.headers.authorization);
//     if (!token) throw new Error("Please enter a token")

//     let verify = jwt.verify(token, "PUZZLE")
//     console.log(verify);

//     let userVerify = await User.findById(verify.id)
//     if (!userVerify) throw new Error("User not found")

//     next()

//   } catch (error) {
//     res.status(400).json({
//       status: "Fail",
//       message: error.message
//     })
//   }
// }


// exports.UserSignup = async function (req, res, next) {
//   try {

//     console.log(req.file);

//     req.body.profileImage = req.file.originalname

//     req.body.password = await bcrypt.hash(req.body.password, 10)
//     let userCreate = await User.create(req.body)

//     res.status(200).json({
//       status: "Success",
//       message: "User Create SuccessFully!",
//       data: userCreate

//     })
//   } catch (error) {
//     res.status(400).json({
//       status: "Fail",
//       message: error.message
//     })
//   }

// }

// exports.UserLogin = async function (req, res, next) {
//   try {

//     let userFind = await User.findOne({ email: req.body.email })
//     if (!userFind) throw new Error("User Not Found!")

//     let passwordCompare = await bcrypt.compare(req.body.password, userFind.password)
//     if (!passwordCompare) throw new Error("Password Invalid!")

//     var token = jwt.sign({ id: userFind._id }, 'PUZZLE');

//     res.status(200).json({
//       status: "Success",
//       message: "User Login SuccessFully!",
//       data: userFind,
//       token

//     })

//   } catch (error) {
//     res.status(400).json({
//       status: "Fail",
//       message: error.message
//     })
//   }

// }

// exports.FindData = async function (req, res, next) {
//   try {

//     let userFind = await User.find()

//     res.status(200).json({
//       status: "Success",
//       message: "User Found SuccessFully!",
//       data: userFind

//     })

//   } catch (error) {
//     res.status(400).json({
//       status: "Fail",
//       message: error.message
//     })
//   }

// }

// exports.FindId = async function (req, res, next) {
//   try {

//     let userFind = await User.findById(req.params.id)

//     res.status(200).json({
//       status: "Success",
//       message: "User Find SuccessFully!",
//       data: userFind

//     })

//   } catch (error) {
//     res.status(400).json({
//       status: "Fail",
//       message: error.message
//     })
//   }
// }

// exports.UserDelete = async function (req, res, next) {
//   try {

//     await User.findByIdAndDelete(req.params.id)

//     res.status(200).json({
//       status: "Success",
//       message: "User Delete SuccessFully!",
//     })

//   } catch (error) {
//     res.status(400).json({
//       status: "Fail",
//       message: error.message
//     })
//   }
// }

// exports.UserUpdate = async function (req, res, next) {
//   try {

//     console.log("===>>>", req.body);

//     req.body.password = await bcrypt.hash(req.body.password, 10)
//     let updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
//     console.log(req.params.id);
//     console.log("~~~~~~>>>>", req.body);

//     console.log(">>>>>", updatedUser);

//     res.status(200).json({
//       status: "Success",
//       message: "User Update SuccessFully!",
//       data: updatedUser
//     })

//   } catch (error) {
//     res.status(400).json({
//       status: "Fail",
//       message: error.message
//     })
//   }
// }

const User = require('../Models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Middleware for Securing Routes
exports.secure = async function (req, res, next) {
    try {
        let token = req.headers.authorization;
        if (!token) throw new Error('Please enter a token');

        let verify = jwt.verify(token, 'PUZZLE');
        let userVerify = await User.findById(verify.id);
        if (!userVerify) throw new Error('User not found');

        next();
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

// User Signup
exports.UserSignup = async function (req, res, next) {
    try {
        if (!req.file) throw new Error('Profile picture upload failed');

        req.body.profileImage = req.file.filename; // Save the filename of the uploaded image
        req.body.password = await bcrypt.hash(req.body.password, 10); // Hash the password

        let userCreate = await User.create(req.body);

        res.status(200).json({
            status: 'Success',
            message: 'User created successfully!',
            data: userCreate
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

// User Login
exports.UserLogin = async function (req, res, next) {
    try {
        let userFind = await User.findOne({ email: req.body.email });
        if (!userFind) throw new Error('User not found!');

        let passwordCompare = await bcrypt.compare(req.body.password, userFind.password);
        if (!passwordCompare) throw new Error('Password invalid!');

        let token = jwt.sign({ id: userFind._id }, 'PUZZLE');

        res.status(200).json({
            status: 'Success',
            message: 'User logged in successfully!',
            data: userFind,
            token
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

// Find All Users
exports.FindData = async function (req, res, next) {
    try {
        let userFind = await User.find();

        res.status(200).json({
            status: 'Success',
            message: 'Users found successfully!',
            data: userFind
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

// Find User by ID
exports.FindId = async function (req, res, next) {
    try {
        let userFind = await User.findById(req.params.id);

        res.status(200).json({
            status: 'Success',
            message: 'User found successfully!',
            data: userFind
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

// Delete User by ID
exports.UserDelete = async function (req, res, next) {
    try {
        await User.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'Success',
            message: 'User deleted successfully!'
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};

// Update User by ID
exports.UserUpdate = async function (req, res, next) {
    try {
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10);
        }
        let updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json({
            status: 'Success',
            message: 'User updated successfully!',
            data: updatedUser
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            message: error.message
        });
    }
};
