import logo from "../../public/assets/logo.png";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useFormik } from "formik";
import { signUpValidationSchema } from "../utils/validationschema";

export default function SignUp() {
  const navigation = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password2: "",
    },
    validationSchema: signUpValidationSchema,
    onSubmit: async (values) => {
      try {
        await register(values.email, values.password);
        handleLink();
      } catch (error) {
        console.error("Registration error:", error);
      }
    },
  });

  const register = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User registered:", userCredential.user);
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  const handleLink = () => {
    navigation("/login");
  };

  const checkPassword = () => {
    if (formik.values.password2 !== formik.values.password) {
      alert("Passwords do not match.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (checkPassword()) {
      formik.handleSubmit();
    }
  };

  const { handleChange, values, errors, handleBlur } = formik;

  return (
    <div className="flex flex-col items-center h-screen justify-center gap-8">
      <img src={logo} alt="Logo" />
      <div className="w-[327px] bg-[#161D2F] rounded-[10px] flex flex-col pl-[24px] pr-[24px]">
        <h1 className="pt-[24px] pb-[40px] text-[32px] text-white font-normal">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            className={`bg-transparent w-[279px] h-[37px] border-b  mb-[24px] outline-none text-white pl-[15px] pb-[17px]${
              errors.email ? "border-red-500" : "border-[#5A698F]"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 mt-[-20px]">{errors.email}</p>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            className={`bg-transparent w-[279px] h-[37px] border-b  mb-[24px] outline-none text-white pl-[15px] pb-[17px]${
              errors.password ? "border-red-500" : "border-[#5A698F]"
            }`}
          />
          {errors.password && (
            <p className="text-red-500 mt-[-20px]">{errors.password}</p>
          )}
          <input
            type="password"
            name="password2"
            placeholder="Repeat Password"
            value={values.password2}
            onBlur={handleBlur}
            onChange={handleChange}
            className={`bg-transparent w-[279px] h-[37px] border-b  mb-[24px] outline-none text-white pl-[15px] pb-[17px]${
              errors.password2 ? "border-red-500" : "border-[#5A698F]"
            }`}
          />
          {errors.password2 && (
            <p className="text-red-500 mt-[-20px]">{errors.password2}</p>
          )}
          <button
            type="submit"
            className="mt-[16px] w-[279px] bg-[#FC4747] h-[48px] text-white rounded-[6px] mb-[26px]"
          >
            Create an account
          </button>
        </form>
        <p className="text-white pb-[24px] pl-[17px]">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
