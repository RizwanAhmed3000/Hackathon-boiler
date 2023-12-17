import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';



const columns = [
    { field: 'id', headerName: 'StudentID', width: 130 },
    { field: 'Image', headerName: 'Profile Image', width: 130 },
    { field: 'name', headerName: 'Student name', width: 130 },
    { field: 'courseName', headerName: 'Course name', width: 130 },
    { field: 'password', headerName: 'Password', width: 130 },
];
const columnsForAttendance = [
    { field: 'id', headerName: 'StudentID', width: 130 },
    { field: 'courseName', headerName: 'Course name', width: 130 },
    { field: 'CheckInTime', headerName: 'Check-in-time', width: 130 },
    { field: 'Date', headerName: 'Date', width: 130 },
];



export default function DataTable({ type }) {
    const [rows, setRow] = useState([])
    
    const fetchData = async () => {
        const res = await axios.get('/admin/getallstudents');
        console.log(res.data.data)
        const filterData = res.data.data.map((item) => {
            return {
                id: item.studentId,
                // firstName: item.firstname,
                // lastName: item.lastname,
                courseName: item.course,
                password: item.password,
                Image: item.profilePicture || "😊",
                name: item.firstname + " " + item.lastname
            }
        })
        console.log(filterData)
        setRow(filterData)
    }

    const fetchDataForAttendance = async () => {
        const res = await axios.get('/attendance/getAtt');
        console.log(res.data)
        const filterData = res.data.map((item) => {
            return {
                id: item._id,
                courseName: item.course,
                CheckInTime: item.checkInTime,
                Date: item.date,
            }
        })
        console.log(filterData)
        setRow(filterData)
    }
    useEffect(() => {
        console.log(rows, "====>>>>> row ")
        if (type === "attendance") {
            fetchDataForAttendance()
        } else {
            fetchData()
        }
    }, [])
    // const rows = [
    //     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    //     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    //     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    // ];
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={type === "attendance" ? columnsForAttendance : columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}