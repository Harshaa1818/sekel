import { useNavigate } from "react-router-dom"
import React, { useState} from "react"


const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleLogin = () => { 
        if(!username || !password){
            alert('Please enter username and password')
    }
    else{
        alert('Login Successful')
        localStorage.setItem('isUserLoggedIn',true)
        navigate('/user')
    }
}

    return (
       <div className="containerlogin">
         <div className="input"><h1> Login </h1></div>
       <div className="input">
         <input type="text" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </div>
        <div className="input">

        <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="loginbutton">
        <button onClick={handleLogin}>Login</button>
        </div>
        </div>
   
    );

}

export default LoginPage

