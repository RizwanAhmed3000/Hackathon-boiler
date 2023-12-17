import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import AdminPanel from './Pages/AdminPanel/AdminPanel';
import Addstudent from './Pages/AddStudent/AddStudent';
import Attendance from './Pages/Attendance/Attendance';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login type="student" />} />
            <Route path='/adminlogin' element={<Login type="admin" />} />
            <Route path='/dashboard' element={<AdminPanel />} />
            <Route path='/dashboard/attendance' element={<Attendance />} />
            <Route path='/addstudent' element={<Addstudent />} />
            <Route path='/home' element={<Home />} />
            {/* <Route path='/signup' element={<Signup />} /> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
