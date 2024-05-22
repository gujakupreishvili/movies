import logo from "../../../public/assets/logo.png";
import { FaRegBookmark } from "react-icons/fa";
import { TiThLargeOutline } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa6";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default  function Header(){
  const navigate = useNavigate();
  const [logout, setLogOut] =useState(false)
  const handleLogout = () => {
     setLogOut(!logout)
  }
  return(
    <header className=" flex items-center justify-between py-[20px] px-[16px] bg-[#161D2F] ">
     <img src={logo} alt="" />
     <div className=" flex items-center gap-[15px]">
     <TiThLargeOutline className="h-[22px] w-[30px] text-white" />
     <FaRegBookmark  className="h-[22px] w-[30px] text-[#5A698F]"/>
     </div>
     <div className=" flex flex-col ">
     <FaRegUser onClick={handleLogout}  className="text-white cursor-pointer"/>
     {logout ?<button onClick={()=>navigate("/login")} className="text-white">log out</button>:null}
     </div>
    </header>
  )
}