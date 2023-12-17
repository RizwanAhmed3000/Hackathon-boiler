import { useNavigate } from "react-router-dom";
import "./sidebar.css"
import {
    Person, AccountBox, PersonAdd
} from '@mui/icons-material';
// import { Users } from "../../dummyData.js";

export default function Sidebar() {
    const navigate = useNavigate()

    const navToAddStudent = () => {
        console.log("hi add student")
        navigate('/addstudent')
    }
    const navToAttendance = () => {
        navigate('/dashboard/attendance')
    }
    const navToStudent = () => {
        navigate('/dashboard')
    }

    const sidebarItmesArray = [
        {
            icon: <Person className="itemIcon" />,
            text: "Students"
        },
        {
            icon: <AccountBox className="itemIcon" />,
            text: "Attendance"
        },
        {
            icon: <PersonAdd className="itemIcon" />,
            text: "Add Student"
        },

    ]

    return (
        <div className="sidebarContainer">
            <div className="sidebarWrapper">
                <SidebarItemList sidebarItmesArray={sidebarItmesArray} navToAddStudent={navToAddStudent} navToAttendance={navToAttendance} navToStudent={navToStudent} />
                {/* <SidebarFriendsList friendsArray={Users} PF={PF} /> */}
            </div>
        </div>
    )
}


//------------------------Item list-------------------------------//

function SidebarItemList({ sidebarItmesArray, navToAddStudent, navToAttendance, navToStudent }) {
    return (
        <>
            <ul className="sidebarItmesList">
                {/* <button className="seeMoreBtn">See more</button> */}
                <h3 className="logoSide">Attendence system</h3>
                {
                    Array.from([...sidebarItmesArray], (item, index) => (
                        <li key={index} className="sidebarItems">
                            {item.icon}
                            <span className="itemText" onClick={item.text === "Add Student" ? navToAddStudent : item.text === "Attendance" ? navToAttendance : item.text === "Students" ? navToStudent : () => console.log("hi")}>{item.text}</span>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

//------------------------Firends list-------------------------------//

export function SidebarFriendsList({ friendsArray, PF }) {
    return (
        <ul className="sidebarItmesList">
            {
                Array.from([...friendsArray], (user) => (
                    <li key={user?.id} className="sidebarItems">
                        <img src={PF + user?.profilePicture} alt="" className="profileImage" />
                        <span className="itemText">{user?.username}</span>
                    </li>
                ))
            }
            <button className="seeMoreBtn">See more</button>
        </ul>
    )
}