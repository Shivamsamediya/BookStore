// eslint-disable-next-line no-unused-vars
import React from 'react'
import {useAuth} from "../context/AuthProvider"
import toast from 'react-hot-toast';

function Logout() {
  const[authUser,setAuthUser]=useAuth(); 
  
  const handleLogout=()=>{
    try {
        setAuthUser({
            ...authUser,
            user:null
        })
        localStorage.removeItem("Users");
        toast.success("Logout Successfully!!");
        window.location.reload();
        setTimeout(() => {}, 500);
    } catch (error) {
        toast.error("Error:"+error.message);
        setTimeout(() => {}, 500);
    }
  }
  return (
    <button className='px-3 py-2 btn bg-red-600 hover:bg-red-800 text-white rounded-md cursor-pointer'
    onClick={handleLogout}>
        Logout
    </button>
  )
}

export default Logout