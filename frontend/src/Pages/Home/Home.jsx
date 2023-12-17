import "./home.css"
import ResponsiveAppBar from '../../Components/Header/Header'
import Card from '../../Components/Card/Card'
import MediaControlCard from '../../Components/MediaPlay/MediaPlayer'
import TopRatedCard from '../../Components/TopRatedCard/TopRatedCard'
import { useSelector } from "react-redux";
import axios from 'axios';
import { useState } from "react"


const Home = () => {
    const { user, isLoading } = useSelector(state => state.auth)
    const [disable, setDisable] = useState(false)
    console.log(user, "====>>>>> user")
    const { studentId, course } = user

    async function checkInHandler() {
        console.log("checkInHandler working")
        const res = await axios.post('/attendance/checkIn', { studentId, course })
        setDisable(!disable)
        console.log(res.data, "====>>>> data")
    }

    return (
        <div>
            <ResponsiveAppBar />
            <div className="homeContainer">
                <Card user={user} />
            </div>
            <div style={{ display: "flex" }}>
                <button className="searchBtn" style={{ margin: "50px 30px", width: 200 }} onClick={!disable ? checkInHandler : () => console.log("hi")}>{!disable ? "Check In" : "You are checked in"}</button>
                <button className="searchBtn" style={{ margin: "50px 30px", width: 200 }}>Check Out</button>
            </div>
            {/* <TopRatedCard /> */}
            {/* <MediaControlCard /> */}
        </div>
    )
}

export default Home