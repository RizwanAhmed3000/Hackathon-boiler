import { useRef } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {auth, signInWithEmailAndPassword} from "../../firebaseConfig/config.js"


const Login = () => {

    const email = useRef();
    const password = useRef();
    const navigate = useNavigate()


    function changeHandler(){
        console.log("change Handler working")
    }

    function loginHandlerWithFirebase(e){
        e.preventDefault();

        if (email.current.value === "" || password.current.value === "") {
            // console.log("Missing fields")
            toast.error('Missing fields', { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, theme: "colored", });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
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

    return (
        <>
            <div className="login">
                <form className="lContainer" onSubmit={loginHandlerWithFirebase}>
                    <div className="l-input-group">
                        <input type="email" required name="email" className="l-input" id="username" ref={email}/>
                        <label className="l-user-label">Email</label>
                    </div>
                    <div className="l-input-group">
                        <input type="password" required name="password" className="l-input" id="password" ref={password}/>
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