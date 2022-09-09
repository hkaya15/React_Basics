import  {Navigate,useLocation} from 'react-router-dom'
import React from 'react'

function PrivateRoute({children}) {
    let location= useLocation()
// Generally we can use Navigate with return process But sometimes we need to use as a function call. On that time we can use navigate()
    if(0<1){
        return <Navigate to="/auth/login/" replace={true}  state={{return_url: location.pathname}} />
    }
  return children
}

export default PrivateRoute