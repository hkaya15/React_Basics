import React from 'react'
import { useNavigate, useLocation} from "react-router-dom";

function Login() {
    let navigate = useNavigate();
    let location= useLocation();
    
    console.log(location)
    
    const login= ()=> {
        navigate('/');
       //  location.state.return_url  - You can use that value to identify the user target page while trying to enter "profile"
    }
  return (
    <>
    <div>Login</div>
    <button onClick={login}>Giriş Yap</button>
    </>
  )
}
// Çıkış yaptığında 
export default Login