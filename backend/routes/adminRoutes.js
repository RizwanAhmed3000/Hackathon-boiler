import express from 'express';
import { addStudents, loginAuth, registerAdmin, getAllStudent } from '../controllers/adminControllers.js';
// import { login, signUp } from '../controllers/authControllers.js';
// import { forgotPassword, login, signUp } from '../Controllers/authContorllers.js';

const adminRoutes = express.Router();

// REGISTER ADMIN
adminRoutes.post('/register', registerAdmin)

// REGISTER STUDENTS
adminRoutes.post('/addstudents', addStudents)


adminRoutes.get('/getallstudents', getAllStudent)


// LOGIN USER
adminRoutes.post('/login', loginAuth)

// LOGIN USER
// authRoutes.get('/forgotpassword', forgotPassword)

export default adminRoutes