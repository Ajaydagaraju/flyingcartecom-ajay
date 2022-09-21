import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import Background from "../../Image/Capture.PNG";
import Icon from "../../Image/Flyingkaartorg.png";
import Admin from "../DashBoard/Admin";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import flyingapi from "../../Callapi";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [open, setOpen] = React.useState(false);
  const [error, setError] = useState(" ");

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  console.log(user);

  const handleLogin = (e) => {
    e.preventDefault();
    

    axios
      .post(`${flyingapi}login/login`, {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        console.log(res);

        if (res.data.msg === "Logged in successfully" && res.status === 200) {
          // console.log("data entered");
          let token = res.headers.authorization;
          sessionStorage.setItem("User", JSON.stringify({ token }));
          setOpen(!open);
          const timer = setTimeout(() => {
            navigate("/body");
          }, 1500);
          return () => clearTimeout(timer);
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 401 || 403) {
          // console.log("data throw error");
          // setError(err.response.data.msg);
          alert(err.response.data.msg)
        }
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-4" style={{ marginTop: "2%" }}>
          <div className=" text-center">
            <img
              src={Icon}
              alt="Flyingkaart"
              className="img-fluid text-center mt-3"
              style={{ width: "150px", height: "auto" }}
            />
            <p className="signin">Sign In</p>
          </div>
          <form action="">
            <label htmlFor="" className="getlabel">
              Email / Phone No.
            </label>{" "}
            <br />
            <input
              name="email"
              type="text"
              value={user.email}
              placeholder="Enter Your Email or Phone Number!"
              onChange={handleChange}
              className="getdetails "
            />
            <label htmlFor="" className="getlabel">
              Password
            </label>
            <br />
            <input
              name="password"
              type="text"
              value={user.password}
              placeholder="Enter Your Password!"
              onChange={handleChange}
              className="getdetails mb-3"
            />
            <ul className="bottomvalue">
              <li className="remember">
                <input type="checkbox" /> Remember Password?
              </li>
              <li className="forgot">Forgot Password</li>
            </ul>
            <button
              className="primary button small mb-3 loginbtn"
              onClick={handleLogin}
            >
              Log In
            </button>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
              onClick={handleClose}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          </form>
          {error && <p className="text-danger h4 text-uppercase text-center w-75 d-flex justify-content-center mt-4 mb-0 mx-auto rounded">{error}</p>}
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6">
          <img
            src={Background}
            alt=""
            style={{ width: "100%", height: "100vh", textAlign: "center" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
