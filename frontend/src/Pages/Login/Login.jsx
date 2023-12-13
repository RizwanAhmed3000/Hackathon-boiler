import { useRef, useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {auth, signInWithEmailAndPassword} from "../../firebaseConfig/config.js"
import { loginFailed, loginPending, loginSuccess } from '../../Redux/Slices/authSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';



const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const {user, isLoading, error} = useSelector(state=> state.auth)
    // console.log(isLoading)
    const navigate = useNavigate()


    function changeHandler(){
        console.log("change Handler working")
    }

    function loginHandlerWithFirebase(e){
        e.preventDefault();

        if (email === "" || password === "") {
            // console.log("Missing fields")
            toast.error('Missing fields', { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, theme: "colored", });
        } else {
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
                const user = userCredential.user;
                if(user){
                    navigate('/')
                } else if(!user) {
                    toast.error('Wrong credentials', { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, theme: "colored", });
                }
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
        }
    }

    async function loginpWithMongo (e){
        e.preventDefault();
        console.log(email, "=====>>>>> email");
        console.log(password, "=====>>>>> password");
        if (email === "" && password === "") {
            // console.log("Missing fields")
            toast.error('Missing fields', { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, theme: "colored", });

        } else {
            dispatch(loginPending());
            try {
                const res = await axios.post('/auth/login' , {email, password});
                console.log(res?.data?.data)
                dispatch(loginSuccess(res?.data?.data))
                // navigate('/login')
            } catch (error) {
                console.log(error.response.data);
                // setError(error.response)
                dispatch(loginFailed(error.response))
            }
        }
    }

    return (
        <>
            <div className="login">
                <form className="lContainer" onSubmit={loginpWithMongo}>
                    <div className="l-input-group">
                        <input type="email" required name="email" className="l-input" id="username" onChange={(e) => setEmail(e.target.value)}/>
                        <label className="l-user-label">Email</label>
                    </div>
                    <div className="l-input-group">
                        <input type="password" required name="password" className="l-input" id="password" onChange={(e) => setPassword(e.target.value)}/>
                        <label className="l-user-label">Password</label>
                    </div>
                    <button className="l-button searchBtn" type='submit'>Login</button>
                    {/* {isError && <span className="err">{isError.message}</span>} */}
                </form>
                <ToastContainer position="bottom-left" autoClose={5000} newestOnTop={false} hideProgressBar={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
            </div>
        </>
    )
}

export default Login