import React, { useState } from 'react'
import "./Login.css"
import login from "../../images/loginImg/login.svg"
import { Link } from 'react-router-dom'
import { object, string } from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { addData } from '../../store/slices/userLoginDataSlice';

import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [showHidePass, setShowHidePass] = useState("password")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    var navigate = useNavigate();

    
    //---------------------------------validation Schema-----------------------------

    const loginSchema = object({
        email: string().trim().matches(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/, "email should be correct").required("email is required field"),
        password: string().required("password is required field")
    })
    const notify = (mes) => toast.error(mes);
    const sumbitLoginHandle = async () => {
        try {
            await loginSchema.validate({ email, password })
            const BASE_URL = process.env.REACT_APP_BASE_URL;
            axios.post(`${BASE_URL}/login`, { email, password }).then((res) => {
                if (res.data.status == "ok") {
                    localStorage.setItem("authorization" , res.data.authToken)
                    console.log("ok", res.data)
                    navigate("/")
                } else {
                    notify(res.data.msg)
                }
            }).catch((err) => {
                notify(err.message)
                console.log(err)
            })
        } catch (err) {
            notify(err.message)
                
        }
    }
    return (
        <div className='containerr'>
            <div className='left-child'>
                <div className="login-img"> <img src="data:image/jpeg;base64,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"></img></div>
            </div>
            <div className='right-child'>
                {/* ---- */}
                <div className="form">
                    <span className="signup">SIGN IN</span>
                    <input
                        type="email"
                        placeholder="Email address"
                        className="form--input"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    ></input>
                    <input
                        type={showHidePass}
                        placeholder="Password"
                        className="form--input"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    ></input>
                    <div className='showPass'><input type="checkbox" onChange={(e) => { e.target.checked == true ? setShowHidePass("text") : setShowHidePass("password") }} /><label> show password</label></div>
                    <div className="forget-password"><Link to={"/forget-password"}>~Forget Password </Link></div>
                    <div className="form--marketing">
                        <label htmlFor="okayToEmail" className="checkbox">
                            Create a new account -
                        </label><Link to={"/register"} className="sign-up">Sign Up</Link>
                    </div>
                    <button
                        className="form--submit"
                        onClick={sumbitLoginHandle}
                    > Sign In </button>
                </div>
                {/* ---- */}
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login
