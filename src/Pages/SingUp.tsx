import logo from "../.././public/assets/logo.png";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useFormik } from "formik";
import { signUpValidationSchema } from "../utils/validationschema";

export default function SignUp() {
  const initialValues = {
    email: "",
    password: "",
    password2: ""
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async (values) => {
      try {
        await register(values.email, values.password,);
      } catch (error) {
        console.error("Registration error:", error);
      }
    },
    validationSchema: signUpValidationSchema
  });

  const register = async (email: string, password: string,) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        
      );
      const user = userCredential.user;
      console.log("User registered:", user);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const { handleChange, handleSubmit, values, errors, handleBlur } = formik;

  return (
    <>
      <div className="flex flex-col items-center h-[100vh] justify-center gap-[58px]">
        <img src={logo} alt="" />
        <div className="w-[327px] bg-[#161D2F] rounded-[10px] flex flex-col pl-[24px] pr-[24px]">
          <h1 className="pt-[24px] pb-[40px] text-[32px] text-white font-normal">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              className="bg-transparent w-[279px] h-[37px] border-b border-[#5A698F] mb-[24px] outline-none text-white pl-[15px] pb-[17px]"
            />
            {errors.email && <p className="text-red-500 self-start mt-[-20px]">{errors.email}</p>}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              className="bg-transparent w-[279px] h-[37px] border-b border-[#5A698F] mb-[24px] outline-none text-white pl-[15px] pb-[17px]"
            />
            {errors.password && <p className="text-red-500 self-start mt-[-20px]">{errors.password}</p>}
            <input
              type="password"
              name="password2"
              placeholder="Repeat Password"
              value={values.password2}
              onBlur={handleBlur}
              onChange={handleChange}
              className="bg-transparent w-[279px] h-[37px] border-b border-[#5A698F] mb-[24px] outline-none text-white pl-[15px] pb-[17px]"
            />
            {errors.password2 && <p className="text-red-500 self-start mt-[-20px]">{errors.password2}</p>}
            <button type="submit" className="mt-[16px] bg-[#FC4747] h-[48px] text-white rounded-[6px] mb-[26px] text-center  w-[280px]">
              Create an account
            </button>
          </form>
          <p className="text-white font-normal pb-[26px] text-[15px] w-[100%] text-center">Already have an account?<Link to="/login"><span className="text-[#FC4747] pl-[8px]">Login</span></Link></p>
        </div>
      </div>
    </>
  );
}
