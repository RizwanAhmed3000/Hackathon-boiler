import "./AddStudent.css";
import React, { useState } from "react";
// import { ArrowLeft } from "@mui/icons-material";
import { TextField, Container } from "@mui/material";
import { ArrowLeft, CameraAlt, CloudDone } from "@mui/icons-material";
import axios from "axios";
const Addstudent = () => {
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [course, setCourse] = useState('')
    const [image, setImage] = useState('')
    const [studentId, setStudentId] = useState('')

    async function addStudentHandler() {
        console.log("add student working")
        console.log(firstname, "=====>>>>firstname")
        console.log(lastname, "=====>>>>lastname")
        console.log(email, "=====>>>>email")
        console.log(password, "=====>>>>password")
        console.log(phoneNumber, "=====>>>>phoneNumber")
        console.log(course, "=====>>>>course")
        console.log(studentId, "=====>>>>studentId")

        const obj = {
            firstname,
            lastname,
            email,
            password,
            phoneNumber,
            course,
            studentId,
        }

        const res = await axios.post('/admin/addstudents', obj);
        console.log(res?.data?.data);
    }
    return (
        <Container className="add-student-container">
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <div
                    style={{ display: "flex", alignItems: "center", marginBottom: 40 }}
                >
                    <ArrowLeft />
                    Add Student
                </div>
                <button onClick={addStudentHandler}>Add</button>
            </div>
            <div className="input">
                <input
                    type="file"
                    className="input_field"
                    accept="image/*"
                    name="image"
                    id="image"
                />
                <CameraAlt className="camera" />
            </div>
            <form className="inputItem">
                <TextField
                    label="FirstName"
                    name="FirstName"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                    label="LastName"
                    name="LastName"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setLastName(e.target.value)}
                />
                <TextField
                    label="Course"
                    name="Course"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setCourse(e.target.value)}
                />
                <TextField
                    label="Password"
                    name="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <TextField
                    label="Email"
                    name="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="PhoneNumber"
                    name="PhoneNumber"
                    type="number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <TextField
                    label="StudentId"
                    name="StudentId"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setStudentId(e.target.value)}
                />
                {/* <Button
          variant="contained"
          color="primary"
          fullWidth
        >
          Add Student
        </Button> */}
            </form>
        </Container>
    );
};

export default Addstudent;