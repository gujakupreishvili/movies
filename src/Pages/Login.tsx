import logo from "../.././public/assets/logo.png";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { loginValidationSchema } from "../utils/validationschema";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const initialValues = {
    loginemail: "",
    loginpassword: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      try {
        await login(auth, values.loginemail, values.loginpassword);
      } catch (error) {
        console.error("Login error:", error);
      }
    },
    validationSchema: loginValidationSchema,
  });

  

  const login = async (auth: any, loginemail: string, loginpassword: any) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginemail,
        loginpassword
      );
      
      navigate("/home");
      const user = userCredential.user;
      console.log("User logged in:", user);
      console.log("ega");
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const { handleChange, handleSubmit, values, errors, handleBlur } = formik;

  return (
    <>
      <div className="flex flex-col items-center h-[100vh] justify-center gap-[58px]">
        <img src={logo} alt="" />
        <form onSubmit={handleSubmit}>
          <div className="w-[327px] bg-[#161D2F] rounded-[10px] flex flex-col pl-[24px] pr-[24px]">
            <h1 className="pt-[24px] pb-[40px] text-[32px] text-white font-normal">
              Login
            </h1>
            <input
              type="email"
              name="loginemail"
              id="loginemail"
              placeholder="Email address"
              value={values.loginemail}
              onBlur={handleBlur}
              onChange={handleChange}
              className="bg-transparent w-[279px] h-[37px] border-b border-[#5A698F] mb-[24px] outline-none text-white pl-[15px] pb-[17px]"
            />
            {errors.loginemail && (
              <p className="text-red-500 self-start mt-[-20px]">
                {errors.loginemail}
              </p>
            )}
            <input
              type="password"
              name="loginpassword"
              id="loginpassword"
              placeholder="Password"
              value={values.loginpassword}
              onBlur={handleBlur}
              onChange={handleChange}
              className="bg-transparent w-[279px] h-[37px] border-b border-[#5A698F] mb-[24px] outline-none text-white pl-[15px] pb-[17px]"
            />
            {errors.loginpassword && (
              <p className="text-red-500 self-start mt-[-20px]">
                {errors.loginpassword}
              </p>
            )}
            <button
              type="submit"
              className="mt-[16px] bg-[#FC4747] h-[48px] text-white rounded-[6px] mb-[26px]"
            >
              Login to your account
            </button>
            <p className="text-white font-normal pb-[26px] text-[15px] w-[100%] text-center">
              Don’t have an account?
              <Link to={"/sign-up"}>
                <span className="text-[#FC4747] pl-[8px]">Sign up</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
