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
        navigate('/user')
    }
}

    return(
        <div>
            <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
            <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
        </div>
    )

}

export default LoginPage

