import './signup.css'

const Signup = () => {

    function changeHandler() {
        console.log("change Handler working")
    }

    function loginHandler() {
        console.log("Login handler working")
    }

    return (
        <>
            <div className="login">
                <div className="lContainer">
                    <div className="l-input-group">
                        <input type="email" required name="Email" className="l-input" id="Email" onChange={changeHandler} />
                        <label className="l-user-label">Email</label>
                    </div>
                    <div className="l-input-group">
                        <input type="text" required name="username" className="l-input" id="username" onChange={changeHandler} />
                        <label className="l-user-label">Username</label>
                    </div>
                    <div className="l-input-group">
                        <input type="password" required name="password" className="l-input" id="password" onChange={changeHandler} />
                        <label className="l-user-label">Password</label>
                    </div>
                    <div className="l-input-group">
                        <input type="password" required name="cPassword" className="l-input" id="cPassword" onChange={changeHandler} />
                        <label className="l-user-label">Confirm Password</label>
                    </div>
                    <button className="l-button searchBtn" onClick={loginHandler}>Signup</button>
                    {/* {isError && <span className="err">{isError.message}</span>} */}
                </div>
            </div>
        </>
    )
}

export default Signup