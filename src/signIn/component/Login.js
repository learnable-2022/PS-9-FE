import { useState } from "react";

import "./Login.css";
import background from "../image/withlogo.webp";
import { CiFacebook } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../image/logo.webp";
import Home from "../../dashboard/home";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../dashboard/components/dashboardButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdType, setPwdType] = useState("password");
  const [pwdFocus, setPwdFocus] = useState(false);

  const navigate = useNavigate();
  // const PWD_REGEX =
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/g;

  // useEffect(() => {
  //   const result = PWD_REGEX.test(pwd);
  //   setValidPwd(result);
  // }, [pwd]);

  const toggle_btn = () => {
    if (pwdType === "password") {
      setPwdType("text");
    } else {
      setPwdType("password");
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setEmployeeData(newData);  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = axios
      .post("https://payroll-team9.onrender.com/api/v1/users/login", {
        email,
        password: pwd,
      })
      .then((res) => {
        console.log("aaa", res);
        const isLoginSuccessful = res.data.accessToken;
        if (isLoginSuccessful) {
          const accessToken = isLoginSuccessful;
          localStorage.setItem("accessToken", accessToken);
          navigate("/home");
        }
      })

      .catch((err) => console.log(err));
  };

  <Routes>
    <Route path="/home" exact element={<Home />} />
  </Routes>;

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="login">
      <section className="img_container">
        <img className="login-img" src={background} alt="" />
        <div className="back_btn">
          <ArrowBackIcon onClick={goBack} />
          <p onClick={goBack}>Back </p>
        </div>
      </section>
      <section className="login-main">
        <div className="profile-top">
          <img className="login-logo" src={logo} alt="logo" />
        </div>

        <div className="signin_title">
          <h1>Sign in</h1>
          <p>Enter your E-mail & password</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-label" htmlFor="email">
            E-mail
          </label>
          <input
            name="email"
            type="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            required
            placeholder="example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label className="login-label" htmlFor="password">
            Password
          </label>
          <input
            type={pwdType}
            placeholder="password"
            name="password"
            required
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
          <div className="btn_eye">
            <i onClick={toggle_btn} className="toggle_btn">
              {pwdType === "password" ? (
                <AiOutlineEye />
              ) : (
                <AiOutlineEyeInvisible />
              )}
            </i>
          </div>

          <div className="text">
            <label htmlFor="check" className="login-check">
              <input type="checkbox" name="" id="check" /> Remember me{" "}
            </label>
            <p className="check-span">Forgot Password?</p>
          </div>
          <button type="submit" onSubmit={handleSubmit} className="login-btn">
            SIGN IN
          </button>
        </form>
        <p className="login-para">
          Don't have an account?{" "}
          <Link
            to="https://ddd1signup.netlify.app/"
            target="_blank"
            className="link"
          >
            <span>Sign up</span>
          </Link>
        </p>
        <div>
          <div className="line"></div> or <div className="line"></div>
        </div>
        <p className="login-para">Continue with social media</p>
        <div>
          <Link to="https://www.google.com" target="_blank">
            <FcGoogle className="icon" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Login;
