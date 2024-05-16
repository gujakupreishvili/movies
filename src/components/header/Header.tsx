import logo from "../../../public/assets/logo.png";
import { MdLocalMovies } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import { RiTvFill } from "react-icons/ri";
import { TiThLargeOutline } from "react-icons/ti";
export default  function Header(){
  return(
    <header className=" flex items-center justify-between py-[20px] px-[16px] bg-[#161D2F] ">
     <img src={logo} alt="" />
     <div className=" flex items-center gap-[15px]">
     <TiThLargeOutline className="h-[22px] w-[30px] text-white" />
     <MdLocalMovies className="h-[22px] w-[30px] text-[#5A698F]" />
     <RiTvFill className="h-[22px] w-[30px] text-[#5A698F]" />
     <FaRegBookmark  className="h-[22px] w-[30px] text-[#5A698F]"/>
     </div>
     <img src="" alt="user img" />
    </header>
  )
}