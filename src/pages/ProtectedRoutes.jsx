import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoutes = () => {

   const trainer = useSelector( store => store.trainer )

  if(trainer.length >= 3){
    return <Outlet />
  }else{
    alert('3 or more characters are needed')
    return <Navigate to='/' />
  }
}

export default ProtectedRoutes