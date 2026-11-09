import { Navigate, Outlet } from "react-router"

function PrivateRoute ({auth}){
  
  return auth ? <Outlet/> :  <Navigate to="/login" replace />

}

export default PrivateRoute