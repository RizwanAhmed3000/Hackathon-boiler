import "./adminPanel.css"
import ResponsiveAppBar from '../../Components/Header/Header'
import Sidebar from '../../Components/Sidebar/Sidebar'
import HeadingBar from "../../Components/Appbar/Appbar"
import DataTable from "../../Components/Table/Table"
import ActiveTab from "../../Components/ActiveTab/ActiveTab"


const AdminPanel = () => {
    return (
        <div>
            <ResponsiveAppBar />
            <div className='adminContainer'>
                <div className="sidebarCon">
                    <Sidebar />
                </div>
                {/* <HeadingBar /> */}
                <div className="datatableCon">
                    <ActiveTab />
                    <DataTable />
                </div>
            </div>
        </div>
    )
}

export default AdminPanel