import React, { useState } from 'react';
import { TiThLargeOutline } from "react-icons/ti";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import logo from  "../../../public/assets/logo.png"

interface HeaderProps {
  cart: any[]; 
}

const Header: React.FC<HeaderProps> = ({ cart }) => {
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);

  const handleLogout = () => {
    setLogout(!logout);
  };

  const handleFav = () => {
    navigate("/fav", { state: { cart } });
  };

  return (
    <header className="flex items-center justify-between py-[20px] px-[16px] bg-[#161D2F] lg:flex-col lg:justify-start lg:w-[96px] lg:ml-[15px] lg:rounded-[7px] mt-[20px] lg:mb-[40px]">
      <img src={logo} alt="" />
      <div className="flex items-center gap-[15px] lg:flex-col lg:mt-[74px] lg:mb-[50px]">
        <Link  to="/home">
        <TiThLargeOutline className="h-[22px] w-[30px] text-white" />
        </Link>
        <FaRegBookmark className="h-[22px] w-[30px] text-[#5A698F]" onClick={handleFav} />
      </div>
      <div className="flex flex-col">
        <FaRegUser onClick={handleLogout} className="text-white cursor-pointer" />
        {logout ? <button onClick={() => navigate("/login")} className="text-white">log out</button> : null}
      </div>
    </header>
  );
};

export default Header;
