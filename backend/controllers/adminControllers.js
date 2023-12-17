import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import AdminModel from "../models/AdminModel.js"
import StudentModel from "../models/StudentModel.js"
import { createError } from "../utils/error.js"


// -----------Register--------------//
export async function addStudents(req, res, next) {
    try {
        const newUser = new StudentModel({
            studentId: req.body.studentId,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phoneNumber: req.body.phoneNumber,
            course: req.body.course,
            profilePicture: req.body.profilePicture,
            email: req.body.email,
            password: req.body.password,
        })
        const savedUser = newUser._doc;
        await newUser.save()
        res.status(201).send({
            status: "success",
            message: "User registerd successfully",
            data: savedUser
        })
    } catch (error) {
        next(error)
    }
}

export async function registerAdmin(req, res, next) {
    try {
        // HASHING PASSWORD
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(req.body.password, salt)
        const newUser = new AdminModel({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        })
        const { password, ...other } = newUser._doc;
        await newUser.save()
        res.status(201).send({
            status: "success",
            message: "User registerd successfully",
            data: other
        })
    } catch (error) {
        next(error)
    }
}

//-----------Login------------//
export async function loginAuth(req, res, next) {
    try {
        const user = await AdminModel.findOne({ email: req.body.email }); // FIND BY USERNAME
        // const user = await AdminModel.findOne({ email: req.body.email }); // FIND BY EMAIL
        if (!user) {
            next(createError(404, "User not found"))
            return
        };
        const isCorrect = await bcryptjs.compare(req.body.password, user.password);
        if (!isCorrect) {
            next(createError(400, "Incorrect email or password"))
            return
        };
        const token = jwt.sign({ user: user }, process.env.JWT_SECRET_KEY, { expiresIn: '24h' });
        const { password, ...other } = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true
        }).status(200).send({
            status: "Success",
            message: "User sign in successfully",
            data: other,
            access_token: token
        });
    } catch (error) {
        next(createError(error.status, error.message))
    }
}

export async function getAllStudent(req, res, next) {
    try {
        let allUser = await StudentModel.find()
        // let users = [];
        // allUser.map((user) => {
        //     users.push(user)
        // });
        res.status(200).send({
            status: "success",
            message: "List of all Users",
            data: allUser
        })
    } catch (error) {
        next(error)
    }
}