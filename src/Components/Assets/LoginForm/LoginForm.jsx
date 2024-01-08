import React, { useState } from 'react'

import { FaLock, FaLockOpen, FaUser } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';

import './LoginForm.css'
import { toast } from 'react-toastify';

const LoginForm = ({ setLogin }) => {

    const navigate = useNavigate()

    const [submit, setSubmit] = useState({ username: "", password: "" })

    const [lookPassword, setLookPassword] = useState("password")

    const [colorFalse, setColorFalse] = useState("")

    const [forgotP, setForgotP] = useState(false)

    const [redColor, setRedColor] = useState("")

    const handleSubmit = (e) => {
        setSubmit({ ...submit, [e.target.name]: e.target.value })
    }

    const submitForm = (e) => {
        e.preventDefault();
        if (submit.username === "Tohir") {
            if (submit.password === "2003") {
                navigate("/home")
                setLogin(true)
                localStorage.setItem("login", true)
                toast.success("completed")
            } else {
                toast.error("Password eror")
                setColorFalse("redColorPassword")
            }
        } else if (submit.password === "2003") {
            toast.error("Username error");
            setColorFalse("redColorUsername")
        } else if (submit.username !== "Tohir" || submit.password !== "2003") {
            toast.error("Username and password error");
            setColorFalse(true)
            setRedColor("redColor")
        }
    }

    console.log(redColor);

    const passwordLook = () => {
        if (lookPassword === "password") {
            setLookPassword("text")
        } else {
            setLookPassword("password")
        }
    }

    const ForgotPassword = () => {
        setForgotP(true);
    }

    return (
        <div className='wrapper'>
            <form onSubmit={submitForm} action="">
                <h1>Login</h1>

                <div className='input-box'>
                    <input autocomplete="current-password" name='username' value={submit.username} onChange={handleSubmit} type="text" placeholder='Username' required />
                    <FaUser className={ colorFalse ? `icon ${redColor} ${colorFalse==="redColorUsername"? colorFalse : ""} ` : 'icon'} />
                </div>

                <div className='input-box'>
                    <input autocomplete="current-password" name='password' value={submit.password} onChange={handleSubmit} type={lookPassword} placeholder='Password' required />

                    {lookPassword === "password" ? (
                        <FaLock onClick={passwordLook}  className={colorFalse ? `${redColor} icon ${colorFalse==="redColorPassword"? colorFalse : ""} ` : 'icon'} />
                    ) : (
                        <FaLockOpen onClick={passwordLook} className={colorFalse ? `${redColor} icon ${colorFalse==="redColorPassword"? colorFalse : ""} ` : 'icon'} />
                    )}
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    {forgotP ?
                        (<Link style={{ color: "red" }} > Login: Tohir, Password: 2003</Link>) :
                        (<Link onClick={ForgotPassword}> Forgot password</Link>)
                    }
                </div>

                <button type='submit'>Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href='#register'>Register</a></p>
                </div>

            </form>
        </div>
    )
}

export default LoginForm
