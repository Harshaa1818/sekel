import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('isUserLoggedIn') === 'true'){
            console.log(true)
            navigate('/user')
        }
        else {
            navigate('/login')
            console.log(false)
        }

    },[])

    return(
        <div>HomePage</div>
    )
}

export default HomePage