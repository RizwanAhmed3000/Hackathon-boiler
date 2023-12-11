import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"
import './signup.css'
import 'react-toastify/dist/ReactToastify.css';
import {auth, createUserWithEmailAndPassword, db, doc, setDoc} from "../../firebaseConfig/config.js"

const Signup = () => {

    const email = useRef();
    const username = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const navigate = useNavigate()


    //---------------------USER DATA IN FIRESTORE------------------//
    async function addDataToFirestore(userId){
        try {
            const userData = await setDoc(doc(db, "Users", userId), {
                username: username.current.value,
                email: email.current.value,
            });
        } catch (error) {
            console.log(error)
        }
    }

    //=================SIGN UP USEING FIREBASE===========================//
    function signupHandlerWithFirebase(e) {
        e.preventDefault();
        console.log(email.current.value, "=====>>>>> email");
        console.log(username.current.value, "=====>>>>> username");
        console.log(password.current.value, "=====>>>>> password");
        console.log(confirmPassword.current.value, "=====>>>>> confirmPassword");

        if (email.current.value === "" && username.current.value === "" && password.current.value === "" && confirmPassword.current.value === "") {
            // console.log("Missing fields")
            toast.error('Missing fields', { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, theme: "colored", });
        } else if (password.current.value.length < 8 ){

            toast.warning('Password must be atleast 8 characters long', { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, theme: "colored", });

        } else if(password.current.value !== confirmPassword.current.value){

            toast.warning('Password does not match', { position: "top-center", autoClose: 5000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, theme: "colored", });
            
        } else {
            //============CREATING NEW USER==========================//
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                addDataToFirestore(user?.uid)
                if(user){
                    navigate('/login')
                }
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
        }
    }

    return (
        <>
        
            <div className="login">
                <form className="lContainer" onSubmit={signupHandlerWithFirebase}>
                    <div className="l-input-group">
                        <input type="email" required name="Email" className="l-input" id="Email" ref={email} />
                        <label className="l-user-label">Email</label>
                    </div>
                    <div className="l-input-group">
                        <input type="text" required name="username" className="l-input" id="username" ref={username} />
                        <label className="l-user-label">Username</label>
                    </div>
                    <div className="l-input-group">
                        <input type="password" required name="password" className="l-input" id="password" ref={password} />
                        <label className="l-user-label">Password</label>
                    </div>
                    <div className="l-input-group">
                        <input type="password" required name="cPassword" className="l-input" id="cPassword" ref={confirmPassword} />
                        <label className="l-user-label">Confirm Password</label>
                    </div>
                    <button className="l-button searchBtn" type="submit">Signup</button>
                    {/* {isError && <span className="err">{isError.message}</span>} */}
                </form>
                <ToastContainer position="bottom-left" autoClose={5000} newestOnTop={false} hideProgressBar={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
            </div>
        </>
    )
}

export default Signup