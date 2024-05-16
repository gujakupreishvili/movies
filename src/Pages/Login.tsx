import logo from "../.././public/assets/logo.png"
import { Link } from "react-router-dom";
export default function Login(){
  return(
    <>
    <div className=" flex flex-col items-center h-[100vh] justify-center gap-[58px]">
    <img src={logo} alt="" />
    <div className="w-[327px] bg-[#161D2F] rounded-[10px] flex flex-col pl-[24px] pr-[24px]">
    <h1 className="pt-[24px]  pb-[40px] text-[32px] text-white font-normal">Login</h1>
    <input type="email" name="" id="" placeholder="Email address"
     className="bg-transparent w-[279px] h-[37px] border-b boder-[#5A698F] mb-[24px] outline-none text-white pl-[15px] pb-[17px]" />
    <input type="paswword" name="" id="" placeholder="Password" 
    className="bg-transparent w-[279px] h-[37px] border-b boder-[#5A698F] mb-[24px] outline-none text-white pl-[15px] pb-[17px]" />
    <button className="mt-[16px] bg-[#FC4747] h-[48px] text-white rounded-[6px] mb-[26px]">Login to your account</button>
    <p className="text-white font-normal pb-[26px] text-[15px] w-[100%] text-center">Don’t have an account?<Link to={"/sign-up"}><span className="text-[#FC4747] pl-[8px]">Sing up</span></Link></p>
    </div>
    </div>
    </>
  )
}